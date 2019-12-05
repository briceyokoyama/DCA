// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// You are given an M by N matrix consisting of booleans that represents a board. Each True boolean represents a wall. Each False boolean represents a tile you can walk on.

// Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required to reach the end coordinate from the start. If there is no possible path, then return null. You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.

// For example, given the following board:

// [[f, f, f, f],
// [t, t, f, t],
// [f, f, f, f],
// [f, f, f, f]]
// and start = (3, 0) (bottom left) and end = (0, 0) (top left), the minimum number of steps required to reach the end is 7, since we would need to go through (1, 2) because there is a wall everywhere else on the second row.

function prob23(board, start, end) {
  const results = [...Array(board.length)].map(row => Array(board[0].length).fill(null))
  results[start[0]][start[1]] = 0;
  const queue = [start];

  while(queue.length > 0) {
    let curr = queue.shift();

    if (curr[0] === end[0] && curr[1] === end[1]) {
      return results[end[0]][end[1]];
    }

    updateBoard(curr);
  }

  return null;

  function updateBoard(pos) {
    possibleMoves = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0]
    ]

    possibleMoves.forEach(move => {
      let newPos = [pos[0] + move[0], pos[1] + move[1]];

      if (isValid(newPos)) {
        if(results[newPos[0]][newPos[1]] !== null) return;
        results[newPos[0]][newPos[1]] = results[pos[0]][pos[1]] + 1;
        queue.push(newPos);
      }
    })

  }

  function isValid(pos) {
    if (pos[0] >= 0 && pos[0] < board.length && pos[1] >= 0 && pos[1] < board[0].length && board[pos[0]][pos[1]] === 'f') return true;
    return false;
  }

}

const board = [
  ['f', 'f', 'f', 'f'],
  ['f', 't', 'f', 't'],
  ['f', 'f', 'f', 'f'],
  ['f', 'f', 'f', 'f']
];

const start = [3, 0];
const end = [0, 3];

console.log(prob23(board, start, end))