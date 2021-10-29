var spiralOrder = function(matrix) {
  var result = [];
  var tracker = {};

  var iterateMatrix = function(xCoord, yCoord, direction) {
    if (tracker[[xCoord, yCoord]] !== undefined) {
      return;
    }

    if (yCoord >= matrix.length || xCoord >=matrix[0].length || yCoord < 0 || xCoord < 0) {
      return;
    }

    result.push(matrix[yCoord][xCoord]);
    tracker[[xCoord, yCoord]] = 1;

    if (direction === 'right') {
      if (xCoord + 1 < matrix[0].length && tracker[[xCoord + 1, yCoord]] === undefined) {
        iterateMatrix(xCoord + 1, yCoord, 'right');
      } else {
        iterateMatrix(xCoord, yCoord + 1, 'down');
      }
    }

    if (direction === 'down') {
      if (yCoord + 1 < matrix.length && tracker[[xCoord, yCoord + 1]] === undefined) {
        iterateMatrix(xCoord, yCoord + 1, 'down');
      } else {
        iterateMatrix(xCoord - 1, yCoord, 'left');
      }
    }

    if (direction === 'left') {
      if (xCoord - 1 >= 0 && tracker[[xCoord - 1, yCoord]] === undefined) {
        iterateMatrix(xCoord - 1, yCoord, 'left');
      } else {
        iterateMatrix(xCoord, yCoord - 1, 'up');
      }
    }

    if (direction === 'up') {
      if (yCoord - 1 >= 0 && tracker[[xCoord, yCoord - 1]] === undefined) {
        iterateMatrix(xCoord, yCoord - 1, 'up');
      } else {
        iterateMatrix(xCoord + 1, yCoord, 'right');
      }
    }
  }

  iterateMatrix(0, 0, 'right');
  return result;
};





