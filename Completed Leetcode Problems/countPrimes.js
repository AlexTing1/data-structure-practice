var countPrimes = function(n) {
  var compositeTracker = {};
  var count = 0;
  if (n === 0 || n === 1) {
    return 0;
  }
  var array = [];
  for (var i = 2; i < n; i++) {
    //debugger;
    if (compositeTracker[i] === undefined) {
      count++;
      array.push(i);
      for (var j = i; j <= n; j = j + i) {
        compositeTracker[j] = 1;
      }
    }
  }
  return count;
};

/* var isPrime = function(n) {
  for (var i = 2; i < n/2; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
} */

console.log(countPrimes(10));