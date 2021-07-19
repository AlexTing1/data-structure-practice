// 412. FizzBuzz. Top interview Questions
// COMPLETE.
var firstUniqChar = function(s) {
  let trackerObj = {};
  for (var i = 0; i < s.length; i++) {
    trackerObj[s[i]] = i;
  }

  for (var i = 0; i < s.length; i++) {
    if (trackerObj[s[i]] === i) {
      return i
    } else {
      trackerObj[s[i]] = i;
    }
  }
  return -1;
};

let test = "loveleetcode";

console.log(firstUniqChar(test));