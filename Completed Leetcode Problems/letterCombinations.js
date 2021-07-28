// 17.
var letterCombinations = function(digits) {
  var trackerObj = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };

  if (digits.length === 0) {
    return [];
  }

  if (digits.length === 1) {
    return trackerObj[digits];
  }

  var result = trackerObj[digits[0]];

  for (var i = 1; i < digits.length; i++) {
    var currentDigit = digits[i];
    var currentArray = trackerObj[currentDigit];
    var tempArray = [];

    for (var j = 0; j < currentArray.length; j++) {
      for (var k = 0; k < result.length; k++) {
        var current = result[k] + currentArray[j];
        tempArray.push(current);
      }
    }

    result = tempArray;
  }

  return result;
};

console.log(letterCombinations('2'));
