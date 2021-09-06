var subarraySum = function(nums, k) {
  var count = 0;
  var total = 0;
  var prefixSumMap = {}; // {prefixSum: count}
  prefixSumMap[0] = 1;
  for (var i = 0; i < nums.length; i++) {
    var current = nums[i];
    total += current;
    if (prefixSumMap.has(total - k)) {
      count += prefixSumMap[total-k];
    }

    if (prefixSumMap[total] !== undefined) {
      prefixSumMap[total]++;
    } else {
      prefixSumMap[total] = 1;
    }
  }
};