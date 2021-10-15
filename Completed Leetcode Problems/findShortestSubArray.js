var findShortestSubArray = function(nums) {
  var tracker = {};

  for (var i = 0; i < nums.length; i++) {
    var current = nums[i];
    if (tracker[current] === undefined) {
      tracker[current] = [1, [i]];
    } else {
      tracker[current][0]++;
      tracker[current][1].push(i);
    }
  }

  var trackerValues = Object.values(tracker);
  var largestCount = 0;
  var distance = Infinity;


  for (var i = 0; i < trackerValues.length; i++) {
    debugger;
    var current = trackerValues[i];
    var count = current[0];
    var positionArray = current[1];

    if (count >= largestCount) {
      var currentDistance = positionArray[positionArray.length - 1] - positionArray[0] + 1;
      if (currentDistance < distance || count > largestCount) {
        distance = currentDistance;
      }
      largestCount = count;
    }
  }
  return distance;
};

var test = [1,2,2,3,1,4,2];

console.log(findShortestSubArray(test));
