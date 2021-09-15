var maxAreaOfIsland = function(grid) {
  //  scan matrix until finds one
  //    if island has not been seen before
  //      calculate island size
  //      if islandsize > maxIslandSize
  //        maxislandSize = islandSize
  //  return isalndSize
  var tracker = {};
  var maxSize = 0;

  var getIslandSize = function(x, y, currentSize) {
    tracker[[y, x]] = 1;
    currentSize = currentSize + 1;
    if (x + 1 < grid[i].length && grid[y][x + 1] === 1 && tracker[[y, x + 1]] === undefined) {
      currentSize = getIslandSize(x + 1, y, currentSize);
    }

    if (x - 1 >= 0 && grid[y][x - 1] === 1 && tracker[[y, x - 1]] === undefined) {
      currentSize = getIslandSize(x - 1, y, currentSize);
    }

    if (y + 1 < grid.length && grid[y + 1][x] === 1 && tracker[[y + 1, x]] === undefined) {
      currentSize = getIslandSize(x, y + 1, currentSize);
    }

    if (y - 1 >= 0 && grid[y - 1][x] === 1 && tracker[[y - 1, x]] === undefined) {
      currentSize = getIslandSize(x, y - 1, currentSize);
    }

    return currentSize;
  }

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      var current = grid[i][j];
      if (current === 1 && tracker[[i, j]] === undefined) {
        var islandSize = getIslandSize(j, i, 0);
        if (islandSize > maxSize) {
          maxSize = islandSize;
        }
      }
    }
  }

  return maxSize;
};

var grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
console.log(maxAreaOfIsland(grid));