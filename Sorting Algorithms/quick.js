var quick = function(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quick(left).concat(pivot).concat(quick(right));

}

/* const test1 = [1, 3 , 2, 6, 5, 4];


console.log(quick(test1)); */

exports.quick = quick;