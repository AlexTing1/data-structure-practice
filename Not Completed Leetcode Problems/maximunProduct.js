var maximumProduct = function(nums) {
  var pos = [];
  var neg = [];

  for (var i = 0; i < nums.length; i++) {
      if (nums[i] >= 0) {
          pos.push(nums[i])
      } else {
          neg.push(nums[i])
      }
  }

  pos.sort((a, b) => { return a - b });
  neg.sort((a, b) => { return a - b});


};