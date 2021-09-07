var simplifyPath = function(path) {
  var pathArray = path.split('/');
  var stack = [];

  for (var i = 0; i < pathArray.length; i++) {
    var current = pathArray[i];
    debugger;
    if (current === '..') {
      stack.pop();
    } else {
      if (current.length !== 0 && current !== '.') {
        stack.push(current);
      }

    }
  }
  var result ='';
    if (stack.length === 0) {
        return '/'
    }
  debugger;
  for (var i = 0; i < stack.length; i++) {
    result += '/' + stack[i]
  }
  return result;
};


var input = "/a/./b/../../c/";

console.log(simplifyPath(input));