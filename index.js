const boardSize = 4;
const board = [
  1, 2, 3, 4, 
  5, 6, 7, 8, 
  9, 10, 11, 12, 
  13, 14, 15, 16];

function tick() {
  updateState();
}

function updateState() {
  let numberOfRows = board.length / boardSize;
  let numberOfCols = numberOfRows;

  board.forEach((cell, idx) => {
    console.log(cell, getNeighbour(idx, "SW"))
  });
}

function getNeighbour(index, position) {
  let col = index % boardSize;
  let row = Math.floor(index / boardSize);

  switch (position) {
    case "NW":
      return row > 0 && col > 0 ? board[((row - 1) * boardSize) + (col - 1)] : -1;
    case "N":
      return row > 0 ? board[((row - 1) * boardSize) + col] : -1;
    case "NE":
      return row > 0 && col < boardSize ? board[((row - 1) * boardSize) + (col + 1)] : -1;
    case "E":
      return col < boardSize - 1 ? board[(row * boardSize) + (col + 1)] : -1;
    case "SE":
      return col < boardSize - 1 && row < boardSize - 1 ? board[((row + 1) * boardSize) + (col + 1)] : -1;
    case "S":
      return row < boardSize - 1 ? board[((row + 1) * boardSize) + col] : -1;
    case "SW":
      return col > 0 && row < boardSize - 1 ? board[((row + 1) * boardSize) + (col - 1)] : -1;
    case "W":
      return col > 0 ? board[(row * boardSize) + (col - 1)] : -1;
  }
}

updateState();


/*


0, 1, 2, 3 => 0
4, 5, 6, 7 => 1
8, 9, 10, 11 => 2




*/