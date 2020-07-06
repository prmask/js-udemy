const startGameBtn =  document.getElementById('start-game-btn');

function startGames() {
    console.log('Game is starting...');
}

startGames();

startGameBtn.addEventListener('click', startGames);