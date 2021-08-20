var subsets = function(nums) {
  var counter = 0;
  var result = [];
  while (counter !== 2**nums.length) {
    var currentSet = [];
    var mapTracker = counter;
    var index = 0;
    var bit = 1;
    //debugger;
    while (mapTracker !== 0) {
      var current = mapTracker & bit;
      if (current === 1) {
        currentSet.push(nums[index])
      }
      index++;
      //bit = bit << 1;
      mapTracker = mapTracker >> 1;
    }
    result.push(currentSet);
    counter++;
  }
  debugger;
  return result;
}

console.log(subsets([1, 2, 3]))