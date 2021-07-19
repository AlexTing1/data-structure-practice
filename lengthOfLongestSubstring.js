var lengthOfLongestSubstring = function(s) {
  if(s.length === 1) {
    return 1;
  }
  let trackerObj = {};
  let maxString = '';
  for (var i = 0; i < s.length; i++) {
    for (var j = i + 1; j < s.length; j++) {
      let current = s.substring(i, j);
      if (!isInTracker([i, j], trackerObj)) {
        //debugger;
        if (checkLetterDuplicates(current)) {
          //if there is a duplicate, then push [i,j] into trackerObj
          let newDuplicateCoord = [i, j];
          trackerObj[newDuplicateCoord] = 1;
        } else {
          //if current.length > maxString.length, then maxString = current
          if (current.length > maxString.length) {
            maxString = current;
          }
        }
      }

    }
  }
  //debugger;
  if (Object.keys(trackerObj).length === 0) {
    return s.length;
  }

  return maxString.length;
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

console.log(lengthOfLongestSubstring('au'));

exports.checkLetterDuplicates = checkLetterDuplicates;
exports.isInTracker = isInTracker;
exports.lengthOfLongestSubstring = lengthOfLongestSubstring;