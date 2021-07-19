/*
  I - # of cities, flight paths, starting city, ending city, number of possible stops
  O - min cost of flight path with constraints
  C - None
  E - destination does not exists,

  TRUE Cases
    1. flight path exists
    2. multiple flight path exists
  FALSE Cases
    1. No flight path exists
    2. flight path exists but require more than allowed stops
    3. no flight path start from current city

  flightCost(n ,edges, src, dst, k)
    trackerObj
      obj will contain possible flight paths to destination regardless of constraints
      key: price
      value: array of flight paths( ex. { 200: [[0, 1, 100], [1, 2, 100]] })
    1. iterate edges and find possible flight paths (helper function)
    2. get keys of trackerObj sort smallest to largest
      a.) at each key, check if path constraints are met, if met --> return key
    3. return -1

  helper(start, end, edges, currentPath, prevDest)
    if (start is in prevDest)
      return;
    var results = {}
    base case: start === end
      find sum of prices by iterating currentPath
      if sum key value exists, compare pathway lengths, and then save the one with smaller pathway
      results[sum] = pathway
      return;
    recursive case:
      for every case that has start as a starting point
         check that every starting case
         prevDest.push(start)
         currentPath.push(currentCase)
         helper(current, end, edges, currentPath, prevDest)
    return results
*/

var flightCost = function(n, edges, src, dst, maxFlights) {
  var trackerObj = {};
  var helper = function(start, end, edges, currentPath, prevDest) {
    if (prevDest.includes(start)) {
      return;
    }
    // base case
    if (start === end) {
      var sum = 0;
      for (var i = 0; i < currentPath.length; i++) {
        sum += currentPath[i][2];
      }
      trackerObj[sum] = currentPath;
      return;
    }

    //recursive case
    for (var i = 0; i < edges.length; i++) {
      var current = edges[i]; // [0, 1, 100]
      if (current[0] === start) {
        prevDest.push(start);
        currentPath.push(current);
        helper(current[1], end, edges, currentPath, prevDest);
      }
    }
  }

  trackerObj = helper(src, dst, edges, [], []);
  console.log(trackerObj);
  var keys = Object.keys(trackerObj).sort(function(a, b) { return b - a }); //array sorted least to greatest
  for (var i = 0; i < keys.length; i++) {
    var currentPath = keys[i];
    if (trackerObj.currentPath.length <= maxFlights + 1) {
      return keys[i]
    }
  }
  return -1;
}

console.log(flightCost(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1))