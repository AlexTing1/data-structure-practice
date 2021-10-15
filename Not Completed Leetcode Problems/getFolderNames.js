var getFolderNames = function(names) {
  var tracker = {};
  var result = [];

  for (var i = 0; i < names.length; i++) {
    var current = names[i];
    if (tracker[current] === undefined) {
      result.push(current);
      tracker[current] = 1;
    } else {
      var count = 1;
      var file = current + ` (${count})`;
      while (tracker[file] !== undefined) {
        count++;
        file = current + ` (${count})`;
      }
      result.push(file);
    }
  }
  return result;
};