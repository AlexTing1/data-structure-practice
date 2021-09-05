var findKthLargest = function(nums, k) {
  nums = nums.sort((a, b) => (b - a));
  return nums[k - 1]
};

