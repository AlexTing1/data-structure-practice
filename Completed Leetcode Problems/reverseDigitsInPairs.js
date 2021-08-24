var reverseDigitsInPairs = function(input) {
  var inputStr = input.toString();
  var result = "";
  var current;
  var next;
  for (var i = 0; i < inputStr.length - 1; i = i + 2) {
    current = inputStr[i];
    next = inputStr[i + 1];
    result = result + next + current;
  }

  if (inputStr.length % 2 === 1) {
    result += inputStr[inputStr.length - 1];
  }
  return result;
}

console.log(reverseDigitsInPairs(1234567892));
console.log(reverseDigitsInPairs(123456789));
console.log(reverseDigitsInPairs(1));
console.log(reverseDigitsInPairs(12));