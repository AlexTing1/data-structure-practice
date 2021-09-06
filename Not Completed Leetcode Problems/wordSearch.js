var exist = function(board, word) {
  var history = {};
  var helper = function(board, xCoord, yCoord, currentWord) {
    if (currentWord === word) {
      return true;
    }

    if (xCoord < 0 || xCoord >= board[0].length) {
      return false;
    }

    if (yCoord < 0 || yCoord >= board.length) {
      return false;
    }

    board[yCoord][xCoord] = '-';

    if (board[yCoord][xCoord] === letterToFind) {
      currentWord = currentWord.slice(1);
    } else {
      return false;
    }


    var up = helper(board, xCoord, yCoord - 1, currentWord);
    var down = helper(board, xCoord, yCoord + 1, currentWord);
    var right = helper(board, xCoord + 1, yCoord, currentWord);
    var left = helper(board, xCoord - 1, yCoord, currentWord);

    return up || down || right || left;
  }

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      var current = board[i][j];
      if (current === word[0]) {
        //execute helper function
        var testCase = helper(board, j, i, words);
        if (testCase) {
          return true;
        }
      }
    }
  }
  return false;
};