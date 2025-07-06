#!/bin/bash

# Simple deployment script for Guess Who Online

echo "🎮 Guess Who Online - Deployment Helper"
echo "======================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Check if we're in a git repository
if [ -d ".git" ]; then
    echo ""
    echo "🔍 Git repository detected"
    
    # Check for uncommitted changes
    if [ -n "$(git status --porcelain)" ]; then
        echo "📝 You have uncommitted changes. Consider committing them first."
        read -p "Do you want to continue anyway? (y/n): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            echo "👋 Deployment cancelled."
            exit 1
        fi
    fi
fi

# Start the application
echo ""
echo "🚀 Starting the application..."
echo "The game will be available at: http://localhost:3000"
echo "Press Ctrl+C to stop the server"
echo ""

npm start
