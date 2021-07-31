var canJump = function(nums) {
  if (nums.length === 1) {
    return true;
  }
  var helper = function(currentNum, index) {
    while (currentNum > 0) {
      var nextIndex = index + currentNum;
      debugger;
      if (nextIndex >= nums.length) {
        currentNum--;
        continue;
      }

      var nextVal = nums[nextIndex];
      if (nextIndex === nums.length - 1) {
        return true;
      }

      if (nextVal === 0) {
        currentNum--;
        continue;
      }

      if (helper(nextVal, nextIndex)) {
        return true;
      } else if (helper(currentNum - 1, index)) {
        return true;
      } else  {
        return false;
      };
      currentNum--;
    }
    return false;

  }
  return helper(nums[0], 0);
}

//console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([2, 0]));



