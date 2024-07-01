let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const messageDisplay = document.getElementById('message');

function handleCellClick(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerText = currentPlayer;
    if (checkWin()) {
        messageDisplay.innerText = `${currentPlayer} has won!`;
        gameActive = false;
        return;
    }
    if (!gameState.includes('')) {
        messageDisplay.innerText = 'It\'s a draw!';
        gameActive = false;
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    messageDisplay.innerText = `${currentPlayer}'s turn`;
}

function makeMove(index) {
    if (gameActive && gameState[index] === '') {
        const clickedCell = document.getElementsByClassName('cell')[index];
        handleCellClick(clickedCell, index);
    }
}

function checkWin() {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return gameState[index] === currentPlayer;
        });
    });
}

function resetGame() {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    messageDisplay.innerText = `${currentPlayer}'s turn`;
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}
