// Input - two strings (secret and guess)
// Output - 1 string (hint code)
// Constraints - 1 < secret.length and guess.length < 1000, secret.length === guess.length, digits only
// Edge Cases - secret === guess, 1 letter strings, repeating characters

// data structures
//  Linked Lists -NA
//  stacks and queues - NA
//  trees and graphs - NA
//  Sets - NA (will be duplicates)
//  Hashes and maps - use it to track guessTracker
//  Heaps - NA
//  Arrays - only need arrays
//  Time Complexity - O(N)
//  Space Complexity - ?
var getHint = function(secret, guess) {
  //  init cowCount
  //  init BullCount
  //  init secretTracker
  //  init guessTracker
  //  iterate through secret and guess
  //    if secret[i] === guess[i]
  //      bullCount++
  //    else
  //      put into secretTracker where key = number and value = # of times it showed up
  //  iterate through guess
  //    if (guess[i] is in secretTracker)
  //      if (secretTracker[guess[i]] > 0)
  //        cowCount++;
  //      secretTracker[guess[i]]--;
  //  return bullCount + A + cowCount + B

  let cowCount = 0;
  let bullCount = 0;
  let secretTracker = {};
  let guessTracker = [];

  for (var i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bullCount++;
    } else {
      var current = secret[i];
      var keys = Object.keys(secretTracker);
      guessTracker.push(guess[i]);
      if (keys.includes(current)) {
        secretTracker[current]++;
      } else {
        secretTracker[current] = 1;
      }
    }
  }

  for (var i = 0; i < guessTracker.length; i++) {
    var currentGuess = guessTracker[i];
    var keys = Object.keys(secretTracker);
    if (keys.includes(currentGuess)) {
      if (secretTracker[currentGuess] > 0) {
        cowCount++;
      }
      secretTracker[currentGuess]--;
    }
  }

  return bullCount + 'A' + cowCount + 'B';
}

var guess = '1123';
var secret = '0111';

console.log(getHint(secret, guess));
