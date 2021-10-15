var groupAnagrams = function(strs) {
  var tracker = {};

  for (var i = 0; i < strs.length; i++) {
    var current = strs[i];
    var sorted = current.split('').sort().join('');

    if (tracker[sorted] === undefined) {
      tracker[sorted] = [current];
    } else {
      tracker[sorted].push(current);
    }

  }

  return Object.values(tracker);
}