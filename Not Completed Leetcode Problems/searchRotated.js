var search = function(nums, target) {
  var indexFlip = 0;
  var prev = nums[0];

  for (var i = 1; i < nums.length; i++) {
    var current = nums[i];
    if (current === target) {
      return i;
    }

    if (prev > current) {
      indexFlip = current;
      break;
    }

    prev = current;
  }


};