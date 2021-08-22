var singleNumber = function(nums) {
  var result = nums[0];

  for (var i = 1; i < nums.length; i++) {
    result  = result ^ nums[i];
  }

  return result;

}

var test = [0,1,0,1,0,1,99];

//console.log(3^2)
console.log(singleNumber(test));
