//  Inputs - intervals double array
//  Outputs - merged intervals double array
//  contraints - 1 <= intervals.length <= 10^4, intervals[i].length == 2, 0 <= starti <= endi <= 104
//  Edge cases - no interavl overlap, 1 interval overlap, interval overlap happens in front, interval overlap happens in back, same intervals
var merge = function(intervals) {
  //  sort intervals
  //  init results array
  //  iterate intervals
  //    if current Intervals is within last result, then do nothing
  //    if first interval of current > last interval of result
  //      push into result
  //    change approrpityl
  //  return result

  intervals.sort(function(a, b) { return a[0] - b[0] });
  debugger;
  var results = [intervals[0]];
  for (var i = 1; i < intervals.length; i++) {
    var lastResult = results[results.length - 1];
    var currentInterval = intervals[i];

    if (currentInterval[0] >= lastResult[0] && currentInterval[0] <= lastResult[1] && currentInterval[1] >= lastResult[0] && currentInterval[1] <= lastResult[1]) {
      continue;
    } else if (currentInterval[0] > lastResult[1]) {
      results.push(currentInterval);
    } else {
      results[results.length - 1][1] = currentInterval[1];
    }

  }
  debugger;
  return results;
}

var test = [[1,3],[2,6],[8,10],[15,18]];
var test2 =
[[1,3],[2,6],[8,10],[15,18]];

console.log(merge(test2));
