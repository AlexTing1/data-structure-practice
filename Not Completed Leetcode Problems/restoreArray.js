var restoreArray = function(adjacentPairs) {
  //var result = [];

  var helper = function(adjacentPairs) {
    debugger;


    if (adjacentPairs.length <= 1) {
      return adjacentPairs;
    }
    var temp = [adjacentPairs[0]];

    for (var i = 1; i < adjacentPairs.length; i++) {
      var current = adjacentPairs[i];
      var temp2 = [];
      for (var j = 0; j < temp.length; j++) {
        var checkCurrent = temp[j];
        if (current[0] === checkCurrent[checkCurrent.length - 1]) {
          checkCurrent.push(current[1]);
          break;
        } else if (current[1] === checkCurrent[checkCurrent.length - 1]) {
          checkCurrent.push(current[1]);
          break;
        } else if (current[0] === checkCurrent[0]) {
          checkCurrent.unshift(current[1]);
          break;
        } else if (current[1] === checkCurrent[0]) {
          checkCurrent.unshift(current[0]);
          break;
        } else {
          temp2.push(current)
        }
      }
      temp = temp.concat(temp2);
    }
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