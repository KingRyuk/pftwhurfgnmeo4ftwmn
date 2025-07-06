// Main application initialization and utility functions
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    console.log('Guess Who Game Loaded!');
    
    // Add some nice loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // ESC key to show/hide pause menu
        if (e.key === 'Escape' && game && game.currentScreen === 'game-screen') {
            const pauseMenu = document.getElementById('pause-menu');
            if (pauseMenu.classList.contains('active')) {
                game.hidePauseMenu();
            } else {
                game.showPauseMenu();
            }
        }
    });
    
    // Add some visual feedback for button clicks
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('menu-button') || 
            e.target.classList.contains('back-button') ||
            e.target.classList.contains('board-card')) {
            
            // Add click animation
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                e.target.style.transform = '';
            }, 150);
        }
    });
    
    // Handle window resize for responsive design
    window.addEventListener('resize', function() {
        // Adjust game board layout if needed
        if (game && game.currentScreen === 'game-screen') {
            // Could add responsive adjustments here
        }
    });
});

// Utility functions - Custom notifications instead of browser alerts
function showNotification(message, type = 'info') {
    // Use the game's custom notification system
    if (window.game) {
        game.showCustomNotification(message, type);
    } else {
        console.log(`${type.toUpperCase()}: ${message}`);
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-family: inherit;
        font-size: 14px;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        opacity: 0;
        transition: all 0.3s ease;
        max-width: 300px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }
    
    .notification.show {
        transform: translateX(0);
        opacity: 1;
    }
    
    .notification-info {
        background-color: #2196F3;
    }
    
    .notification-success {
        background-color: #4CAF50;
    }
    
    .notification-error {
        background-color: #f44336;
    }
    
    .notification-warning {
        background-color: #ff9800;
    }
`;
document.head.appendChild(style);
