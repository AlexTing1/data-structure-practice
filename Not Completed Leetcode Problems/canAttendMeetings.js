var canAttendMeetings = function(intervals) {
  var checkOverlap = function(time1, time2) {
    var time1Start = time1[0];
    var time1End = time1[1];
    var time2Start = time2[0];
    var time2End = time2[1];

    if (time2Start >= time1Start && time2Start < time1End) {
      return false;
    } else if (time1Start >= time2Start && time1Start < time2End) {
      return false;
    } else {
      return true;
    }
  }
  intervals = intervals.sort((a, b) => (a[0] - b[0]));

  for (var i = 0; i < intervals.length - 1; i++) {
    var current = intervals[i];
    var next = intervals[i + 1];

    if(!checkOverlap(current, next)) {
      return false;
    }
  }

  return true;
};