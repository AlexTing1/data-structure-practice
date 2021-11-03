var isOnBishop = function(x, y, bishopRow, bishopCol) {
  return Math.abs(y - bishopCol) === Math.abs(bishopRow - x);
}

var minKnightMovesBishop = function(n, startRow, startCol, endRow, endCol, bishopRow, bishopCol) {
  var tracker = {};
  tracker[[startRow, startCol]] = 1;

  var bishopTracker = {};
  var count = 0;

  var xDir = [-2, -2, -1, -1, 1, 1, 2, 2];
  var yDir = [-1, 1, -2, 2, -2, 2, -1, 1];

  var queue = [[startRow, startCol, false]]; //isBishopDead
  if (bishopRow === startRow && bishopCol === startCol) {
    queue[0][2] = true;
  } else {
    tracker[[bishopRow, bishopCol]] = 1;
  }
  debugger;
  while (queue.length !== 0) {
    var queueLength = queue.length;

    for (var i = 0; i < queueLength; i++) {
      var currentPos = queue.shift();
      if (currentPos[0] === endRow && currentPos[1] === endCol) {
        return count;
      }

      for (var j = 0; j < xDir.length; j++) {
        var newX = currentPos[0] + xDir[j];
        var newY = currentPos[1] + yDir[j];
        var bishopIsDead = ((newX === bishopRow && newY === bishopCol) || currentPos[2]);
        var newCoord = [newX, newY, bishopIsDead];

        if (!bishopIsDead) {
          if (tracker[newCoord] === undefined && newX < n && newY < n && newX >= 0 && newY >= 0 && !isOnBishop(newX, newY, bishopRow, bishopCol)) {
            queue.push(newCoord);
            tracker[newCoord] = 1;
          }
        } else {
          if (bishopTracker[newCoord] === undefined && newX < n && newY < n && newX >= 0 && newY >= 0) {
            queue.push(newCoord);
            bishopTracker[newCoord] = 1;
          }
        }
      }
    }
    count++;
  }
  return -1;
}

console.log(minKnightMovesBishop(150, 120, 130, 149, 149, 140, 140));

