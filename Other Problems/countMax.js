var countMax = function(upRight) {
  var leftMin = Infinity;
  var rightMin = Infinity;

  for (var i = 0; i < upRight.length; i++) {
    var current = upRight[i];
    var currentArray = current.split(' ');
    var currentLeft = currentArray[0];
    var currentRight = currentArray[1];
    if (parseInt(currentLeft) < leftMin) {
      leftMin = currentLeft;
    }

    if (parseInt(currentRight) < rightMin) {
      rightMin = currentRight;
    }
  }

  return rightMin * leftMin;
}

var test = ['3 2', '2 2', '1 3'];

console.log(countMax(test));