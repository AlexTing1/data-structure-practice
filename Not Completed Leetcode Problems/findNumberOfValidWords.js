var findNumOfValidWords = function(words, puzzles) {
  //  convert each puzzles[i] to form [firstLetter, {}]
  //  iterate words
  //    init isFirstIn
  //    iterate word in words
  //      if one letter isnt in puzzle
  //        return false
  //     if !isFirstIn
  //        return false
  //  return true

  var trackerArray = [];

  for (var i = 0; i < puzzles.length; i++) {
    var currentWord = puzzles[i];
    var wordHeap = new Set(currentWord.split(''));
    /* for (var j = 0; j < currentWord.length; j++) {
      var currentLetter = currentWord[j];
      wordHeap.add(currentLetter);
      if (wordHeap.size === 26) {
        break;
      }
    } */

    trackerArray.push([currentWord[0], wordHeap])
  }

  debugger;

  var wordArray = [];

  for (var i = 0; i < words.length; i++) {
    var currentWord = words[i];
    var wordSet = new Set(currentWord.split(''));
    /* for (var j = 0; j < currentWord.length; j++) {
      wordSet.add(currentWord[j])
      if (wordSet.size === 26) {
        break;
      }
    } */
    wordArray.push(wordSet);
  }

  debugger;

  //var result = new Array(puzzles.length).fill(0);
  var result = [];

  for (var i = 0; i < trackerArray.length; i++) {
    debugger;
    var count = 0;
    var currentPuzzleHeap = trackerArray[i][1];
    var firstPuzzleLetter = trackerArray[i][0];
    for (var j = 0; j < wordArray.length; j++) {
      var currentWordSet = wordArray[j];
      if (!currentWordSet.has(firstPuzzleLetter)) {
        continue;
      }

      if (helper(currentWordSet, currentPuzzleHeap)) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
};

var helper = function(wordSet, puzzleSet) {
  for (var letter of wordSet) {
    if (!puzzleSet.has(letter)) {
      return false
    }
  }
  return true;
}
var words = ["apple","pleas","please"];
var puzzles = ["aelwxyz","aelpxyz","aelpsxy","saelpxy","xaelpsy"];

console.log(findNumOfValidWords(words, puzzles));