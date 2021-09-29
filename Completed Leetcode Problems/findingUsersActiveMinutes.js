var findingUsersActiveMinutes = function(logs, k) {
  var tracker = {};
  var result = new Array(k).fill(0);
  for (var i = 0; i < logs.length; i++) {
    var current = logs[i];
    var id = current[0];
    var time = current[1];
    if (tracker[id] === undefined) {
      tracker[id] = new Set();
      tracker[id].add(time)
    } else {
      tracker[id].add(time)
    }
  }

  var keys = Object.keys(tracker);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var currentLen = tracker[key].size;
    result[currentLen - 1]++;
  }
  return result;
};