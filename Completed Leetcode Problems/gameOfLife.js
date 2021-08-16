//  Input - take in double array
//  Output - new double array
//  Constraints - size of array 1 <= m,n <= 25
//  Edge cases- array of size 1x1, array of size 25x25
var gameOfLife = function(board) {
  //  init result = []
  //  iterate board
  //    get count of live for every position
  //    apply rules
  //    push curent row into result
  //  return result
  var copy = [];

  for (var i = 0; i < board.length; i++) {
    copy.push(board[i].slice())
  }

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      var current = board[i][j];
      var count = boardOneCount(copy, i, j, board.length, board[i].length);

      if (current === 0) {
        if (count === 3) {
          board[i][j] = 1;
        } else {
          board[i][j] = 0;
        }
      } else {
        if (count < 2) {
          board[i][j] = 0;
        } else if (count === 2 || count === 3) {
          board[i][j] = 1;
        } else {
          board[i][j] = 0;
        }
      }
    }
  }

  debugger;
  return board;
};

var boardOneCount = function(board, currentX, currentY, xMax, yMax) {
  var count = 0;
 // debugger;
  if (currentX - 1 >=0 && currentY - 1 >= 0 && board[currentX - 1][currentY - 1] === 1) {
    count++;
  }

  if (currentX - 1 >= 0 && board[currentX - 1][currentY] === 1) {
    count++;
  }

  if (currentX - 1 >= 0 && currentY + 1 < yMax && board[currentX - 1][currentY + 1] === 1) {
    count++;
  }

  if (currentY + 1 < yMax && board[currentX][currentY + 1] === 1) {
    count++;
  }

  if (currentX + 1 < xMax && currentY + 1 < yMax && board[currentX + 1][currentY + 1] === 1) {
    count++;
  }

  if (currentX + 1 < xMax && board[currentX + 1][currentY] === 1) {
    count++;
  }

  if (currentX + 1 < xMax && currentY - 1 >= 0 && board[currentX + 1][currentY - 1] === 1) {
    count++;
  }

  if (currentY - 1 >= 0 && board[currentX][currentY - 1]) {
    count++;
  }

  return count;
}

var board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
var board2 = [[0,0]];
console.log(gameOfLife(board));
