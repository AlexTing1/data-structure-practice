var countSubstrings = function(s) {
  var count = s.length;
  var tracker = {};
  var result = [];
  if (s.length === 1) {
    return 1;
  }
  debugger;
  for (var i = 1; i < s.length; i++) {
    debugger;
    var start = i - 1;
    var end = i + 1;
    var current = s.slice(start, end + 1);
    while (isPalindrome(current) && current.length % 2 === 1) {
      count++;
      tracker[current] = 1;
      result.push(current);
      start = start - 1;
      end = end + 1;
      if (s[start] === undefined || s[end] === undefined) {
        break;
      }
      current = s[start] + current + s[end];
    }
  }

  for (var i = 0; i < s.length - 1; i++) {
    var start = i;
    var next = i + 1;
    var current = s[start] + s[next];
    while (isPalindrome(current) && current.length % 2 === 0) {
      count++;
      tracker[current] = 1;
      result.push(current);
      start = start - 1;
      next = next + 1;
      if (s[start] === undefined || s[next] === undefined) {
        break;
      }
      current = s[start] + current + s[next];

    }
  }
  debugger;
  if (isPalindrome(s) && tracker[s] === undefined) {
    count++;
  }
  return count;
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

console.log(countSubstrings("aaaaaa"));