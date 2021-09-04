var findBuildings = function(heights) {
  var result = [];
  var max = -Infinity;
  for (var i = heights.length - 1; i >= 0; i--) {
    var current = heights[i];
    if (current > max) {
      result.unshift(i);
      max = current;
    }
  }
  return result;
};

console.log(findBuildings([52,96,58,46,27]))