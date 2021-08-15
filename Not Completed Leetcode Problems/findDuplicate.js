var findDuplicate = function(paths) {
  var rootFileObj = {};

  for (var i = 0; i < paths.length; i++) {
    var current = paths[i].split(" ");
    rootFileObj[current[0]] = [];
    for (var j = 1; j < current.length; j++) {
      rootFileObj[current[0]].push(current[j])
    }
  }

  debugger;


  return rootFileObj
};

var test = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"];

console.log(findDuplicate(test));
