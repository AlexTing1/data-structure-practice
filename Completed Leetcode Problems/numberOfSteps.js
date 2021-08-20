var numberOfSteps = function(num) {
  var count = 0;
  while (num !== 0) {
    debugger;
    count++;
    if (num & 1 > 0) {
      num = num - 1;
      } else {
      num = num >> 1;
      }
    }
  return count;
}

console.log(numberOfSteps(14));