// Debug utilities for Guess Who game
class GameDebugger {
    static logGameState(game) {
        console.log('=== GAME STATE DEBUG ===');
        console.log('Current Screen:', game.currentScreen);
        console.log('Game State:', {
            selectedBoard: game.gameState.selectedBoard,
            secretCharacter: game.gameState.secretCharacter,
            gameStarted: game.gameState.gameStarted,
            currentPlayer: game.gameState.currentPlayer,
            playerTurn: game.gameState.playerTurn,
            flippedCharacters: Array.from(game.gameState.flippedCharacters)
        });
        console.log('========================');
    }
    
    static testSecretCharacterAssignment() {
        console.log('=== SECRET CHARACTER TEST ===');
        const boards = window.getAllBoards();
        const testBoard = boards[0];
        console.log('Test Board:', testBoard.name);
        console.log('Characters:', testBoard.characters.map(c => c.name));
        
        // Simulate secret character assignment
        const randomIndex = Math.floor(Math.random() * testBoard.characters.length);
        
        console.log('Random Character:', testBoard.characters[randomIndex].name);
        console.log('=============================');
    }
    
    static listAllBoards() {
        console.log('=== ALL BOARDS ===');
        const boards = window.getAllBoards();
        boards.forEach(board => {
            console.log(`${board.name}: ${board.characters.length} characters`);
        });
        console.log('==================');
    }
}

// Make debugger available globally
window.GameDebugger = GameDebugger;

// Add debug commands to console
console.log('Debug commands available:');
console.log('- GameDebugger.logGameState(game)');
console.log('- GameDebugger.testSecretCharacterAssignment()');
console.log('- GameDebugger.listAllBoards()');
