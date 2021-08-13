
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
  var dictionary = ['1', '2', '3', '4', '5', '6', '7' ,'8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'];
  var helper = function(string) {
    if (string === undefined) {
      return;
    }
    if (string.length === 0) {
      count++;
      return;
    }

    var oneDigit = string[0];
    var twoDigit = string[0] + string[1];

    if (dictionary.includes(oneDigit)) {
      helper(string.slice(1))
    }

    if (dictionary.includes(twoDigit)) {
      helper(string.slice(2));
    }

    return;
  }

  helper(s);
  return count;
};

console.log(numDecodings("0"));
