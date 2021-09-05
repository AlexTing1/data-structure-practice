var wordBreak = function(s, wordDict) {
  var dictObj = {};

  for (var i = 0; i < wordDict.length; i++) {
    var current = wordDict[i];
    var firstLetter = current[0];
    if (dictObj[firstLetter] === undefined) {
      dictObj[firstLetter] = [current];
    } else {
      dictObj[firstLetter].push(current);
    }
  }

  debugger
  var helper = function(word) {
    if (word.length === 0) {
      return true;
    }
    var firstLetter = word[0];
    var wordArray = dictObj[firstLetter];
    if (wordArray === undefined) {
      return false;
    }

    for (var i = 0; i < wordArray.length; i++) {
      var currentWord = wordArray[i];
      if (word.slice(0, currentWord.length) === currentWord) {
        var temp = word.split(currentWord);
        var join = temp.join('');
        if(helper(join)) {
          return true;
        }
      }
    }
    return false;
  }

  return helper(s);
};

var wordDict = ["cats","cat", "dog", "ski"];
var s = 'catskicatcats';

console.log(wordBreak(s, wordDict));

/* var wordBreak = function(s, wordDict) {
  var tempArray = [];
  var updatedWord = s.slice();

  for (var j = 0; j < wordDict.length; j++) {
    debugger;
    var updatedWord = s.slice();
    for (var i = j; i < wordDict.length; i++) {
      var current = wordDict[i];
      tempArray = updatedWord.split(current).sort();
      updatedWord = tempArray.join('');
      if (updatedWord.length === 0) {
        return true;
      }
    }

  }

  return false;
}; */