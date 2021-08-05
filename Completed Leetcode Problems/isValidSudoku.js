var isValidSudoku = function(board) {
  //check row
  debugger;
  for (var i = 0; i < board.length; i++) {
      var row = board[i];
      var currentRowArray = [];
      for (var j = 0; j < row.length; j++) {
          var current = row[j];

          if (current !== ".") {
              if (!currentRowArray.includes(current)) {
                  currentRowArray.push(current)
              } else {
                  return false;
              }
          }

      }
  }
  debugger;
  //check column
  for (var i = 0; i < board[0].length; i++) {
      var currentColArray = [];

      for (var j = 0; j < board.length; j++) {
          var current = board[j][i];
          if (current !== ".") {
              if (!currentColArray.includes(current)) {
                  currentColArray.push(current)
              } else {
                  return false;
              }
          }
      }
  }
  debugger;
  //check block
  for (var i = 3; i <= board.length; i +=3 ) {
      for (var j = 3; j <= board.length; j += 3) {
        debugger;
        if (!checkBlock([i - 3, i], [j - 3, j], board)) {
            return false;
        }
      }
  }

  return true;
};

var checkBlock = function(rowRange, colRange, board) {
  var rowStart = rowRange[0];
  var rowEnd = rowRange[1];
  var colStart = colRange[0];
  var colEnd = colRange[1];

  var trackerArray = [];
  for (var i = rowStart; i < rowEnd; i++) {
      for (var j = colStart; j < colEnd; j++) {
          var current = board[i][j];
          if (current !== ".") {
            if (!trackerArray.includes(current)) {
              trackerArray.push(current)
            } else {
              return false;
            }
          }

      }
  }
  return true;
}

var test =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

var test2 =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

var test3 =
[[".",".",".",".",".",".","5",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
["9","3",".",".","2",".","4",".","."],
[".",".","7",".",".",".","3",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".","3","4",".",".",".","."],
[".",".",".",".",".","3",".",".","."],
[".",".",".",".",".","5","2",".","."]];

console.log(isValidSudoku(test3));