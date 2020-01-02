// Good morning! Here's your coding interview problem for today.

// This problem was asked by Dropbox.

// Conway's Game of Life takes place on an infinite two-dimensional board of square cells. Each cell is either dead or alive, and at each tick, the following rules apply:

// Any live cell with less than two live neighbours dies.
// Any live cell with two or three live neighbours remains living.
// Any live cell with more than three live neighbours dies.
// Any dead cell with exactly three live neighbours becomes a live cell.
// A cell neighbours another cell if it is horizontally, vertically, or diagonally adjacent.

// Implement Conway's Game of Life. It should be able to be initialized with a starting list of live cell coordinates and the number of steps it should run for. Once initialized, it should print out the board state at each step. Since it's an infinite board, print out only the relevant coordinates, i.e. from the top-leftmost live cell to bottom-rightmost live cell.

// You can represent a live cell with an asterisk (*) and a dead cell with a dot (.).

function gameOfLife(board, steps) {

  for (let i = 0; i < steps; i++) {
    const nextBoard = [...Array(board.length)].map((row, idx) => Array(board[idx].length));
    
    for (let j = 0; j < board.length; j++) {
      for (let k = 0; k < board[j].length; k++) {
        let numNeighbors = getNumNeighbors(j, k);
        nextBoard[j][k] = determineLife(board[j][k], numNeighbors);
      }
    }

    board = nextBoard;
  }

  return board;

  function getNumNeighbors(x, y) {
    let liveNeighbors = 0;

    for (let dx = -1; dx < 2; dx++) {
      for (let dy = -1; dy < 2; dy++) {
        let newX = x + dx;
        let newY = y + dy;
        if (newX === x && newY === y) continue;
        if (newX < 0 || newY < 0 || newX >= board.length || newY >= board[x].length) continue;
        if (board[newX][newY] === '*') liveNeighbors++;
      }
    }

    return liveNeighbors;
  }

  function determineLife(status, neighbors) {
    if (status === '*' && neighbors === 2) return '*';
    if (neighbors === 3) return '*';
    return '.';
  }

}

const board = [
  ['.', '*', '.'],
  ['*', '*', '*'],
  ['.', '.', '.'],
]
console.log(gameOfLife(board, 1));
