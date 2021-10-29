const extractNumbers = function(input) {
  let result = [];
  for (var i = 0; i < input.length; i++) {
    const currentStr = input[i];
    let num = '';
    for (var j = 0; j < currentStr.length; j++) {
      let currentLetter = currentStr[j];
      debugger;
      if (!isNaN(parseInt(currentLetter))) {
        num += currentLetter;
      } else {
        if (num !== '') {
          result.push(parseInt(num));
        }
        num = '';
      }
    }
    if (num !== '') {
      result.push(parseInt(num));
    }
  }
  return result;
}

const test =  ["A2D", "1B", "3F5", "67FE2", "AA"];

console.log(extractNumbers(test));
