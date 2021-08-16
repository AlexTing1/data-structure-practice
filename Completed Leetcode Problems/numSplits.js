var numSplits = function(s) {
  //  init count
  //  iterate s
  //    create first half and second half of s tracker Objects in format{ letter: letterCount }
  //    move latest letter from second half to first half
  //    secondHalf[letter]--
  //    add to firstHalf
  //    if (secondHalf[letter] === 0)
  //      delete secondHalf[letter]
  //    compare keys.length
  //      if keys.length === each other
  //        count++
  //  return count
  var count = 0;
  var firstHalf = {};
  firstHalf[s[0]] = 1;
  var secondHalf = {};

  for (var i = 1; i < s.length; i++) {
    if (secondHalf[s[i]] === undefined) {
      secondHalf[s[i]] = 1;
    } else {
      secondHalf[s[i]]++;
    }
  }

  debugger;
  if (Object.keys(firstHalf).length === Object.keys(secondHalf).length) {
    count++;
  }

  for (var i = 1; i < s.length; i++) {
    var currentLetter = s[i];
    if (firstHalf[currentLetter] === undefined) {
      firstHalf[currentLetter] = 1;
    } else {
      firstHalf[currentLetter]++;
    }
    secondHalf[currentLetter]--;
    if (secondHalf[currentLetter] === 0) {
      delete secondHalf[currentLetter];
    }

    if (Object.keys(firstHalf).length === Object.keys(secondHalf).length) {
      count++;
    }

  }
  return count;
};


var test = "acbadbaada";
console.log(numSplits(test));
/* var testObj = {
  a: 4,
  b:3,
  c:2,
}

//console.log(testObj);

delete testObj.a;

console.log(Object.keys(testObj)); */