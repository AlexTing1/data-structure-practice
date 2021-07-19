//70. Climbing Stairs. Use record to record previose entries to speed up process.
//NOT COMPLETE

var climbStairs = function(n) {
  const cmb = climb();
  return cmb(n);
}

var climb = function(n) {
  let record = {};

  return function climbFaster(n) {
    if (n in record) {
      return record[n];
    } else {

      if (n === 1) {
        return 1;
      }

      if (n > 1 && n < 4) {
        return n;
      } else {
        record[n] = climbFaster(n - 2) + climbFaster(n - 1)
        return record[n]
      }
    }
  }
}

console.log(climbStairs(44));