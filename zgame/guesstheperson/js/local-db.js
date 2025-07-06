// Fallback Local Storage Game System
// This works without Firebase for local testing

class LocalGameDatabase {
    constructor() {
        this.storageKey = 'guessWhoGames';
        this.initializeStorage();
    }

    initializeStorage() {
        if (!localStorage.getItem(this.storageKey)) {
            localStorage.setItem(this.storageKey, JSON.stringify({}));
        }
    }

    async createGame(gameCode, boardId, hostId) {
        try {
            const games = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
            
            games[gameCode] = {
                gameCode: gameCode,
                boardId: boardId,
                hostId: hostId,
                playerJoined: false,
                gameStarted: false,
                createdAt: Date.now(),
                players: {
                    host: {
                        id: hostId,
                        connected: true,
                        flippedCards: []
                    }
                }
            };

            localStorage.setItem(this.storageKey, JSON.stringify(games));
            return true;
        } catch (error) {
            console.error('Error creating game:', error);
            return false;
        }
    }

    async joinGame(gameCode, playerId) {
        try {
            const games = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
            const gameData = games[gameCode];

            if (!gameData) {
                return { success: false, error: 'Game not found' };
            }

            if (gameData.playerJoined) {
                return { success: false, error: 'Game is full' };
            }

            // Add player to game
            gameData.players.player = {
                id: playerId,
                connected: true,
                flippedCards: []
            };
            gameData.playerJoined = true;

            games[gameCode] = gameData;
            localStorage.setItem(this.storageKey, JSON.stringify(games));

            return { success: true, gameData: gameData };
        } catch (error) {
            console.error('Error joining game:', error);
            return { success: false, error: 'Failed to join game' };
        }
    }

    onGameChange(gameCode, callback) {
        // Simulate real-time updates by polling
        const checkInterval = setInterval(() => {
            const games = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
            const gameData = games[gameCode];
            
            if (gameData) {
                callback({ val: () => gameData });
            }
        }, 1000);

        return checkInterval;
    }

    offGameChange(gameCode, listener) {
        if (listener) {
            clearInterval(listener);
        }
    }

    async updatePlayerCards(gameCode, playerId, flippedCards) {
        try {
            const games = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
            const gameData = games[gameCode];
            
            if (gameData) {
                const playerType = playerId.includes('host') ? 'host' : 'player';
                if (gameData.players[playerType]) {
                    gameData.players[playerType].flippedCards = flippedCards;
                    games[gameCode] = gameData;
                    localStorage.setItem(this.storageKey, JSON.stringify(games));
                }
            }
        } catch (error) {
            console.error('Error updating player cards:', error);
        }
    }

    async startGame(gameCode) {
        try {
            const games = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
            const gameData = games[gameCode];
            
            if (gameData) {
                gameData.gameStarted = true;
                games[gameCode] = gameData;
                localStorage.setItem(this.storageKey, JSON.stringify(games));
            }
        } catch (error) {
            console.error('Error starting game:', error);
        }
    }

    async deleteGame(gameCode) {
        try {
            const games = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
            delete games[gameCode];
            localStorage.setItem(this.storageKey, JSON.stringify(games));
        } catch (error) {
            console.error('Error deleting game:', error);
        }
    }

    async cleanupOldGames() {
        try {
            const games = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
            const twoHoursAgo = Date.now() - (2 * 60 * 60 * 1000);
            
            Object.keys(games).forEach(gameCode => {
                const game = games[gameCode];
                if (game.createdAt < twoHoursAgo) {
                    delete games[gameCode];
                }
            });
            
            localStorage.setItem(this.storageKey, JSON.stringify(games));
        } catch (error) {
            console.error('Error cleaning up old games:', error);
        }
    }

    async markPlayerDisconnected(gameCode, playerId) {
        try {
            const games = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
            const gameData = games[gameCode];
            
            if (gameData) {
                // Mark the appropriate player as disconnected
                if (playerId === gameData.hostId) {
                    gameData.hostDisconnected = true;
                } else {
                    gameData.playerDisconnected = true;
                }
                
                games[gameCode] = gameData;
                localStorage.setItem(this.storageKey, JSON.stringify(games));
            }
        } catch (error) {
            console.error('Error marking player disconnected:', error);
        }
    }

    async setSecretCharacters(gameCode, hostCharacterIndex, playerCharacterIndex) {
        try {
            const games = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
            const gameData = games[gameCode];
            
            if (gameData) {
                gameData.secretCharacters = {
                    host: hostCharacterIndex,
                    player: playerCharacterIndex
                };
                
                games[gameCode] = gameData;
                localStorage.setItem(this.storageKey, JSON.stringify(games));
            }
        } catch (error) {
            console.error('Error setting secret characters:', error);
        }
    }

    async getPlayerSecretCharacter(gameCode) {
        try {
            const games = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
            const gameData = games[gameCode];
            
            if (gameData && gameData.secretCharacters) {
                return gameData.secretCharacters.player;
            }
            return null;
        } catch (error) {
            console.error('Error getting player secret character:', error);
            return null;
        }
    }
}

// Initialize the appropriate database
window.gameDB = new LocalGameDatabase();

// Clean up old games on load
gameDB.cleanupOldGames();

console.log('Local Game Database initialized');
