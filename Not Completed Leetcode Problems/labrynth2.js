var labrynthEscape2 = function(n, m, obstacles, teleports) {
  var start = [0, 0];
  var end = [n - 1, m - 1];
  var obstaclesTracker = {};

  var teleportTracker = {};

  for (var i = 0; i < obstacles.length; i++) {
    obstaclesTracker[obstacles[i]] = 1;
  }

  for (var i = 0; i < teleports.length; i++) {
    var current = teleports[i];
    teleportTracker[[current[0], current[1]]] = [current[2], current[3]];
  }

  debugger;
}

console.log(3, 4, [[2, 0], [2, 1]], [[1, 2, 1, 1], [1, 3, 2, 2]]);
