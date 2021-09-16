var findCircleNum = function(isConnected) {
  var tracker = [];
  var numberTracker = {}; //  format: {number: set} merge two sets together.
  for (var i = 0; i < isConnected.length; i++) {
    for (var j = 0; j < isConnected[i].length; j++) {
      var current = isConnected[i][j];
      if (current === 1) {
        //debugger;
        var wasIn = false;
        var alreadySeen = false;
        var seenTrackerIndex = 0;
        for (var k = 0; k < tracker.length; k++) {
          var currentTracker = tracker[k];
          if (currentTracker.has(i) || currentTracker.has(j)) {
            if (!alreadySeen) {
              currentTracker.add(i);
              currentTracker.add(j);
              alreadySeen = true;
              seenTrackerIndex = k;
            } else {
              //add current set to seenTrackerIndex set
              //delete current Set
              debugger;
              tracker[seenTrackerIndex] = new Set([...tracker[seenTrackerIndex], ...tracker[k]]);
              tracker.splice(k, 1);
            }
            wasIn = true;
          }
        }

        if (!wasIn) {
          var newSet = new Set();
          newSet.add(i);
          newSet.add(j);
          tracker.push(newSet);
        }
      }
    }
  }
  debugger;
  return tracker.length;
};

var grid = [
  [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
  [0,1,1,0,0,0,0,0,0,0,0,0,0,1,0],
  [0,1,1,0,0,0,0,0,0,0,0,1,0,0,1],
  [0,0,0,1,0,1,0,0,1,0,0,0,0,1,0],
  [0,0,0,0,1,0,0,0,0,0,0,1,0,0,0],
  [0,0,0,1,0,1,0,0,0,0,0,1,0,0,0],
  [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
  [1,0,0,1,0,0,0,0,1,1,1,0,0,1,0],
  [0,0,0,0,0,0,0,0,1,1,0,1,1,0,0],
  [0,0,0,0,0,0,0,0,1,0,1,1,0,0,0],
  [0,0,1,0,1,1,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,0,0,1,0,0,1,0,1],
  [0,1,0,1,0,0,0,0,1,0,0,0,0,1,0],
  [0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]
];

console.log(findCircleNum(grid));