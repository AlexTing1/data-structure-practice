var findLeastNumOfUniqueInts = function(arr, k) {
  var map = {};

  for (var i = 0; i < arr.length; i++) {
    var current = arr[i];
    if (map[current] === undefined) {
      map[current] = 1;
    } else {
      map[current]++;
    }
  }

  var countArray = Object.values(map);
  countArray = countArray.sort((a, b) => a - b);

  while (k > 0) {
    var current = countArray[0];
    k = k - current;
    if (k >= 0) {
      countArray.shift();
    }

  }

  return countArray.length;
};