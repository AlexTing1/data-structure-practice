//  Input - nums array
//  Output - min difference between highest and lowest by changing 3 variables
//  Constraints - 1 <= nums.length <= 10^5, -10^9 <= nums[i] <= 10^9
//  Edge Cases - nums.length < 5
var minDifference = function(nums) {
  //  take care of nums < 5
  //  sort nums
  //  init changeCounter
  //  init frontValue
  //  init lastValue
  //  iterate nums
  //    init nums[4]
  //    init nums[-3]
  //    check if lastValue - nums[4] > frontValue - nums[-3]
  //      change approraitae
  //  return nums
  if (nums.length < 5) {
    return 0;
  }
  nums.sort(function(a, b) {return a - b});

  return Math.min(nums[nums.length - 1] - nums[3], nums[nums.length - 2] - nums[2], nums[nums.length - 3] - nums[1], nums[nums.length - 4] - nums[0])

}

var test = [5,3,2,4];
var test2 = [1,5,0,10,14];
var test3 = [6,6,0,1,1,4,6];
var test4 = [1,5,6,14,15];
var test5 = [82,81,95,75,20];
var test6 = [20,66,68,57,45,18,42,34,37,58];
console.log(minDifference(test6));

exports.minDifference = minDifference;
