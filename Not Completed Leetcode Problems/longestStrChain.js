//  Inputs - words array
//  Outputs - integer of length of longest word chain
//  Constraints - 1 <= words.length <= 1000, 1 <= words[i].length <= 16, words[i] only consists of lowercase English letters.
//  Edge Cases - no words work, words.length === 1, really larges cases
var longestStrChain = function(words) {
  //  take words and create trackerObj in format { word.length: [words with that length] }
  //  use recursion and tree search to check for cases. Dont look for cases already checked.

  if (words.length === 1) {
    return 1;
  }

  var traversalObj = {};

  for (var i = 0; i < words.length; i++) {
    var currentWord = words[i];
    if (traversalObj[currentWord.length] === undefined) {
      traversalObj[currentWord.length] = [currentWord];
    } else {
      traversalObj[currentWord.length].push(currentWord);
    }
  }

  debugger;

  var trackerObj = {};

  var helper = function(word, count) {
    //base case:
    //  if word in trackerObj
    //  if word at end

    //recursive case:
    //
  }

  //str1 is shorter string, str2 is longer str
  var checkStr = function(str1, str2, letter) {
    if (letter + str1 === str2 || str1 + letter === str2) {
      return true
    }

    for (var i = 0; i < str1.length; i++) {

    }
  }
};

var test = ["a","b","ba","bca","bda","bdca"];

var testObj = {};

var testSet = new Set();

console.log(longestStrChain(test));