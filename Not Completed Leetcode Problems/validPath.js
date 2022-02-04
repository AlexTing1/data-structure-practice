var searchPath = function(graph, current, end, prevPaths) {
  if (current === end) {
    return true;
  }

  if (prevPaths[current] !== undefined) {
    return false;
  }

  var currentPossiblePaths = graph[current];

  for (var i = 0; i < currentPossiblePaths.length; i++) {
    var path = currentPossiblePaths[i];
    if (prevPaths[path] === undefined) {
      prevPaths[current] = 1;
      if (searchPath(graph, path, end, prevPaths)) {
        return true;
      }
      delete prevPaths[current];
    }
  }

  return false;
}

var validPath = function(n, edges, start, end) {
  var graph = {};
  for (var i = 0; i < edges.length; i++) {
    var current = edges[i];
    var begin = current[0];
    var end = current[1];

    if (graph[begin] === undefined) {
      graph[begin] = [end];
    } else {
      graph[begin].push(end);
    }
  }

  console.log(JSON.stringify(graph));

  if (graph[start] === undefined) {
    return false;
  }

  var startingArray = graph[start];

  for (var i = 0; i < startingArray.length; i++) {
    var current = startingArray[i];
    if (searchPath(graph, current, end, {})) {
      return true;
    }
  }

  return false;
};

var n = 6;
var edges = [[0,1],[0,2],[3,5],[5,4],[4,3]];
var source = 5;
var destination = 5;

console.log(validPath(n, edges, source, destination));