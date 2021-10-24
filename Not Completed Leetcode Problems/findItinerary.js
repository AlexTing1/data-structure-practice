/* var findItinerary = function(tickets) {
  var graphMap = {};
  var totalDestinations = tickets.length + 1;

  for (var i = 0; i < tickets.length; i++) {
    var current = tickets[i];
    var start = current[0];
    var end = current[1];
    if (graphMap[start] === undefined) {
      graphMap[start] = {};
      graphMap[start][end] = 1;
    } else {
      if (graphMap[start][end] === undefined) {
        graphMap[start][end] = 1;
      } else {
        graphMap[start][end]++;
      }
    }
  }

  debugger;
  var start = 'JFK';
  var startArray = graphMap[start];
  var resultStorage = [];

  var createPath = function(start, endDestination, graph, history, flightPath) {
    //debugger;
    if (flightPath.length === totalDestinations) {
      return flightPath;
    }

    if (history === undefined) {
      return flightPath;
    }

    var path = graph[endDestination];
    var pathKeys = Object.keys(path);

    for (var i = 0; i < pathKeys.length; i++) {
      var newDestination = pathKeys[i];
      if (history[[endDestination, newDestination]] === undefined) {
        //follow path
        if (graph[endDestination][newDestination] > 1) {
          graph[endDestination][newDestination]--;
        } else {
          delete graph[endDestination][newDestination];
          history[[endDestination, newDestination]] = 1;
        }

        flightPath.push(newDestination);
        var temp = createPath(endDestination, newDestination, graph, history, flightPath);
        if (temp.length === totalDestinations) {
          resultStorage.push(temp);
        }

        flightPath.pop();

        if (graph[endDestination][newDestination] === undefined) {
          graph[endDestination][newDestination] = 1;
          delete history[[endDestination, newDestination]];
        } else {
          graph[endDestination][newDestination]++;
        }

      }
    }
    return flightPath;
  }

  debugger;

  var startArrayKeys = Object.keys(startArray);

  for (var i = 0; i < startArrayKeys.length; i++) {
    var endDestination = startArrayKeys[i];
    var history = {};
    history[[start, endDestination]] = 1;
    var clone = JSON.parse(JSON.stringify(graphMap));
    var path = createPath(start, endDestination, clone, history, [start, endDestination]);
    debugger;
    if (path.length === totalDestinations) {
      resultStorage.push(path);
    }
  }
  debugger;
  var result = resultStorage[0];
  for (var i = 1; i < resultStorage.length; i++) {
    var current = resultStorage[i];
    if (result.join('').localeCompare(current.join('')) > 0) {
      result = current;
    }
  }
  return result;
};
 */

function makePath (location, map, path, counter, target) {
  if (counter === target) return path;
  const destinations = map.get(location);
  if (destinations) {
    for (let i = 0; i < destinations.length; i++) {
      const [destination] = destinations.splice(i, 1);
      const gotPath = makePath(destination, map, [...path, destination], counter + 1, target);
      if (gotPath) return gotPath;
      destinations.splice(i, 0, destination);
    }
  }
  return null;
}


function findItinerary (tickets) {
  tickets.sort((a,b) => a[1] > b[1] ? 1 : -1);
  const map = new Map();
  let target = 0;
  for (const [origin, destination] of tickets) {
    const curr = map.get(origin);
    //debugger;
    target++;
    if (!curr) map.set(origin, [destination]);
    else map.set(origin, [...(map.get(origin) || []), destination]);
  }
  debugger;
  return makePath('JFK', map, ['JFK'], 0, target);
}

var test = [["EZE","AXA"],["TIA","ANU"],["ANU","JFK"],["JFK","ANU"],["ANU","EZE"],["TIA","ANU"],["AXA","TIA"],["TIA","JFK"],["ANU","TIA"],["JFK","TIA"]]
var test2 = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];

console.log(findItinerary(test));
