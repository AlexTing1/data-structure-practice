var climbStairs = function(n) {
  var tracker = new Array(n + 1).fill(0);

  var climb = function(i, n , tracker) {
    if (i > n) {
      return 0;
    }

    if (i === n) {
      return 1;
    }

    if (tracker[i] > 0) {
      return tracker[i];
    }

    tracker[i] = climb(i + 1, n, tracker) + climb(i + 2, n, tracker);
    return tracker[n];
  }

  return climb(0, n, tracker);
}