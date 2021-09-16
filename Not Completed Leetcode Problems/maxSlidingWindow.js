var maxSlidingWindow = function(nums, k) {
  var result = [];
  for (var i = 0; i + k < nums.length; i++) {
    var currentBlock = nums.slice(i, i + k);
    var max = Math.max(...currentBlock);
    result.push(max);
  }
  return result;
};