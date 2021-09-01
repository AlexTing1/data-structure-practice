var productExceptSelf = function(input) {
  var front = [1];
  var back = [1];
  var result = [];
  var temp = 1;
  for (var i = 0; i < input.length - 1; i++) {
    temp *= input[i];
    front.push(temp);
  }

  var temp = 1;
  debugger;
  for (var i = input.length - 1; i > 0; i--) {
    temp *= input[i];
    back.unshift(temp);
  }
  debugger;
  for (var i = 0; i < front.length; i++) {
    result.push(front[i] * back[i]);
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));