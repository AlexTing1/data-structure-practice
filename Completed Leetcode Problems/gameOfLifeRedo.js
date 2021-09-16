var gameOfLife = function(board) {
  var boardCopy = [];

  for (var i = 0; i < board.length; i++) {
    var copy = board[i].slice();
    boardCopy.push(copy);
  }

  for (var i = 0; i < boardCopy.length; i++) {
    for (var j = 0; j < boardCopy[i].length; j++) {
      var currentNum = boardCopy[i][j];
      var neightborCount = getNeighborCount(i, j, boardCopy);
      if (currentNum === 0) {
        //  do rules for 0
        if (neightborCount === 3) {
          board[i][j] = 1;
        } else {
          board[i][j] = 0;
        }
      } else {
        //  do rules for 1
        if (neightborCount < 2) {
          board[i][j] = 0;
        } else if (neightborCount === 2 || neightborCount === 3) {
          board[i][j] = 1;
        } else {
          board[i][j] = 0;
        }
      }
    }
  }
  return board;
};

var getNeighborCount = function(i, j, board) {
  var count = 0;
  if (i - 1 >= 0 && board[i - 1][j] === 1) {
    count++;
  }

  if (i - 1 >= 0 && j + 1 < board[i].length && board[i - 1][j + 1] === 1) {
    count++;
  }

  if (j + 1 < board[i].length && board[i][j + 1] === 1) {
    count++;
  }

  if (i + 1 < board.length && j + 1 < board[i].length && board[i + 1][j + 1] === 1) {
    count++;
  }

  if (i + 1 < board.length && board[i + 1][j] === 1) {
    count++;
  }

  if (i + 1 < board.length && j - 1 >= 0 && board[i + 1][j - 1] === 1) {
    count++;
  }

  if (j - 1 >= 0 && board[i][j - 1] === 1) {
    count++;
  }

  if (j - 1 >= 0 && i - 1 >= 0 && board[i - 1][j - 1] === 1) {
    count++;
  }

  return count;
}