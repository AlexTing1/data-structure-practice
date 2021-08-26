var countPrimes = function(n) {
  var compositeTracker = {};
  var count = 0;
  if (n === 0 || n === 1) {
    return 0;
  }

  for (var i = 2; i < n; i++) {
    if (compositeTracker[i] === undefined) {
      if (isPrime(i)) {
        count++;
        for (var j = i; j <= n; j = j + j) {
          compositeTracker[j] = 1;
        }
      }
    }
  }
  return count;
};

var isPrime = function(n) {
  for (var i = 2; i < n/2; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(countPrimes(10));