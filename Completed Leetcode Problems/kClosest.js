var kClosest = function(points, k) {
  var result = [];
  var tracker = [];

  for (var i = 0; i < points.length; i++) {
    var current = points[i];
    var pythag = Math.sqrt(current[0] ** 2 + current[1] ** 2);
    tracker.push([pythag, current]);
  }

  tracker.sort((a, b) => (a[0] - b[0]));

  for (var i = 0; i < k; i++) {
    var current = tracker[i];
    result.push(current[1]);
  }

  return result;
};

console.log(kClosest([[1,3],[-2,2]], 1));