const lengthOfLongestSubstring = function(s) {
  let longestStr = '';
  let currentStr = '';

  for(let i = 0; i < s.length; i++) {
    let letter = s[i];
    let index = currentStr.indexOf(letter);
    debugger;
    if(index > -1) {
      if(currentStr.length > longestStr.length) longestStr = currentStr;
      currentStr = currentStr.slice(index + 1) + letter;
    }
    else {
      currentStr += letter;
    }
  }
  if(currentStr.length > longestStr.length) longestStr = currentStr;
  return longestStr.length;
}

var checkLetterDuplicates = function(string) {
  for (var i = 0; i < string.length; i++) {
    let currentLetter = string[i];
    let stringWithoutLetter = string.slice(0, i) + string.slice(i + 1);
    if (stringWithoutLetter.includes(currentLetter)) {
      return true;
    }
  }
  return false;
}

var isInTracker = function(array, trackerObj) {
  let values = Object.values(trackerObj);
  for (var i = 0; i < values.length; i++) {
    let current = values[i];
    if (current[0] >= array[0] && current[1] <= array[1]) {
      return true;
    }
  }
  return false;
}

/* checkLetterDuplicates('test');
var testObj = {
  1: [0, 4]
}

isInTracker('abc', testObj); */

/* console.log(lengthOfLongestSubstring('bbaqwer')); */

exports.checkLetterDuplicates = checkLetterDuplicates;
exports.isInTracker = isInTracker;
exports.lengthOfLongestSubstring = lengthOfLongestSubstring;