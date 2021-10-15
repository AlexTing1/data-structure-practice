var compress = function(chars) {
  var index = 1;
  var firstLetter = chars[0];
  var indexCount = 0;
  var letterCount = 1;
  var length = chars.length;


  if (chars.length === 1) {
    return chars.length;
  }

  chars.push(firstLetter);
  chars.shift();

  while (indexCount < length - 1) {
    var current = chars[0];
    if (current === firstLetter) {
      letterCount++;
    } else {
      if (letterCount !== 1) {
        //push in letterCount
        var letterCountChars = letterCount.toString();
        for (var i = 0; i < letterCountChars.length; i++) {
          var currentChar = letterCountChars[i];
          chars.push(currentChar);
        }
      }
      //set firstLetter as new firstLetter
      //push in new firstLetter
      firstLetter = current;
      chars.push(current);
      letterCount = 1;
    }

    indexCount++;
    chars.shift();
  }

  if (letterCount !== 1) {
    //push in letterCount
    var letterCountChars = letterCount.toString();
    for (var i = 0; i < letterCountChars.length; i++) {
      var currentChar = letterCountChars[i];
      chars.push(currentChar);
    }
  }
  return chars.length;
};