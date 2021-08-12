//  Inputs - intervals double array
//  Outputs - merged intervals double array
//  contraints - 1 <= intervals.length <= 10^4, intervals[i].length == 2, 0 <= starti <= endi <= 104
//  Edge cases - no interavl overlap, 1 interval overlap, interval overlap happens in front, interval overlap happens in back, same intervals
var merge = function(intervals) {
  //  init result array
  //  iterate intervals
  //    iterate results array
  //      if interavls falls within results array
  //        change current interval in results array
  //      else
  //        add new interval to results array
  //  return results array

  var results = [];

  for (var i = 0; i < intervals.length; i++) {
    var isIn = false;
    for (var j = 0; j < results.length; j++) {

    }
  }
}