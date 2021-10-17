var pivotIndex = function(nums) {
  var rightSum = 0;
  var leftSum = 0;

  for (var i = 0; i < nums.length; i++) {
    var current = nums[i];
    rightSum = rightSum + current;
  }

  if (rightSum - nums[0] === 0) {
    return 0;
  }
  rightSum = rightSum - nums[0];
  for (var i = 0; i < nums.length - 1; i++) {
    debugger;
    var prevIndex = nums[i];
    var currentIndex = nums[i + 1];

    leftSum = leftSum + prevIndex;
    rightSum = rightSum - currentIndex;

    if (leftSum === rightSum) {
      return i + 1;
    }
  }

  return -1;
};

var test = [1,7,3,6,5,6];
console.log(pivotIndex(test));
