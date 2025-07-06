# Guess Who Online - Deployment Guide

## Overview
This is a real-time multiplayer Guess Who game that works online using WebSockets. Players can create games, share codes, and play together in real-time.

## Local Development

### Prerequisites
- Node.js 16 or higher
- npm or yarn

### Setup
1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

## Production Deployment

### Option 1: Heroku (Recommended)
1. Create a Heroku app:
```bash
heroku create your-guess-who-game
```

2. Deploy:
```bash
git add .
git commit -m "Deploy multiplayer Guess Who game"
git push heroku main
```

3. The app will be available at `https://your-guess-who-game.herokuapp.com`

### Option 2: Railway
1. Connect your GitHub repository to Railway
2. Railway will automatically detect and deploy your Node.js app
3. No configuration needed - it will use the `package.json` start script

### Option 3: Render
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Use these build settings:
   - Build Command: `npm install`
   - Start Command: `npm start`

### Option 4: DigitalOcean App Platform
1. Create a new app on DigitalOcean
2. Connect your GitHub repository
3. The platform will auto-detect Node.js and configure deployment

### Option 5: VPS/Self-hosted
1. Copy files to your server
2. Install Node.js and npm
3. Run:
```bash
npm install
npm start
```
4. Configure reverse proxy (nginx/Apache) to serve on port 80/443
5. Set up SSL certificate (Let's Encrypt recommended)

## Environment Variables
The app works out of the box with no configuration needed. For production, you may want to set:

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Set to "production" for production mode

## Features
- Real-time multiplayer gameplay
- Automatic game code generation
- Connection status monitoring
- Player disconnection handling
- Mobile-responsive design
- No database required (uses in-memory storage)

## Customization
- Modify `js/boards.js` to add new character boards
- Update `styles/main.css` to customize the appearance
- Edit `server.js` to add new game features

## Troubleshooting
- If games don't connect, check that WebSocket connections are allowed
- For hosting platforms, ensure WebSocket support is enabled
- Games are automatically cleaned up after 1 hour of inactivity

## Security Notes
- Games are stored in memory only
- No persistent data storage
- Game codes are simple 3-digit numbers (sufficient for casual play)
- For production use, consider adding rate limiting and input validation
