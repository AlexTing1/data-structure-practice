var maxArea = function(h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.unshift(0);
  //debugger;
  horizontalCuts.push(h);
  verticalCuts.unshift(0);
  verticalCuts.push(w);

  var maxVertical = 0;
  var maxHorizontal = 0;

  for (var i = 0; i < verticalCuts.length - 1; i++) {
    var difference = verticalCuts[i + 1] - verticalCuts[i];
    if (difference > maxVertical) {
      maxVertical = difference;
    }
  }

  for (var i = 0; i < horizontalCuts.length - 1; i++) {
    var difference = horizontalCuts[i + 1] - horizontalCuts[i];
    if (difference > maxHorizontal) {
      maxHorizontal = difference;
    }
  }

  return (BigInt(maxHorizontal) * BigInt(maxVertical)) % 1000000007n;
};

console.log(maxArea(5, 4, [1,2,4], [1,3]));