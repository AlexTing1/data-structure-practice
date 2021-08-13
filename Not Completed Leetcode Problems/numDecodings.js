
var numDecodings = function(s) {
  //  init count
  //  init helper function
  //    if string.lenght === 0
  //      count++
  //    look at first in string
  //      if number does not works
  //        return;
  //      else contiune
  //    look at two string together
  //      if number does not work
  //         return;
  //      else continue

  var count = 0;
  var helper = function(string) {
    if (string.length === 0) {
      count++;
      return;
    }

    var oneDigit = parseInt(string[0]);
    var twoDigit = parseInt(string[0] + string[1]);

  }
};

console.log(parseInt('01'));
