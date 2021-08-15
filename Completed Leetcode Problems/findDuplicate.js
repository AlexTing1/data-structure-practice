var findDuplicate = function(paths) {
  var rootFileObj = {};

  for (var i = 0; i < paths.length; i++) {
    var current = paths[i].split(" ");
    rootFileObj[current[0]] = [];
    for (var j = 1; j < current.length; j++) {
      rootFileObj[current[0]].push(current[j])
    }
  }

  //debugger;

  var rootFileKeys = Object.keys(rootFileObj);
  var contentFileObj = {};
  //split files into {content: [files]}
  for (var i = 0; i < rootFileKeys.length; i++) {
    var currentRoot = rootFileKeys[i];
    var currentRootFiles = rootFileObj[currentRoot];
    for (var j = 0; j < currentRootFiles.length; j++) {
      var currentFile = currentRootFiles[j].split("(");
      var file = currentFile[0];
      var content = currentFile[1].slice(0, currentFile[1].length - 1);

      if (contentFileObj[content] === undefined) {
        contentFileObj[content] = [[currentRoot, file]];
      } else {
        contentFileObj[content].push([currentRoot, file]);
      }
    }
  }

  //debugger;

  //get file array from contentObj

  var contentFileObjKeys = Object.keys(contentFileObj);
  var result = [];
  for (var i = 0; i < contentFileObjKeys.length; i++) {
    var currentContentFiles = contentFileObj[contentFileObjKeys[i]];
    var currentFileSameContent = [];
    for (var j = 0; j < currentContentFiles.length; j++) {
      var current = currentContentFiles[j];
      var combinedPathFile = current[0] + '/' + current[1];
      currentFileSameContent.push(combinedPathFile);
    }
    if (currentFileSameContent.length > 1) {
      result.push(currentFileSameContent)
    }

  }

  //debugger;
  return result;
};

var test = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"];

//console.log(findDuplicate(test));

var test2 = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)"];

console.log(findDuplicate(test2));
//console.log(test2.split("("))