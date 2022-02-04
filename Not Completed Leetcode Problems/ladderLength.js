 var ladderLength = function(beginWord, endWord, wordList) {
  if (beginWord === endWord) {
    return 0;
  }

  var viableStarters = [];
  var smallest = wordList.length + 1;

  for (var i = 0; i < wordList.length; i++) {
    if (compareWord(wordList[i], beginWord)) {
      viableStarters.push(wordList[i]);
    }
  }

  debugger;
  let failedStarts = {};
  for (var startIndex = 0; startIndex < viableStarters.length; startIndex++) {
    var currentStart = viableStarters[startIndex];
    var queue = [currentStart];
    let count = 2;
    let tracker = {};
    tracker[currentStart] = 1;
    debugger;

    while (queue.length !== 0) {
      var queueLength = queue.length;
      debugger;
      for (var i = 0; i < queueLength; i++) {
        var queueWord = queue.shift();
        if (queueWord === endWord) {
          if (count < smallest) {
            smallest = count;
            break;
          }
        }

        for (var j = 0; j < wordList.length; j++) {
          if (tracker[wordList[j]] === undefined && failedWords[wordList[j]] === undefined && compareWord(queueWord, wordList[j])) {
            queue.push(wordList[j]);
            tracker[wordList[j]] = 1;
          }
        }
      }

      count++;
      /* if (count === wordList.length) {
        return 0;
      } */
    }
    failedStarts[currentStart] = 1;
    debugger;
  }

  if (smallest === wordList.length + 1) {
    return 0;
  }
  return smallest;
};

var compareWord = function(word1, word2) {
  var difCounter = 0;
  for (var i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      difCounter++;
    }

    if (difCounter === 2) {
      return false;
    }
  }

  return true;
}

var test = 'test';

const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot","dot","dog","lot","log", "cog"];

console.log(ladderLength(beginWord, endWord, wordList));
