var modifiedKnight = function(n, startRow, startCol, endRow, endCol) {
  var queue = [[startRow, startCol]];
  var count = 0;
  var tracker = {};
  tracker[[startRow, startCol]] = 1;

  var xDir = [-2, -2, -1, -1, 1, 1, 2, 2];
  var yDir = [1, -1, 2, -2, 2, -2, 1, -1];

  while (queue.length !== 0) {
    var queueLength = queue.length;

    for (var i = 0; i < queueLength; i++) {
      var current= queue.shift();
      for (var j = 0; j < xDir.length; j++) {
        var newX = current[0] + xDir[j];
        var newY = current[1] + yDir[j];
        if (current[0] === endRow && current[1] === endCol) {
          return count;
        }
        var newCoord = [newX, newY];

        if (tracker[newCoord] === undefined && newX < n && newY < n) {
          queue.push(newCoord);
          tracker[newCoord] = 1;
        }
      }
    }
    count++;
  }
  return -1;
}

console.log(modifiedKnight(150, 0, 0, 149, 149));
//onsole.log(modifiedKnight(9, 4, 4, 4, 8));
