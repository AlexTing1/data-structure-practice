var majorityElement = function(nums) {
  //  init nums.length/2
  //  init trackerObj
  //  iterate nums
  //    if nums[i] not in trackerObj
  //      trackerObj[nums[i]] = 1;
  //    else
  //      tracker[nums[i]]++;
  //      if tracker[nums[i]] > nums.length/2
  //        return nums[i]

  var majorElementBar = nums.length/2;
  var trackerObj = {};

  for (var i = 0; i < nums.length; i++) {
    var current = nums[i];
    if (trackerObj[current] === undefined) {
      trackerObj[current] = 1;
    } else {
      trackerObj[current]++;
    }

    if (trackerObj[nums[i]] > majorElementBar) {
      return nums[i];
    }
  }

  return null;
};

var test = [3, 2, 3]
var test2 = [2,2,1,1,1,2,2]
console.log(majorityElement(test2));
