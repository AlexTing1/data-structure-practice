var bitwiseComplement = function(n) {
  if (n === 0) {
    return 1;
  }
  var result = 0;
  var bit = 1;
  var checker = n;
  while (checker !== 0) {
    //get current
    //add to result
    //shift to next position
    n = n ^ bit;
    bit = bit << 1;
    checker = checker >> 1;
  }

  return n;
}

console.log(bitwiseComplement(5));