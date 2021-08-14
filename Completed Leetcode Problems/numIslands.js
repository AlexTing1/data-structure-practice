var numIslands = function(grid) {
  var trackerObj = {};
  var count = 0;
  var rowBarrier = grid[0].length;
  var colBarrier = grid.length;
  var helper = function(coordX, coordY) {
      if (coordX >= rowBarrier || coordY >= colBarrier) {
          return;
      }
      if (trackerObj[[coordX, coordY]] !== undefined) {
          return;
      }

      if (grid[coordY][coordX] === '0') {
          return;
      }
      trackerObj[[coordX, coordY]] = 1;
      //  go right
      if (coordX + 1 < rowBarrier) {
          helper(coordX + 1, coordY);
      }

      //  go down
      if (coordY + 1 < colBarrier) {
          helper(coordX, coordY + 1);
      }
      // go left
      if (coordX - 1 >= 0) {
          helper(coordX - 1, coordY)
      }

      if (coordY - 1 >= 0) {
          helper(coordX, coordY - 1)
      }
  }

  for (var i = 0; i < grid.length; i++) {
      for (var j = 0; j < grid[i].length; j++) {
          if (trackerObj[[j, i]] === undefined && grid[i][j] === '1') {
              count++;
              helper(j, i);
          }
      }
  }
  return count;
};