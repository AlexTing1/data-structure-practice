var exist = function(board, word) {

  var helper = function(board, xCoord, yCoord, word) {
    if (word.length === 0) {
      return true;
    }

    if (xCoord < 0 || xCoord >= board[0].length || yCoord < 0 || yCoord >=board.length) {
      return false;
    }
    var firstLetter = word[0];
    var currentLetter = board[yCoord][xCoord];

    if (firstLetter !== currentLetter) {
      return false;
    }

    var char = board[yCoord][xCoord];

    board[yCoord][xCoord] = '-';
    word = word.slice(1);

    var up = helper(board, xCoord, yCoord - 1, word);
    var down = helper(board, xCoord, yCoord + 1, word);
    var right = helper(board, xCoord + 1, yCoord, word);
    var left = helper(board, xCoord - 1, yCoord, word);

    board[yCoord][xCoord] = char;
    return up || down || right || left;

  }

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      var currentBoardPiece = board[i][j];

      if (currentBoardPiece === word[0] && helper(board, j, i, word)) {
        return true;
      }
    }
  }
  return false;
};