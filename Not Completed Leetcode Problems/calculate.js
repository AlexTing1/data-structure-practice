var calculate = function(s) {
  s = s.split(' ').join('');
  var stack = [];
  var result = 0;
  var currentNumber = '';
  var prevSign = '+';
  for (var i = 0; i <= s.length; i++) {
    var current = s[i];
    debugger;
    if (!isNaN(parseInt(current))) {
      currentNumber += current;
    } else {
      var num = Number(currentNumber);
      if (prevSign === '+') {
        stack.push(num);

      }

      if (prevSign === '-') {
        stack.push(-num);

      }

      if (prevSign === '*') {
        stack.push(stack.pop()*num)
      }

      if (prevSign === '/') {
        stack.push(parseInt(stack.pop()/num, 10))
      }

      prevSign = current;
      currentNumber = '';
    }
  }

  debugger;

  while (stack.length !== 0) {
    var num = stack.pop();
    result += parseInt(num);
  }

  return result;
};

var string = "3+2*2"
console.log(calculate(string));