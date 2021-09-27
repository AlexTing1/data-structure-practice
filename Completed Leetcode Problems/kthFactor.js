var kthFactor = function(n, k) {
  //get all factors sorted
  var factors = [];
  for (var i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors.push(i);
      if (n/i !== i) {
        factors.push(n/i);
      }

    }
  }
  if (n === 1) {
    factors = [1];
  }
  factors = factors.sort((a, b) => a - b);
  if (k - 1 < factors.length) {
    return factors[k - 1];
  } else {
    return -1;
  }
};

