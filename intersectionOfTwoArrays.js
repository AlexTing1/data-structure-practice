//350. Intersection of Two Arrays 2
// Complete
var intersect = function(arrayOne, arrayTwo) {
  // arrayTwo is the smaller length.
  let smallerArray = [];
  let biggerArray = [];
  if (arrayTwo.length > arrayOne.length) {
    biggerArray = arrayTwo;
    smallerArray = arrayOne;
  } else {
    biggerArray = arrayOne;
    smallerArray = arrayTwo;
  }

  let trackerObj = {};
  let result = [];
  for (var i = 0; i < biggerArray.length; i++) {
    trackerObj[biggerArray[i]] = trackerObj[biggerArray[i]] + 1 || 1;
  }

  for (var i = 0; i < smallerArray.length; i++) {
    if (trackerObj[smallerArray[i]] !== undefined && trackerObj[smallerArray[i]] > 0) {
      result.push(smallerArray[i]);
      trackerObj[smallerArray[i]]--;
    }
  }

  return result;

}

var test = [4, 9, 5];
var test2 = [9, 4, 9, 8, 4, 5];

console.log(Math.floor(test2.length/2));
