document.addEventListener('DOMContentLoaded', function () {
    createChessBoard(10, 10);
    addRedSpot(1);
});

let currentPosition = 1;

function createChessBoard(rows, columns) {
    const boardContainer = document.querySelector('.chess-board');
    let count = 1;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.classList.add((i + j) % 2 === 0 ? 'black' : 'white');
            if((i+j)%2===0){
                square.textContent = count++;
            }
            square.textContent = count++;

            boardContainer.appendChild(square);
        }
    }
}

function addRedSpot(position) {
    const squares = document.querySelectorAll('.square');
    const square = squares[position - 1];
    const redSpot = document.createElement('div');
    redSpot.classList.add('red-spot');
    square.appendChild(redSpot);
    if(position===100){
        alert("YOU WON");
        resetBoard();
    }
}

function rollDice() {
    const diceResult = Math.floor(Math.random() * 6) + 1;
    alert(`Dice rolled: ${diceResult}`);
    
    // Update the current position
    currentPosition += diceResult;

    // Ensure the position is within the board
    if(currentPosition>100){
        currentPosition=currentPosition-diceResult;
    }

    // Update the red spot
    updateRedSpot();
}

function resetBoard() {
    currentPosition = 1;
    updateRedSpot();
}

function updateRedSpot() {
    const squares = document.querySelectorAll('.square');
    const currentSquare = squares[currentPosition - 1];
    const redSpot = currentSquare.querySelector('.red-spot');

    // Remove the red spot from its current position
    document.querySelectorAll('.red-spot').forEach((spot) => {
        spot.remove();
    });

    // Add the red spot to the new position
    addRedSpot(currentPosition);
}