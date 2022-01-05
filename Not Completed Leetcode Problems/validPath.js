var validPath = function(n, edges, start, end) {
  var graph = {};
  for (var i = 0; i < edges.length; i++) {
    var current = edges[i];
    var start = current[0];
    var end = current[1];

    if (graph[start] === undefined) {
      graph[start] = [end];
    } else {
      graph[start].push(end);
    }
  }


};