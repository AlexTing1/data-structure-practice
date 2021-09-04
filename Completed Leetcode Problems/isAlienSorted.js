var isAlienSorted = function(words, order) {
  var alphabet = {};

  for (var i = 0; i < order.length; i++) {
    var current = order[i];
    alphabet[current] = i;
  }
  debugger;
  for (var i = 0; i < words.length - 1; i++) {
    var currentWord = words[i];
    var nextWord = words[i + 1];
    var index = 0;
    while (currentWord[index] === nextWord[index] && currentWord[index] !== undefined) {
      index++;
    }
    if (index < currentWord.length && index >= nextWord.length) {
      return false;
    }
    if (alphabet[nextWord[index]] < alphabet[currentWord[index]]) {
      return false
    }
  }
  return true;
};

console.log(isAlienSorted(["hello","hello"], "abcdefghijklmnopqrstuvwxyz"))