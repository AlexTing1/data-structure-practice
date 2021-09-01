var restoreArray = function(adjacentPairs) {
  //var result = [];
  var helper = function(adjacentPairs) {
    var temp = [];

    if (adjacentPairs.length <= 1) {
      return adjacentPairs;
    }
    var firstPair = adjacentPairs[0];

    for (var i = 1; i < adjacentPairs.length; i++) {
      var current = adjacentPairs[i];
      if (current[0] === firstPair[1]) {
        firstPair.pop();
        firstPair.push(current[1]);
      } else if (current[1] === firstPair[0]) {
        firstPair.shift();
        firstPair.unshift(current[0])
      } else {
        temp.push(current);
      }
    }

    temp.unshift(firstPair);
    helper(temp);
  }

  return helper(adjacentPairs);
}

var test1 = [[2,1],[3,4],[3,2]];
var test2 = [[4,-2],[1,4],[-3,1]];
var test3 = [[100000,-100000]];

console.log(restoreArray(test1));
console.log(restoreArray(test2));
console.log(restoreArray(test3));