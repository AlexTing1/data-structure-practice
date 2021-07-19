var threeSum = function(nums) {
  var result = new Set();
  if (nums.length < 3) {
    return [];
  }

  for (var i = 0; i < nums.length; i++) {
    for (var j = i; j < nums.length; j++) {
      var invSum = -(nums[i] + nums[j]);
      if (nums.includes(invSum)) {
        var ans = [nums[i], nums[j], invSum];
        ans = ans.sort(function(a, b) {return a- b});
        result.add(ans);
      }
    }
  }

  return result
}

var test = [-1,0,1,2,-1,-4]

//console.log(threeSum(test));