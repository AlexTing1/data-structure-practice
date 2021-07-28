var atoi = function(str) {
  const upperLimit = 2147483648;
  const lowerLimit = -upperLimit;
  let pos = true;
  let currentCode = str.charCodeAt(0);
  let start = 0;
  var intString = '';
  //debugger;
  if (currentCode !== 32 && (currentCode < 48 || currentCode > 57) && currentCode !== 45 && currentCode !== 43) {
    return 0;
  }
  // first find starting point
  // if starting point is negative, move start up
  // while is number, at that to stringInt, then convert it to int
  // if there is negative convert it to negative

  //debugger;
  while (currentCode === 32) {
    start++;
    currentCode = str.charCodeAt(start);
  }
  //debugger
  if (currentCode === 45 || currentCode === 43) {
    if (currentCode === 45) {
      pos = false;
    }
    start++;
    currentCode = str.charCodeAt(start);
  }


  //debugger;
  while (currentCode >= 48 && currentCode <= 57) {
    intString = intString + str[start];
    start++;
    currentCode = str.charCodeAt(start);
  }
  if (intString.length === 0) {
    return 0;
  }
  let result = parseInt(intString);

  if (!pos) {
    result = result * -1;
  }

  if (result > upperLimit) {
    result = upperLimit;
  }

  if (result < lowerLimit) {
    result = lowerLimit;
  }

  return result;
}

console.log(atoi('+1'));
exports.atoi = atoi;
