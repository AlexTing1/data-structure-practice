var findBuildings = function(heights) {
  var sorted = heights.slice().sort((a, b) => (a - b));
  var result = [];
  debugger;
  for (var i = 0; i < heights.length - 1; i++) {
    var current = heights[i];
    if (current === sorted[sorted.length - 1]) {
      sorted.pop();
      if (current > sorted[sorted.length - 1]) {
        result.push(i);
      }
    } else {
      var removeIndex = sorted.indexOf(current);
      sorted.splice(removeIndex, 1);
    }
  }
  result.push(heights.length - 1)
  return result;
};

console.log(findBuildings([52,96,58,46,27]))