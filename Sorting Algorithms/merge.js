var merge = function(input) {
  if (input.length <= 1){
    return input;
  }

  var mid = Math.floor(input.length / 2);
  var left = input.slice(0, mid);
  var right = input.slice(mid);

  return mergeHelper(merge(left), merge(right));
}

var mergeHelper = function(left, right) {
  const array = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }

  return array.concat(left.slice()).concat(right.slice())
}

