var countSubstrings = function(s) {
  var count = s.length;
  debugger;
  for (var i = 1; i < s.length - 1; i++) {
    var current = s.slice(i-1, i + 1);

  }

};

var isPalindrome = function(s) {
  var start = 0;
  var end = s.length - 1;
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

console.log(countSubstrings('fgabacde'));