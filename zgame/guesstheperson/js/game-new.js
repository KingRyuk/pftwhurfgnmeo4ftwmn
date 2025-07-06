// Game Logic and State Management with Firebase
class GuessWhoGame {
    constructor() {
        this.currentScreen = 'main-menu';
        this.gameState = {
            isHost: false,
            gameCode: null,
            selectedBoard: null,
            characters: [],
            flippedCharacters: new Set(),
            playerName: '',
            opponentConnected: false,
            gameStarted: false,
            playerId: 'player_' + Math.random().toString(36).substr(2, 9)
        };
        this.gameListener = null;
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Main menu buttons
        document.getElementById('play-btn').addEventListener('click', () => {
            this.showScreen('host-join-menu');
        });

        document.getElementById('support-btn').addEventListener('click', () => {
            window.open('https://ko-fi.com', '_blank');
        });

        // Host/Join menu buttons
        document.getElementById('host-game-btn').addEventListener('click', () => {
            this.gameState.isHost = true;
            this.showBoardSelection();
        });

        document.getElementById('join-game-btn').addEventListener('click', () => {
            this.gameState.isHost = false;
            this.showScreen('join-game');
        });

        document.getElementById('back-to-main-btn').addEventListener('click', () => {
            this.showScreen('main-menu');
        });

        // Board selection
        document.getElementById('back-to-host-join-btn').addEventListener('click', () => {
            this.showScreen('host-join-menu');
        });

        // Join game
        document.getElementById('join-submit-btn').addEventListener('click', () => {
            this.joinGame();
        });

        document.getElementById('back-to-host-join-btn2').addEventListener('click', () => {
            this.showScreen('host-join-menu');
        });

        // Game code display
        document.getElementById('start-game-btn').addEventListener('click', () => {
            this.startGame();
        });

        // Game controls
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
            window.location.href = 'https://wolflight.uk/Games/Index?category=All%20Games';
        });

        // Allow Enter key to submit game code
        document.getElementById('game-code').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.joinGame();
            }
        });

        // Only allow numeric input for game code
        document.getElementById('game-code').addEventListener('input', (e) => {
            // Remove any non-numeric characters
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
            
            // Limit to 3 digits
            if (e.target.value.length > 3) {
                e.target.value = e.target.value.slice(0, 3);
            }
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
        this.populateBoardSelection();
    }

    populateBoardSelection() {
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
                    <p>${board.characters.length} characters</p>
                </div>
            `;
            boardCard.addEventListener('click', () => {
                this.selectBoard(board.id);
            });
            boardsList.appendChild(boardCard);
        });
    }

    async selectBoard(boardId) {
        this.gameState.selectedBoard = boardId;
        this.gameState.characters = [...getBoard(boardId).characters];
        this.generateGameCode();
        
        // Create game in Firebase
        const success = await gameDB.createGame(
            this.gameState.gameCode, 
            boardId, 
            this.gameState.playerId
        );
        
        if (success) {
            this.showGameCode();
            this.startListeningForPlayers();
        } else {
            this.showCustomNotification('Failed to create game. Please try again.', 'error');
        }
    }

    generateGameCode() {
        // Generate a 3-digit numeric game code
        this.gameState.gameCode = Math.floor(100 + Math.random() * 900).toString();
    }

    showGameCode() {
        document.getElementById('generated-code').textContent = this.gameState.gameCode;
        this.showScreen('game-code-display');
        
        // Initially disable the start button until a player joins
        const startBtn = document.getElementById('start-game-btn');
        const statusText = document.getElementById('waiting-status');
        
        startBtn.disabled = true;
        startBtn.textContent = 'Waiting for Player...';
        statusText.textContent = 'Waiting for player to join...';
        statusText.style.color = '#718096';
    }

    startListeningForPlayers() {
        // Listen for changes to the game
        this.gameListener = gameDB.onGameChange(this.gameState.gameCode, (snapshot) => {
            const gameData = snapshot.val();
            
            if (gameData && gameData.playerJoined && !this.gameState.opponentConnected) {
                // Player has joined!
                this.gameState.opponentConnected = true;
                this.showCustomNotification('Player joined! Ready to start the game.', 'success');
                
                // Enable start game button and update status
                const startBtn = document.getElementById('start-game-btn');
                const statusText = document.getElementById('waiting-status');
                
                startBtn.disabled = false;
                startBtn.textContent = 'Start Game';
                statusText.textContent = 'Player joined! Ready to start.';
                statusText.style.color = '#2f855a';
            }
        });
    }

    stopListeningForPlayers() {
        if (this.gameListener && this.gameState.gameCode) {
            gameDB.offGameChange(this.gameState.gameCode, this.gameListener);
            this.gameListener = null;
        }
    }

    async joinGame() {
        const codeInput = document.getElementById('game-code');
        const code = codeInput.value.trim();
        
        if (code.length !== 3 || !/^\d{3}$/.test(code)) {
            this.showCustomNotification('Please enter a 3-digit numeric code', 'error');
            return;
        }

        // Try to join the game
        const result = await gameDB.joinGame(code, this.gameState.playerId);
        
        if (result.success) {
            this.gameState.gameCode = code;
            this.gameState.selectedBoard = result.gameData.boardId;
            this.gameState.characters = [...getBoard(result.gameData.boardId).characters];
            this.gameState.opponentConnected = true;
            
            const board = getBoard(result.gameData.boardId);
            this.showCustomNotification(`Joined game! Playing with ${board.name}`, 'success');
            
            // Start listening for game updates
            this.startListeningForGameUpdates();
            this.startGame();
        } else {
            this.showCustomNotification(result.error, 'error');
        }
    }

    startListeningForGameUpdates() {
        // Listen for game state changes
        this.gameListener = gameDB.onGameChange(this.gameState.gameCode, (snapshot) => {
            const gameData = snapshot.val();
            
            if (gameData && gameData.gameStarted && !this.gameState.gameStarted) {
                // Game has started
                this.gameState.gameStarted = true;
                this.setupGameBoard();
                this.showScreen('game-screen');
                this.updateGameStatus();
            }
        });
    }

    async startGame() {
        if (this.gameState.isHost) {
            await gameDB.startGame(this.gameState.gameCode);
        }
        
        this.gameState.gameStarted = true;
        this.setupGameBoard();
        this.showScreen('game-screen');
        this.updateGameStatus();
    }

    setupGameBoard() {
        const characterGrid = document.getElementById('character-grid');
        characterGrid.innerHTML = '';

        this.gameState.characters.forEach((character, index) => {
            const characterCard = document.createElement('div');
            characterCard.className = 'character-card';
            characterCard.dataset.index = index;
            characterCard.innerHTML = `
                <div class="character-image">${character.image}</div>
                <div class="character-name">${character.name}</div>
            `;
            
            characterCard.addEventListener('click', () => {
                this.toggleCharacter(index);
            });

            characterGrid.appendChild(characterCard);
        });
    }

    async toggleCharacter(index) {
        const characterCard = document.querySelector(`[data-index="${index}"]`);
        
        if (this.gameState.flippedCharacters.has(index)) {
            // Flip back up
            this.gameState.flippedCharacters.delete(index);
            characterCard.classList.remove('flipped');
        } else {
            // Flip down
            this.gameState.flippedCharacters.add(index);
            characterCard.classList.add('flipped');
        }

        // Update Firebase with flipped cards
        const flippedArray = Array.from(this.gameState.flippedCharacters);
        await gameDB.updatePlayerCards(this.gameState.gameCode, this.gameState.playerId, flippedArray);
    }

    updateGameStatus() {
        const playerNameEl = document.getElementById('player-name');
        const gameStatusEl = document.getElementById('game-status');
        
        if (this.gameState.isHost) {
            playerNameEl.textContent = 'Host';
            gameStatusEl.textContent = this.gameState.opponentConnected ? 
                'Game in progress' : 'Waiting for opponent...';
        } else {
            playerNameEl.textContent = 'Player';
            gameStatusEl.textContent = 'Game in progress';
        }
    }

    showPauseMenu() {
        document.getElementById('pause-menu').classList.add('active');
    }

    hidePauseMenu() {
        document.getElementById('pause-menu').classList.remove('active');
    }

    async quitToMainMenu() {
        this.hidePauseMenu();
        
        // Clean up Firebase listeners
        this.stopListeningForPlayers();
        
        // Delete game if host
        if (this.gameState.isHost && this.gameState.gameCode) {
            await gameDB.deleteGame(this.gameState.gameCode);
        }
        
        this.resetGame();
        this.showScreen('main-menu');
    }

    resetGame() {
        // Stop listening for players
        this.stopListeningForPlayers();
        
        this.gameState = {
            isHost: false,
            gameCode: null,
            selectedBoard: null,
            characters: [],
            flippedCharacters: new Set(),
            playerName: '',
            opponentConnected: false,
            gameStarted: false,
            playerId: 'player_' + Math.random().toString(36).substr(2, 9)
        };
        
        // Clear input fields
        document.getElementById('game-code').value = '';
        
        // Reset start button
        const startBtn = document.getElementById('start-game-btn');
        startBtn.disabled = false;
        startBtn.textContent = 'Start Game';
    }

    showCustomNotification(message, type = 'info') {
        // Create custom notification that works in fullscreen
        const notification = document.createElement('div');
        notification.className = `custom-notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'error' ? '#fed7d7' : type === 'success' ? '#c6f6d5' : '#bee3f8'};
            color: ${type === 'error' ? '#c53030' : type === 'success' ? '#2f855a' : '#2b6cb0'};
            padding: 1rem 2rem;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 10000;
            font-weight: bold;
            max-width: 300px;
            word-wrap: break-word;
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Remove after 4 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }
}

// Initialize the game when DOM is loaded
let game;
document.addEventListener('DOMContentLoaded', () => {
    game = new GuessWhoGame();
});
