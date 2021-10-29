const extractNumbers = function(input) {
  let result = [];
  for (var i = 0; i < input.length; i++) {
    const currentStr = input[i];
    let num = '';
    for (var i = 0; i < currentStr.length; i++) {
      const currentLetter = currentStr[i];
      if (parseInt(currentLetter) !== NaN) {
        num += currentLetter;
      } else {
        result.push(parseInt(num));
        num = '';
      }
    }
  }
  return result;
}

const test =  ["A2D", "1B", "3F5", "67FE2", "AA"];

console.log(extractNumbers(test));
