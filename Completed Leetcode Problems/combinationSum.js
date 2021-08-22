var combinationSum = function(candidates, target) {
  //  init result
  //  init helper function
  var result = [];

  var helper = function(currentSum, currentArray, candidates) {
    if (currentSum > target) {
      return;
    }

    if (target === currentSum) {
      result.push(currentArray);
      return;
    }

    for (var i = candidates.length - 1; i >= 0; i--) {
      var current = candidates[i];
      if (currentSum + current <= target) {
        currentArray.push(current);
        helper(currentSum + current, currentArray.slice(0), candidates.slice(0, i + 1));
        currentArray.pop();
      }

    }
  }

  helper(0, [], candidates);
  return result;
};

var candidates = [1, 2, 3, 5];
var target = 8;

console.log(combinationSum(candidates, target));
