//  INPUT - words, maxWidth
//  OUTPUT - result array
//  CONSTRAINTS - words.length will be less than maxWidth
//  EDGE CASES - empty words array
var fullJustify = function(words, maxWidth) {
  // init result
  // init current
  // iterate through words array
  //  if !current will not exceed maxWidth
  //    add current + ' ' to result
  //  else
  //    go back and add spaces (make note of if i + 1 === words.length. Use left justify if it is.)
  //    push current into result
  //    reset current
  //  return result
  let result = [];
  let currentPhrase = '';
  for (var i = 0; i < words.length; i++) {
    //debugger;
    let currentWord = words[i];
    let temp = currentPhrase + currentWord + ' ';
    if (temp.length === maxWidth + 1) {
      // no need to add additional spaces
      // remove last space in the end

      currentPhrase = temp.slice(0, temp.length - 1);
      result.push(currentPhrase);
      currentPhrase = '';
    } else if (temp.length < maxWidth + 1) {
      currentPhrase = currentPhrase + currentWord + ' ';
    } else {
      //exceeds limit
      currentPhrase = currentPhrase.slice(0, currentPhrase.length - 1);
      //add Spaces
      currentPhrase = addSpaces(currentPhrase, maxWidth - currentPhrase.length);
      result.push(currentPhrase);
      currentPhrase = currentWord + ' ';
    }
  }
  debugger;
  if (currentPhrase.length !== 0) {
    currentPhrase = addSpacesLast(currentPhrase.slice(0, currentPhrase.length - 1), maxWidth - currentPhrase.slice(0, currentPhrase.length - 1).length);
    result.push(currentPhrase);
  }
  //addSpacesLast
  return result;
};

var addSpaces = function(currentPhrase, spaceCount) {
  var wordSplit = currentPhrase.split(' ');
  var numberSpaceToFill = wordSplit.length - 1 || 1;
  var spaceArray = new Array(numberSpaceToFill).fill(' ');
  if (wordSplit.length === 1) {
    spaceArray =[''];
  }
  var currentPos = 0;
  var result = '';
  //debugger;
  for (var i = 0; i < spaceCount; i++) {
    spaceArray[currentPos] = spaceArray[currentPos] + ' ';
    if (currentPos + 1 === spaceArray.length) {
      currentPos = 0;
    } else {
      currentPos++;
    }
  }
  //debugger;
  for (var i = 0; i < spaceArray.length; i++) {
    var result = result + wordSplit[i] + spaceArray[i];
  }

  if (wordSplit.length > spaceArray.length) {
    result = result + wordSplit[wordSplit.length - 1];
  }

  return result;
}

var addSpacesLast = function(currentPhrase, spaceCount) {
  for (var i = 0; i < spaceCount; i++) {
    currentPhrase += ' ';
  }
  return currentPhrase;
}

var testWords = ["Here","is","an","example","of","text","justification."];
var maxWidth = 14;

console.log(fullJustify(testWords, maxWidth));


/* ["Science  is  what we","understand      well","enough to explain","a  computer.  Art is","everything  else  we","do                  "]

["Science  is  what we","understand      well","enough to explain to","a  computer.  Art is","everything  else  we","do                  "]
This

'      ' */