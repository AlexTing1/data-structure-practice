var labrynthEscape2 = function(n, m, obstacles, teleports) {
  var start = [0, 0];
  var end = [n - 1, m - 1];
  var obstaclesTracker = {};

  var teleportTracker = {};
  var pastPositions = {};

  for (var i = 0; i < obstacles.length; i++) {
    obstaclesTracker[obstacles[i]] = 1;
  }

  for (var i = 0; i < teleports.length; i++) {
    var current = teleports[i];
    teleportTracker[[current[0], current[1]]] = [current[2], current[3]];
  }

  debugger;

  while (start[0] !== end[0] || start[1] !== end[1]) {
    debugger;
    if (obstaclesTracker[start] !== undefined) {
      return false
    }

    if (pastPositions[start] !== undefined) {
      return false
    }

    pastPositions[start] = 1;

    if (teleportTracker[start] !== undefined) {
      start = teleportTracker[start];
    } else {
      if (start[1] + 1 === m) {
        start = [start[0] + 1, 0];
      } else {
        start = [start[0], start[1] + 1];
      }
    }

  }
  return true;
}

console.log(labrynthEscape2(3, 4, [[2, 0]], [[1, 2, 2, 1], [1, 3, 2, 2]]));
