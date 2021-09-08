var reorderLogFiles = function(logs) {
  var letters = [];
  var digits = [];

  for (var i = 0; i < logs.length; i++) {
    var current = logs[i];
    var splitArray = current.split(' ');
    var firstType = splitArray[1];

    if (!isNaN(parseInt(firstType))) {
      digits.push(current);
    } else {
      var temp = [splitArray.slice(1).join(''), current]
      letters.push(temp);
    }
  }

  debugger;

  letters.sort();

  var letterOrdered = [];

  for (var i = 0; i < letters.length; i++) {
    letterOrdered.push(letters[i][1]);
  }

  return letterOrdered.concat(digits);
};

var logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"];
var logs2 = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
var logs3 = ["j mo", "5 m w", "g 07", "o 2 0", "t q h"];
console.log(reorderLogFiles(logs3));
