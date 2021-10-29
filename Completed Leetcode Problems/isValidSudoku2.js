var isValidSudoku = function(board) {
  //check row
  for (var i = 0; i < board.length; i++) {
    var history = {};
    for (var j = 0; j < board[i].length; j++) {
      var currentValue = board[i][j];
      if (history[currentValue] === undefined || currentValue === '.') {
        history[currentValue] = 1;
      } else {
        return false;
      }
    }
  }
  //check column
  for (var i = 0; i < board[0].length; i++) {
    var history = {};
    for (var j = 0; j < board.length; j++) {
      var currentValue = board[j][i];
      if (history[currentValue] === undefined || currentValue === '.') {
        history[currentValue] = 1;
      } else {
        return false;
      }
    }
  }
  //check box
  let index = 1;

  var checkBox = function(xMin, xMax, yMin, yMax) {
    debugger;
    var history = {};
    for(var i = xMin; i < xMax; i++) {
      for (var j = yMin; j < yMax; j++) {
        var currentValue = board[j][i];
        if (history[currentValue] === undefined || currentValue === '.') {
          history[currentValue] = 1;
        } else {
          return false;
        }
      }
    }
    return true;
  }

  for (var i = 0; i < 9; i = i + 3) {
    for (var j = 0; j < 9; j = j + 3) {
      if (!checkBox(i, i + 3, j, j + 3)) {
        return false
      }
    }
  }
  return true;
};
var test = [
  [".",".",".",".","5",".",".","1","."],
  [".","4",".","3",".",".",".",".","."],
  [".",".",".",".",".","3",".",".","1"],
  ["8",".",".",".",".",".",".","2","."],
  [".",".","2",".","7",".",".",".","."],
  [".","1","5",".",".",".",".",".","."],
  [".",".",".",".",".","2",".",".","."],
  [".","2",".","9",".",".",".",".","."],
  [".",".","4",".",".",".",".",".","."]
]

console.log(isValidSudoku(test));
