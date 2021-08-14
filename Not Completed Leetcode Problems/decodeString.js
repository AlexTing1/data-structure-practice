//  input - string
//  output - string decoded
//  constraints - 1 <= s.length <= 30, s consists of lowercase English letters, digits, and square brackets '[]', s is guaranteed to be a valid input, All the integers in s are in the range [1, 300].
var decodeString = function(s) {
  //  convert to array format
  var arrayString = [];


  var convertToArray = function(string, currentArray, currentNumString) {
    if (string.length === 0) {
      arrayString.push(currentArray);
      return;
    }

    // while string[i] is a letter or a number
    //  if (letter)
    //    push into currentArray
    //  if number
    //    add to currentNumString

    // if index < string.length
    //  call convertToArray
    // arrayString.push(currentArray)
    // return;
    return currentArray;
  }

  var test1 = convertToArray(s, []);
  debugger;
};

var isNumeric = function(num) {
  return !isNaN(num);
}

var test = "3[a]2[bc]";
var test2 = "3[a2[c]]";

//console.log(test.split(']'));
//console.log(test2.split(']'));

decodeString(test);
