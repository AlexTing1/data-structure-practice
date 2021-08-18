var gridIllumination = function(n, lamps, queries) {
  //  generate hashmap for each lamp in form { position: 1 }
  //  init result
  //  iterate queries and check if lamp is lit for every lamp,
  //    if lit
  //      count++ for that query
  //      turn off nearby lamps
  //    push count into result
  //  return result

  var horizontalObj = {};
  var verticalObj = {};
  var diagObj = {};
  var lampTracker = {};


  for (var i = 0; i < lamps.length; i++) {
    var currentLamp = lamps[i];
    var isUniq = lampTracker[currentLamp] !== undefined;
    if (!isUniq) {
      if (horizontalObj[currentLamp[0]] === undefined) {
        horizontalObj[currentLamp[0]] = 1;
      } else {
        horizontalObj[currentLamp[0]]++;
      }

      if (verticalObj[currentLamp[1]] === undefined) {
        verticalObj[currentLamp[1]] = 1;
      } else {
        verticalObj[currentLamp[1]]++;
      }

      if (diagObj[Math.abs(currentLamp[0] - currentLamp[1])] === undefined) {
        diagObj[Math.abs(currentLamp[0] - currentLamp[1])] = 1;
      } else {
        diagObj[Math.abs(currentLamp[0] - currentLamp[1])]++;
      }
      lampTracker[currentLamp] = 1;
    }

  }

  debugger;


  var isLit = function(query) {
    var xCoord = query[0];
    var yCoord = query[1];

    //check horizontal
    if (horizontalObj[xCoord] !== undefined) {
      return true;
    }

    //check vertical`
    if (verticalObj[yCoord] !== undefined) {
      return true;
    }

    //check diagonal
    /* var diagKeys = Object.keys(diagObj);
    for (var i = 0; i < diagKeys.length; i++) {
      var currentKey = diagKeys[i].split(',');
      var x = parseInt(currentKey[0]);
      var y = parseInt(currentKey[1]);

      if (Math.abs(xCoord - x) === Math.abs(yCoord - y)) {
        return true;
      }
    } */

    if (diagObj[Math.abs(yCoord - xCoord)] !== undefined) {
      return true;
    }
    return false;
  }

  var result = [];

  for (var i = 0; i < queries.length; i++) {
    debugger;
    var currentQuery = queries[i];
    if (isLit(currentQuery)) {
      result.push(1);

    } else {
      result.push(0);
    }

    //turn off all lamps
    var allLampPositions = lampPositions(currentQuery[0], currentQuery[1]);
    for (var j = 0; j < allLampPositions.length; j++) {
      var currentCoord = allLampPositions[j];
      if (lampTracker[currentCoord] !== undefined) {
        horizontalObj[currentCoord[0]]--;
        if (horizontalObj[currentCoord[0]] === 0) {
          delete horizontalObj[currentCoord[0]];
        }

        verticalObj[currentCoord[1]]--;
        if (verticalObj[currentCoord[1]] === 0) {
          delete verticalObj[currentCoord[1]];
        }

        diagObj[Math.abs(currentCoord[1] - currentCoord[0])]--;
        if (diagObj[Math.abs(currentCoord[1] - currentCoord[0])] === 0) {
          delete diagObj[Math.abs(currentCoord[1] - currentCoord[0])];
        }
        /* lampTracker[currentCoord]--;
        if (lampTracker[currentCoord] === 0) {
          delete lampTracker[currentCoord];
        } */

        delete lampTracker[currentCoord];
      }
    }
  }
  return result;
};

var lampPositions = function(xCoord, yCoord) {
  return [[xCoord, yCoord], [xCoord - 1, yCoord], [xCoord - 1, yCoord + 1], [xCoord, yCoord + 1], [xCoord + 1, yCoord + 1], [xCoord + 1, yCoord], [xCoord + 1, yCoord - 1],
  [xCoord, yCoord - 1], [xCoord - 1, yCoord - 1]];
}

/* var isLit = function(lampsHashMapTracker, ) */
var n = 6;
var lamps = [[1, 1]];
var queries = [[2, 0], [1, 0]];

//debugger;
//console.log(testSet);
//console.log(testSet.has('[0, 0]'));
console.log(gridIllumination(n, lamps, queries));
