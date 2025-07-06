// Simple Local Two-Player Game Logic
class GuessWhoGame {
    constructor() {
        this.currentScreen = 'main-menu';
        this.gameState = {
            selectedBoard: null,
            characters: [],
            flippedCharacters: new Set(),
            gameStarted: false,
            secretCharacter: null,
            currentPlayer: 1, // 1 or 2
            playerTurn: 1
        };
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Main menu buttons
        document.getElementById('play-btn').addEventListener('click', () => {
            this.showBoardSelection();
        });

        document.getElementById('support-btn').addEventListener('click', () => {
            window.open('https://ko-fi.com/wolflightuk', '_blank');
        });

        // Board selection
        document.getElementById('back-to-main-btn').addEventListener('click', () => {
            this.showScreen('main-menu');
        });

        // Pause button
        document.getElementById('pause-btn').addEventListener('click', () => {
            this.showPauseMenu();
        });

        // Pause menu
        document.getElementById('resume-btn').addEventListener('click', () => {
            this.hidePauseMenu();
        });

        document.getElementById('quit-to-main-btn').addEventListener('click', () => {
            this.quitToMainMenu();
        });

        document.getElementById('more-games-btn').addEventListener('click', () => {
            window.open('https://wolflight.uk/Games/Index', '_blank');
        });
    }

    showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show target screen
        document.getElementById(screenId).classList.add('active');
        this.currentScreen = screenId;
    }

    showBoardSelection() {
        this.showScreen('board-selection');
        this.populateBoards();
    }

    populateBoards() {
        const boardsList = document.getElementById('boards-list');
        boardsList.innerHTML = '';
        
        const boards = getAllBoards();
        boards.forEach(board => {
            const boardCard = document.createElement('div');
            boardCard.className = 'board-card';
            boardCard.innerHTML = `
                <div class="board-thumbnail">${board.thumbnail.includes('assets/') ? `<img src="${board.thumbnail}" alt="${board.name}">` : board.thumbnail}</div>
                <div class="board-info">
                    <h3>${board.name}</h3>
                    <p>${board.description}</p>
                    <span class="character-count">${board.characters.length} characters</span>
                </div>
            `;
            boardCard.addEventListener('click', () => {
                this.selectBoard(board.id);
            });
            boardsList.appendChild(boardCard);
        });
    }

    selectBoard(boardId) {
        this.gameState.selectedBoard = boardId;
        this.gameState.characters = [...getBoard(boardId).characters];
        this.startGame();
    }

    startGame() {
        this.gameState.gameStarted = true;
        this.gameState.flippedCharacters = new Set();
        
        // Automatically select a random secret character
        const randomIndex = Math.floor(Math.random() * this.gameState.characters.length);
        this.gameState.secretCharacter = this.gameState.characters[randomIndex];
        
        this.showScreen('game-screen');
        this.renderBoard();
    }

    renderBoard() {
        const characterGrid = document.getElementById('character-grid');
        characterGrid.innerHTML = '';
        
        this.gameState.characters.forEach((character, index) => {
            const characterCard = document.createElement('div');
            characterCard.className = 'character-card';
            characterCard.dataset.index = index;
            
            // Check if this character is flipped
            const isFlipped = this.gameState.flippedCharacters.has(index);
            if (isFlipped) {
                characterCard.classList.add('flipped');
            }
            
            // Check if this is the secret character
            const isSecretCharacter = this.gameState.secretCharacter && this.gameState.secretCharacter.name === character.name;
            if (isSecretCharacter) {
                characterCard.classList.add('secret-character-highlight');
            }
            
            // Create character content
            let characterImageHtml = '';
            if (character.image && character.image.startsWith('assets/')) {
                // It's an image file
                characterImageHtml = `<div class="character-image"><img src="${character.image}" alt="${character.name}"></div>`;
            } else {
                // It's an emoji or text
                characterImageHtml = `<div class="character-image"><div class="character-emoji">${character.image || '👤'}</div></div>`;
            }
            
            characterCard.innerHTML = `
                ${characterImageHtml}
                <div class="character-name">${character.name}</div>
                ${isSecretCharacter ? '<div class="secret-label">YOUR CHARACTER</div>' : ''}
            `;
            
            characterCard.addEventListener('click', () => {
                this.flipCharacter(index);
            });
            
            // Add hover functionality for descriptions
            let hoverTimeout;
            characterCard.addEventListener('mouseenter', (e) => {
                hoverTimeout = setTimeout(() => {
                    this.showTooltip(e.target, character.description);
                }, 500); // 0.5 second delay
            });
            
            characterCard.addEventListener('mouseleave', () => {
                clearTimeout(hoverTimeout);
                this.hideTooltip();
            });
            
            characterGrid.appendChild(characterCard);
        });
    }

    flipCharacter(index) {
        if (this.gameState.flippedCharacters.has(index)) {
            // Unflip the character
            this.gameState.flippedCharacters.delete(index);
        } else {
            // Flip the character
            this.gameState.flippedCharacters.add(index);
        }
        
        // Re-render the board
        this.renderBoard();
    }

    showPauseMenu() {
        document.getElementById('pause-menu').classList.add('active');
    }

    hidePauseMenu() {
        document.getElementById('pause-menu').classList.remove('active');
    }

    quitToMainMenu() {
        this.gameState = {
            selectedBoard: null,
            characters: [],
            flippedCharacters: new Set(),
            gameStarted: false,
            secretCharacter: null,
            currentPlayer: 1,
            playerTurn: 1
        };
        this.hidePauseMenu();
        this.showScreen('main-menu');
    }

    showCustomNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Hide and remove notification
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    showTooltip(element, text) {
        // Remove any existing tooltip
        this.hideTooltip();
        
        // Create tooltip element
        const tooltip = document.createElement('div');
        tooltip.className = 'character-tooltip show';
        tooltip.textContent = text;
        tooltip.id = 'global-tooltip';
        
        // Add to document body (top level)
        document.body.appendChild(tooltip);
        
        // Position tooltip relative to the character card
        const rect = element.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        
        // Calculate position (center horizontally, above the card)
        const left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
        const top = rect.top - tooltipRect.height - 15; // 15px gap
        
        // Keep tooltip on screen
        const finalLeft = Math.max(10, Math.min(left, window.innerWidth - tooltipRect.width - 10));
        const finalTop = Math.max(10, top);
        
        tooltip.style.left = finalLeft + 'px';
        tooltip.style.top = finalTop + 'px';
    }
    
    hideTooltip() {
        const existingTooltip = document.getElementById('global-tooltip');
        if (existingTooltip) {
            existingTooltip.remove();
        }
    }
}

// Initialize the game when the page loads
let game;
document.addEventListener('DOMContentLoaded', () => {
    game = new GuessWhoGame();
});
