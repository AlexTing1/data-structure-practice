var minMeetingRooms = function(intervals) {
  intervals = intervals.sort((a, b) => (a[0] - b[0]));
  var count = 0;
  var meetingTracker = {};
  //meetingTracker[0] = [intervals[0]];

  for (var i = 0; i < intervals.length; i++) {
    var current = intervals[i];
    var meetingKeys = Object.keys(meetingTracker);
    var toAdd = true;
    debugger;
    for (var j = 0; j < meetingKeys.length; j++) {
      var key = meetingKeys[j];
      var lastMeeting = meetingTracker[key][meetingTracker[key].length - 1];
      //debugger;
      if (current[0] >= lastMeeting[1]) {
        meetingTracker[key].push(current);
        toAdd = false;
        break;
      }
    }
    if (toAdd) {
      meetingTracker[i] = [intervals[i]];
      count++;
    }
  }
  debugger
  return Object.keys(meetingTracker).length;
};

intervals = [[0,30],[5,10],[15,20]]

console.log(minMeetingRooms(intervals));
