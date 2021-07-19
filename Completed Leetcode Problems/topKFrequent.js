// 347 SOLVED BUT NEEDS TO OPTIMIZE
var topKFrequent = function(nums, k) {
  // create trackerObj, result array
  // iterate through nums
  //  put all values into trackerObj such that key = nums[i] and value = count of key
  // get top k values using Object.values() and sort() then get last k values
  // iterate keys and push into array correct key-value pair
  // return array

  let trackerObj = {};
  let result = [];
  for (var i = 0; i < nums.length; i++) {
      if (trackerObj[nums[i]] === undefined) {
          trackerObj[nums[i]] = 1;
      } else {
          trackerObj[nums[i]]++;
      }
  }

  console.log(trackerObj);
  let values = Object.values(trackerObj).sort(function(a, b) { return (a - b) });
  let highestValues = values.slice(-k);
  debugger;
  for (var i = 0; i < Object.keys(trackerObj).length; i++) {
      let currentKey = parseInt(Object.keys(trackerObj)[i]);
      if (highestValues.includes(currentKey)) {
          result.push(currentKey);
      }
  }

  return result;
};

//topKFrequent([1,1,1,2,2,3], 2);