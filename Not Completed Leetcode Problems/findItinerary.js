var findItinerary = function(tickets) {
  var graph = {};
  var totalDestinations = tickets.length + 1;

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

  debugger;

  var start = 'JFK';
  var startArray = graph[start];
  var resultStorage = [];

  var createPath = function(start, endDestination, history, flightPath) {
    debugger;
    if (flightPath.length === totalDestinations) {
      return flightPath;
    }

    if (history === undefined) {
      return flightPath;
    }
    var path = graph[endDestination];

    for (var i = 0; i < path.length; i++) {
      var newDestination = path[i];
      if (history[[endDestination, newDestination]] === undefined) {
        history[[endDestination, newDestination]] = 1;
        flightPath.push(newDestination);
        var result = createPath(endDestination, newDestination, history, flightPath);
        if (result.length === totalDestinations) {
          return result;
        }
        flightPath.pop();
        delete history[[endDestination, newDestination]];
      }
    }
    return flightPath;
  }

  for (var i = 0; i < startArray.length; i++) {
    var endDestination = startArray[i];
    var history = {};
    history[[start, endDestination]] = 1;
    var path = createPath(start, endDestination, history, [start, endDestination]);
    if (path.length === totalDestinations) {
      resultStorage.push(path);
    }
  }

  var result = resultStorage[0];
  for (var i = 1; i < resultStorage.length; i++) {
    var current = resultStorage[i];
    if (result.join('').localeCompare(current.join('')) > 0) {
      result = current;
    }
  }
  return result;
};

var test = [["EZE","AXA"],["TIA","ANU"],["ANU","JFK"],["JFK","ANU"],["ANU","EZE"],["TIA","ANU"],["AXA","TIA"],["TIA","JFK"],["ANU","TIA"],["JFK","TIA"]]
var test2 = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];

console.log(findItinerary(test));
