var countBinarySubstrings = function(s) {
  if (s.length <= 1) {
    return 0;
  }

  var lettterComparing = s[0];
  var letterCount = 1;
  var trackerArray = [];
  for (var i = 1; i < s.length; i++) {
    var currentLetter = s[i];
    if (currentLetter === lettterComparing) {
      letterCount++;
    } else {
      trackerArray.push(letterCount);
      lettterComparing = currentLetter;
      letterCount = 1;
    }
  }
  trackerArray.push(letterCount)

  console.log(trackerArray)
  var sum = 0;

  for (var i = 0; i < trackerArray.length - 1; i++) {
    var current = trackerArray[i];
    var next = trackerArray[i + 1];

    sum = sum +  Math.min(current, next);
  }

  return sum;
};


var s = "00110011";

console.log(countBinarySubstrings(s));
//console.log(Math.min(2, 2))
//console.log('1234'.substr(0, 2));
