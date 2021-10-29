var climbStairs2 = function(n) {
  var tracker = new Array(n + 1).fill(0);

  var helper = function(i) {
    if (i > n) {
      return 0;
    }

    if (i === n) {
      return 1;
    }

    if (tracker[i] > 0) {
      return tracker[i];
    }



    tracker[i] = helper(i + 1) + helper(i + 2)
    return tracker[i];
  }

  return helper(0);
};

console.log(climbStairs2(4))