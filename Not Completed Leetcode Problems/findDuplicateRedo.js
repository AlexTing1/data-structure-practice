var findDuplicate = function(paths) {
  var tracker = {};
  var result = [];
  for (var i = 0; i < paths.length; i++) {
    var current = paths[i].split(' ');
    var currentFilePath = current[0];
    for (var j = 1; j < current.length; j++) {
      //  ex. 1.txt(abcd);
      var currentFile = current[j];
      var paraIndex = currentFile.indexOf('(');
      var content = currentFile.slice(paraIndex);
      var fileName = currentFile.slice(0, paraIndex);
      var combinedPathContent = currentFilePath + '/' + fileName;
      if (tracker[content] === undefined) {
        tracker[content] = [combinedPathContent];
      } else {
        tracker[content].push(combinedPathContent);
      }
    }
  }

  var keys = Object.keys(tracker);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (tracker[key].length > 1) {
      result.push(tracker[key]);
    }

  }
  return result;
};