var isPalindrome = function(s) {
  var startIndex = 0;
  var endIndex = s.length - 1;
  while (s[startIndex] === s[endIndex] && startIndex <= endIndex) {
    startIndex++;
    endIndex--;
  }

  return startIndex > endIndex;
}

var validPalindrome = function(s) {
  var startIndex = 0;
  var endIndex = s.length - 1;


  while (s[startIndex] === s[endIndex] && startIndex < endIndex) {
    startIndex++;
    endIndex--;
  }

  if (startIndex > endIndex) {
    return true;
  }

  var testCase1 = s.slice(0, startIndex) + s.slice(startIndex + 1);
  debugger;
  if (isPalindrome(testCase1)) {
    return true;
  }
  var testCase2 = s.slice(0, endIndex) + s.slice(endIndex + 1);
  if (isPalindrome(testCase2)) {
    return true
  }
  return false;

};

console.log(validPalindrome("abca"));
