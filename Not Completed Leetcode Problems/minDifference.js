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

  var changeCounter = 0;
  var frontIndex = 0;
  var lastIndex = nums.length - 1;
  var frontValue = nums[0];
  var lastValue = nums[nums.length - 1];
  var lastFlip = true;

  while (changeCounter < 3) {
    var frontCompare = nums[3];
    var lastCompare = nums[nums.length - 4];
    var frontValue = nums[0];
    var lastValue = nums[nums.length - 1];
    debugger;
    if (frontCompare - frontValue > lastValue - lastCompare) {
      //  change front
      nums[frontIndex] = frontCompare;
      //frontIndex++;
      lastFlip = true;
    } else if (frontCompare - frontValue === lastValue - lastCompare) {
      //  do last one
      if (lastFlip) {
        nums[frontIndex] = frontCompare;
        //frontIndex++;
        lastFlip = true;
      } else {
        nums[lastIndex] = lastCompare;
        //lastIndex++;
        lastFlip = false;
      }
    } else {
      //  change last
      nums[lastIndex] = lastCompare;
      //lastIndex++;
      lastFlip = false;
    }
    nums.sort(function(a, b) {return a - b});
    changeCounter++;
  }
  debugger;
  return nums[nums.length - 1] - nums[0];

}

var test = [5,3,2,4];
var test2 = [1,5,0,10,14];
var test3 = [6,6,0,1,1,4,6];
var test4 = [1,5,6,14,15];
var test5 = [82,81,95,75,20];
var test6 = [20,66,68,57,45,18,42,34,37,58];
console.log(minDifference(test6));

exports.minDifference = minDifference;
