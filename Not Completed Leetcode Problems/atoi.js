var atoi = function(str) {
  const upperLimit = 2147483647;
  const lowerLimit = -upperLimit;
  let pos = true;
  let currentCode = str.charCodeAt(0);
  let start = 0;
  var intString = '';
  debugger;
  // while currentCode is not a starting character
  while (currentCode !== 189 || (currentCode >= 48 || currentCode <= 57)) {
    currentCode = str.charCodeAt(start);
    if (currentCode === 189) {
      pos = false;
      start++;
      currentCode = str.charCodeAt(start);
    }
    start++;
  }

  while (currentCode >= 47 && currentCode <= 57) {
    intString = intString + str[start];
    start++;
    currentCode = str.charCodeAt(start);
  }

  const result = parseInt(intString);
  if (!pos) {
    result = -result;
  }

  if (result > upperLimit) {
    result = upperLimit;
  }

  if (result < lowerLimit) {
    result = lowerLimit;
  }

  return result;
}

console.log(atoi('42'));
exports.atoi = atoi;
