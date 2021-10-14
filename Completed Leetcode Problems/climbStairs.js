//70. Climbing Stairs. Use record to record previose entries to speed up process.
//COMPLETE

var climbStairs = function(n) {
  var tracker = new Array(n + 1).fill(0);

  var climb = function(i, n, memo) {
    if (i > n) {
      return 0;
    }

    if (i === n) {
      return 1;
    }

    if (memo[i] > 0) {
      return memo[i];
    }

    memo[i] = climb(i + 1, n, memo) + climb(i + 2, n, memo);
    return memo[i];
  }

  return climb(0, n, tracker);

}

console.log(climbStairs(44));