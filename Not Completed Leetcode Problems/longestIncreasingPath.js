//  Input - m x n matrix
//  Output - length of longest path possible
//  Contraints - 1 <= m, n <= 200
//  Edge Cases - 1x1 matrix, m != n,
var longestIncreasingPath = function(matrix) {
  //  init trackerMatrix
  //  init largest path length
  //  iterate matrix
  //    check every possible path
  //      first check trackerMatrix to see if largest path already recoreded
  //        if yes, then record that path maxLength as 1 + recorded path
  //        else
  //            check hard way by checking every path
  //            record data into trackerMatrix
  //        if current length > largest
  //          largest = current
  //  return largestPathLength
  var trackerObj = {};
  var largestLength = 0;
  var checkPath = function(coord, currentLength, value) {
    //debugger;
    if (coord[0] < 0 || coord[0] >= matrix.length) {
      return currentLength;
    }

    if (coord[1] < 0 || coord[1] >= matrix[coord[0]].length) {
      return currentLength;
    }

    if (matrix[coord[0]][coord[1]] <= value) {
      return currentLength;
    }

    currentLength++;

    var keys = Object.keys(trackerObj);
    var path1;
    var path2;
    var path3;
    var path4;
    //check i + 1
    //debugger;
    if (keys.includes(coord[0] + 1 + ',' + coord[1]) && matrix[coord[0] + 1][coord[1]] > matrix[coord[0]][coord[1]]) {
      path1 = trackerObj[[coord[0] + 1, coord[1]]] + currentLength;
    } else {
      path1 = checkPath([coord[0] + 1, coord[1]], currentLength, matrix[coord[0]][coord[1]])
      if (coord[0] + 1 < matrix.length && coord[0] + 1 >= 0 && coord[1] >= 0 && coord[1] < matrix[coord[0]].length) {
        trackerObj[[coord[0] + 1, coord[1]]] = path1;
      }

    }

    //check i - 1
    if (keys.includes(coord[0] - 1 + ',' + coord[1]) && matrix[coord[0] - 1][coord[1]] > matrix[coord[0]][coord[1]]) {
      path2 = trackerObj[[coord[0] - 1, coord[1]]] + currentLength;
    } else {
      path2 = checkPath([coord[0] - 1, coord[1]], currentLength, matrix[coord[0]][coord[1]])
      if (coord[0] - 1 < matrix.length && coord[0] - 1>= 0 && coord[1] >= 0 && coord[1] < matrix[coord[0]].length) {
        trackerObj[[coord[0] - 1, coord[1]]] = path2;
      }
    }

    //check j + 1
    var prevCoord = coord[1] + 1;
    if (keys.includes(coord[0] + ',' + prevCoord) && matrix[coord[0]][coord[1] + 1] > matrix[coord[0]][coord[1]]) {
      path3 = trackerObj[[coord[0], coord[1] + 1]] + currentLength;
    } else {
      path3 = checkPath([coord[0], coord[1] + 1], currentLength, matrix[coord[0]][coord[1]])
      if (coord[0]  < matrix.length && coord[0] >= 0 && coord[1] + 1>= 0 && coord[1] + 1< matrix[coord[0]].length) {
        trackerObj[[coord[0], coord[1] + 1]] = path3;
      }
    }

    //check j - 1

    var prevCoord = coord[1] - 1
    if (keys.includes(coord[0] + ',' + prevCoord) && matrix[coord[0]][coord[1] - 1] > matrix[coord[0]][coord[1]]) {
      path4 = trackerObj[[coord[0], coord[1] - 1]] + currentLength;
    } else {
      path4 = checkPath([coord[0], coord[1] - 1], currentLength, matrix[coord[0]][coord[1]])
      if (coord[0] < matrix.length && coord[0] >= 0 && coord[1] - 1 >= 0 && coord[1] - 1 < matrix[coord[0]].length) {
        trackerObj[[coord[0], coord[1] - 1]] = path4;
      }
    }


    return Math.max(path1, path2, path3, path4);
  }

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      //check every possible path
      var currentCoord = [i, j];
      debugger;
      var currentPathMaxLength = checkPath(currentCoord, 0, -Infinity);
      trackerObj[currentCoord] = currentPathMaxLength;
      //debugger;
      if (currentPathMaxLength > largestLength) {
        largestLength = currentPathMaxLength;
      }

    }
  }
  debugger;
  return largestLength
};


/* var checkPath = function(coord, currentLength, value) {
  debugger;
  if (coord[0] < 0 || coord[0] >= matrix.length) {
    return currentLength;
  }

  if (coord[1] < 0 || coord[1] >= matrix[coord[0]].length) {
    return currentLength;
  }

  if (matrix[coord[0]][coord[1]] <= value) {
    return currentLength;
  }

  currentLength++;
  //check i + 1
  var path1 = checkPath([coord[0] + 1, coord[1]], currentLength, matrix[coord[0]][coord[1]])
  //check i - 1
  var path2 = checkPath([coord[0] - 1, coord[1]], currentLength, matrix[coord[0]][coord[1]])
  //check j + 1
  var path3 = checkPath([coord[0], coord[1] + 1], currentLength, matrix[coord[0]][coord[1]])
  //check j - 1
  var path4 = checkPath([coord[0], coord[1] - 1], currentLength, matrix[coord[0]][coord[1]])

  return Math.max(path1, path2, path3, path4);
} */

var matrix = [[7,8,9],[9,7,6],[7,2,3]];
var matrix2 = [[9,9,4],[6,6,8],[2,1,1]];
console.log(longestIncreasingPath(matrix2));


