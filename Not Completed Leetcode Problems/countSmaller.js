// Input - nums array
// Output - nums result
// Constraints - 1 <= nums.length <= 10^5, -10^4 <= nums[i] <= 10^4
// Edge Cases - same variables, nums.length === 1, very large nums,
var countSmaller = function(nums) {
  //  init result
  //  init trackerObj where first entry is last in Nums: 0
  //  iterate backwards
  //    init keys of trackerObj
  //    init tempArray
  //    iterate keys
  //      if key < current
  //        push into tempArray
  //      else if key > current
  //        iterate through trackerObj[key]
  //          push in values that are < current
  //        break
  //     set trackerObj[key] = tempArray
  //     result.push(tempArray.length)
  //  return result

  var result = [0];
  var trackerObj = {};
  trackerObj[nums[nums.length - 1]] = 0;
  var orderInputs = [nums[nums.length - 1]];
  for (var i = nums.length - 2; i >= 0; i--) {
    debugger;
    var keys = Object.keys(trackerObj);
    var currentNum = nums[i];
    var smallerElements = [];
    for (var j = orderInputs.length - 1; j >= 0; j--) {
      var currentKey = orderInputs[j];
      if (currentKey < nums[i]) {
        smallerElements.push(currentKey);
      }

      if (currentKey > nums[i]) {
        var keyValues = trackerObj[currentKey];
        for (var k = 0; k < keyValues.length; k++) {
          if (keyValues[k] < currentNum) {
            smallerElements.push(keyValues[k]);
          }
        }
        break;
      }

    }
    trackerObj[currentNum] = smallerElements;
    orderInputs.push(currentNum);
    result.unshift(smallerElements.length);
  }
  return result;
};

var testObj = {
  1: 30,
  2: 14,
  4: 6,
  7: 324,
}

testObj[3] = 1;
// console.log([4, 2, 3, 9,6 ,5, 7, 3, 2 ].sort(function(a, b) {return b - a}))
//console.log(Object.keys(testObj));

var test = [-1, -1]
console.log(countSmaller(test))