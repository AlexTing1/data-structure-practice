var findItinerary = function(tickets) {
  var graph = {};

  for (var i = 0; i < tickets.length; i++) {
    var current = tickets[i];
    var start = current[0];
    var end = current[1];

    if (graph[start] === undefined) {
      graph[start] = [end];
    } else {
      graph[start].push(end);
    }
  }

  var keys = Object.keys(graph);

  for (var i = 0; i < keys.length; i++) {
    graph[keys[i]].sort();
  }

  var start = 'JFK';

  var tracker = {};



}

var test = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]];

console.log(findItinerary(test));
