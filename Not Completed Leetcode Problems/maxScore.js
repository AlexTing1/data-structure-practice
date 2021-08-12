//  Inputs - cardPoints Array, k
//  Outputs - max points
//  Contraints - 1 <= cardPoints.length <= 105, 1 <= cardPoints[i] <= 104, 1 <= k <= cardPoints.length
//  Edge - cardPoints.length === k, start === end
var maxScore = function(cardPoints, k) {
  //  if k === cardPoints.length
  //    return totalSum of array
  //  init index array
  //  find sum of every k interval
  //  record largest
  //  return largest

  if (cardPoints.length === k) {
    var total = 0;
    for (var i = 0; i < cardPoints.length; i++) {
      total += cardPoints[i];
    }
    return total;
  }

  var indexArray = cardPoints.slice(-k).concat(cardPoints.slice(0, k));

  for (var i = 0; i + k < indexArray.length; i++) {

  }
  return indexArray;

}

var test1Card = [1,2,3,4,5,6,1];
var test1k = 3;

var test2Card = [2, 2, 2];
var test2k = 2
console.log(maxScore(test1Card, test1k));
