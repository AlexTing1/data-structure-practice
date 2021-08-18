var maximumProduct = function(nums) {
  if (nums.length === 3) {
    return nums[0] * nums[1] * nums[2];
  }
  nums.sort((a, b) => { return a - b });

  //debugger;

  return Math.max(nums[0] * nums[1] * nums[nums.length - 1], nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]);

};

var test = [-1,-2,-3, 45, 12, -3495];

console.log(maximumProduct(test));
