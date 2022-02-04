var maxSlidingWindow = function(nums, k) {
  var window = nums.slice(0, k);
  var max = Math.max(...window);
  var result = [max];
  var dict = {};

  for (var i = 0; i < window.length; i++) {
    var current = window[i];
    if (dict[current] === undefined) {
      dict[current] = 1;
    } else {
      dict[current]++;
    }
  }

  for (var i = 0; i + k < nums.length; i++) {
    var start = nums[i];
    var current = nums[i + k];

    //update dictionary

    //remove start

    if (dict[start] === 1) {
      delete dict[start];
    } else {
      dict[start]--;
    }


    //add current to dictionary
    if (dict[current] === undefined) {
      dict[current] = 1;
    } else {
      dict[current]++;
    }

    if (start === max && dict[start] === undefined) {
      max = Math.max(...Object.keys(dict));
    }

    if (current < max) {
      result.push(max);
    } else {
      result.push(current);
      max = current;
    }


  }

  return result;
};

var test = [1,3,-1,-3,5,3,6,7];
var test2 = [1, -1];
var k = 3;
var k2 = 1;

console.log(maxSlidingWindow(test2, k2));
