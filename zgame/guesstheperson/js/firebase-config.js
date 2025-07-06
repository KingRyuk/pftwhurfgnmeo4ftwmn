// Firebase Configuration
// Replace this with your own Firebase config for production use

const firebaseConfig = {
  apiKey: "AIzaSyAGQ4YYkw6_gL5RWXlCPgzL5WNOBKwKtVs",
  authDomain: "guess-who-game-demo.firebaseapp.com",
  databaseURL: "https://guess-who-game-demo-default-rtdb.firebaseio.com",
  projectId: "guess-who-game-demo",
  storageBucket: "guess-who-game-demo.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456789012345678"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Game database functions
class GameDatabase {
    constructor() {
        this.gamesRef = database.ref('games');
        this.playersRef = database.ref('players');
    }

    // Create a new game
    async createGame(gameCode, boardId, hostId) {
        const gameData = {
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

        try {
            await this.gamesRef.child(gameCode).set(gameData);
            return true;
        } catch (error) {
            console.error('Error creating game:', error);
            return false;
        }
    }

    // Join an existing game
    async joinGame(gameCode, playerId) {
        try {
            const gameSnapshot = await this.gamesRef.child(gameCode).once('value');
            const gameData = gameSnapshot.val();

            if (!gameData) {
                return { success: false, error: 'Game not found' };
            }

            if (gameData.playerJoined) {
                return { success: false, error: 'Game is full' };
            }

            // Add player to game
            await this.gamesRef.child(gameCode).child('players').child('player').set({
                id: playerId,
                connected: true,
                flippedCards: []
            });

            await this.gamesRef.child(gameCode).child('playerJoined').set(true);

            return { success: true, gameData: gameData };
        } catch (error) {
            console.error('Error joining game:', error);
            return { success: false, error: 'Failed to join game' };
        }
    }

    // Listen for game changes
    onGameChange(gameCode, callback) {
        return this.gamesRef.child(gameCode).on('value', callback);
    }

    // Remove game listener
    offGameChange(gameCode, callback) {
        this.gamesRef.child(gameCode).off('value', callback);
    }

    // Update player's flipped cards
    async updatePlayerCards(gameCode, playerId, flippedCards) {
        const playerType = playerId.includes('host') ? 'host' : 'player';
        try {
            await this.gamesRef.child(gameCode).child('players').child(playerType).child('flippedCards').set(flippedCards);
        } catch (error) {
            console.error('Error updating player cards:', error);
        }
    }

    // Start the game
    async startGame(gameCode) {
        try {
            await this.gamesRef.child(gameCode).child('gameStarted').set(true);
        } catch (error) {
            console.error('Error starting game:', error);
        }
    }

    // Delete game
    async deleteGame(gameCode) {
        try {
            await this.gamesRef.child(gameCode).remove();
        } catch (error) {
            console.error('Error deleting game:', error);
        }
    }

    // Clean up old games (games older than 2 hours)
    async cleanupOldGames() {
        try {
            const snapshot = await this.gamesRef.once('value');
            const games = snapshot.val();
            
            if (games) {
                const twoHoursAgo = Date.now() - (2 * 60 * 60 * 1000);
                
                Object.keys(games).forEach(gameCode => {
                    const game = games[gameCode];
                    if (game.createdAt < twoHoursAgo) {
                        this.gamesRef.child(gameCode).remove();
                    }
                });
            }
        } catch (error) {
            console.error('Error cleaning up old games:', error);
        }
    }

    // Set secret characters for both players
    async setSecretCharacters(gameCode, hostCharacterIndex, playerCharacterIndex) {
        try {
            await this.gamesRef.child(gameCode).child('secretCharacters').set({
                host: hostCharacterIndex,
                player: playerCharacterIndex
            });
        } catch (error) {
            console.error('Error setting secret characters:', error);
        }
    }

    // Get player's secret character
    async getPlayerSecretCharacter(gameCode) {
        try {
            const snapshot = await this.gamesRef.child(gameCode).child('secretCharacters').child('player').once('value');
            return snapshot.val();
        } catch (error) {
            console.error('Error getting player secret character:', error);
            return null;
        }
    }

    // Mark player as disconnected
    async markPlayerDisconnected(gameCode, playerId) {
        try {
            const gameSnapshot = await this.gamesRef.child(gameCode).once('value');
            const gameData = gameSnapshot.val();
            
            if (gameData) {
                if (playerId === gameData.hostId) {
                    await this.gamesRef.child(gameCode).child('hostDisconnected').set(true);
                } else {
                    await this.gamesRef.child(gameCode).child('playerDisconnected').set(true);
                }
            }
        } catch (error) {
            console.error('Error marking player disconnected:', error);
        }
    }
}

// Initialize game database
window.gameDB = new GameDatabase();

// Clean up old games on load
gameDB.cleanupOldGames();
