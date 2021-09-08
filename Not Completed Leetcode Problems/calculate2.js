var calculate = function(s) {
  var result = 0;
  var stack = [];
  var prevSign = '+';
  var currentNum = '';
  s = s.split(" ").join('');
  for (var i = 0; i <= s.length; i++) {
    var current = s[i];
    if (!isNaN(parseInt(current))) {
      currentNum += current;
    } else {
      if (prevSign === '+') {
        stack.push(parseInt(currentNum))
      }

      if (prevSign === '-') {
        stack.push(parseInt(currentNum) * -1);
      }

      if (prevSign === "*") {
        if (stack.length !== 0) {
          var lastNum = stack.pop();
          result += lastNum * parseInt(currentNum);
        } else {
          result = result * parseInt(currentNum);
        }

      }

      if (prevSign === '/') {
        if (stack.length !== 0) {
          var lastNum = stack.pop();
          var temp = Math.floor(Math.abs(lastNum)/parseInt(currentNum));
          if (lastNum < 0) {
            temp = temp * -1;
          }
          result += temp;

        } else {
          var temp = Math.floor(Math.abs(result) / parseInt(currentNum));
          if (result < 0) {
            temp = temp * -1;
          }
          result = temp;
        }

      }
      prevSign = current;
      currentNum = '';
    }
  }

  for (var i = 0; i < stack.length; i++) {
    result += stack[i];
  }

  return result;
}