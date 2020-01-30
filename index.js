let board = [...new Array(2500)].map(() => Math.round(Math.random() * 1));
let boardSize = Math.sqrt(board.length);

function getBoard() {
  return updateState();
}

// export function foo(testBoard) {
//   board = testBoard;
//   boardSize = Math.sqrt(board.length);
//   return updateState();
// }

function updateState() {
  let newBoard = board.map((cell, idx) => {
    let liveNeighbours = Object.keys(positionToState).reduce((acc, pos) => acc + getNeighbourState(idx, pos), 0);
    return ((cell === 1 && (liveNeighbours === 2 || liveNeighbours === 3)) || (cell === 0 && liveNeighbours === 3)) ? 1 : 0;
  });
  board = newBoard;
  return board;
}

const positionToState = {
  "NW" : (row, col, board, boardSize) => row > 0 && col > 0 ? board[((row - 1) * boardSize) + (col - 1)] : 0,
  "N" : (row, col, board, boardSize) => row > 0 ? board[((row - 1) * boardSize) + col] : 0,
  "NE" : (row, col, board, boardSize) => row > 0 && col < boardSize ? board[((row - 1) * boardSize) + (col + 1)] : 0,
  "E" : (row, col, board, boardSize) => col < boardSize - 1 ? board[(row * boardSize) + (col + 1)] : 0,
  "SE" : (row, col, board, boardSize) => col < boardSize - 1 && row < boardSize - 1 ? board[((row + 1) * boardSize) + (col + 1)] : 0,
  "S" : (row, col, board, boardSize) => row < boardSize - 1 ? board[((row + 1) * boardSize) + col] : 0,
  "SW" : (row, col, board, boardSize) => col > 0 && row < boardSize - 1 ? board[((row + 1) * boardSize) + (col - 1)] : 0,
  "W" : (row, col, board, boardSize) => col > 0 ? board[(row * boardSize) + (col - 1)] : 0,
};

function getNeighbourState(index, position) {
  let col = index % boardSize;
  let row = Math.floor(index / boardSize);
  return positionToState[position](row, col, board, boardSize);
}

updateState();


