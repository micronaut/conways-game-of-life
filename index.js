const boardSize = 50;
// let board = [
//   1, 0, 0, 1, 1, 0, 0, 1, 0, 1,
//   1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 
//   1, 1, 1, 1, 1, 0, 0, 1, 0, 1,
//   1, 0, 0, 1, 1, 0, 0, 1, 0, 1,
//   1, 0, 0, 1, 1, 0, 0, 1, 0, 1,
//   1, 0, 0, 1, 1, 0, 0, 1, 0, 1,
//   1, 0, 0, 1, 1, 0, 0, 1, 0, 1,
//   1, 0, 0, 1, 1, 0, 0, 1, 0, 1,
//   1, 0, 0, 1, 1, 0, 0, 1, 0, 1,
//   1, 0, 0, 1, 1, 0, 0, 1, 0, 1,
// ];

let board = [...new Array(2500)].map(() => Math.round(Math.random() * 1));

const positions = ["NW", "N", "NE", "E", "SE", "S", "SW", "W"];

function getBoard() {
  return updateState();
}

// export function foo(testBoard) {
//   board = testBoard;
//   return updateState();
// }

function updateState() {
  let newBoard = [];
  board.forEach((cell, idx) => {
    let liveNeighbours = 0;
    positions.forEach(pos => liveNeighbours += getNeighbourState(idx, pos));

    if (cell === 1 && (liveNeighbours === 2 || liveNeighbours === 3)) {
      newBoard[idx] = 1;
    } else if (cell === 0 && liveNeighbours === 3) {
      newBoard[idx] = 1;
    } else {
      newBoard[idx] = 0;
    }
  });
  board = newBoard;
  return board;
}

function getNeighbourState(index, position) {
  let col = index % boardSize;
  let row = Math.floor(index / boardSize);
  let state = 0;

  switch (position) {
    case "NW":
      state = row > 0 && col > 0 ? board[((row - 1) * boardSize) + (col - 1)] : 0;
      break;
    case "N":
      state = row > 0 ? board[((row - 1) * boardSize) + col] : 0;
      break;
    case "NE":
      state = row > 0 && col < boardSize ? board[((row - 1) * boardSize) + (col + 1)] : 0;
      break;
    case "E":
      state = col < boardSize - 1 ? board[(row * boardSize) + (col + 1)] : 0;
      break;
    case "SE":
      state = col < boardSize - 1 && row < boardSize - 1 ? board[((row + 1) * boardSize) + (col + 1)] : 0;
      break;
    case "S":
      state = row < boardSize - 1 ? board[((row + 1) * boardSize) + col] : 0;
      break;
    case "SW":
      state = col > 0 && row < boardSize - 1 ? board[((row + 1) * boardSize) + (col - 1)] : 0;
      break;
    case "W":
      state = col > 0 ? board[(row * boardSize) + (col - 1)] : 0;
      break;
  }
  return state;
}

updateState();


