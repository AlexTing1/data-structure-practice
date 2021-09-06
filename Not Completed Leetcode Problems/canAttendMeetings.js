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

  for (var i = 0; i < intervals.length; i++) {
    for (var j = i + 1; j < intervals.length; j++) {
      if (!checkOverlap(intervals[i], intervals[j])) {
        return false
      }
    }
  }
  return true;
};