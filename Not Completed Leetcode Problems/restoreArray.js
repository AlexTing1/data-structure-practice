var restoreArray = function(adjacentPairs) {
  //var result = [];

  var helper = function(adjacentPairs) {
    debugger;
    var temp = [];

    if (adjacentPairs.length <= 1) {
      return adjacentPairs;
    }
    var firstPair = adjacentPairs[0];

    for (var i = 1; i < adjacentPairs.length; i++) {
      var current = adjacentPairs[i];
      if (current[0] === firstPair[firstPair.length - 1]) {
        //firstPair.pop();
        firstPair.push(current[1]);
      } else if (current[1] === firstPair[0]) {
        //firstPair.shift();
        firstPair.unshift(current[0])
      } else if (current[0] === firstPair[0]) {
        firstPair.unshift(current[1]);
      } else if (current[1] === firstPair[firstPair.length - 1]) {
        firstPair.push(current[0]);
      } else {
        temp.push(current);
      }
    }

    temp.unshift(firstPair);
    return helper(temp);
  }

  return helper(adjacentPairs)[0];
}

var test1 = [[2,1],[3,4],[3,2]];
var test2 = [[4,-2],[1,4],[-3,1]];
var test3 =
[[-3,-9],[-5,3],[2,-9],[6,-3],[6,1],[5,3],[8,5],[-5,1],[7,2]];

console.log(restoreArray(test1));
//console.log(restoreArray(test2));
//console.log(restoreArray(test3));