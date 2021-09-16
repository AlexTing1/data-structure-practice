var countAndSay = function(n) {
  var start = 0;
  var result = '1';
  if (n === 1) {
    return result;
  }
  var helper = function(string) {
    var newResult = '';
    var letterCount = 1;
    var firstLetter = string[0];
    for (var i = 1; i < string.length; i++) {
      var currentLetter = string[i];
      if (currentLetter === firstLetter) {
        letterCount++;
      } else {
        newResult += letterCount + firstLetter;
        letterCount = 1;
        firstLetter = currentLetter;
      }
    }
    newResult += letterCount + firstLetter;
    console.log(newResult);
    return newResult;
  }

  while (start < n - 1) {
    result = helper(result);
    start++;
  }

  return result;
};

console.log(countAndSay(4));