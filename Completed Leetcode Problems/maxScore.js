//  Inputs - cardPoints Array, k
//  Outputs - max points
//  Contraints - 1 <= cardPoints.length <= 105, 1 <= cardPoints[i] <= 104, 1 <= k <= cardPoints.length
//  Edge - cardPoints.length === k, start === end
var maxScore = function(cardPoints, k) {
  //  if k === cardPoints.length
  //    return totalSum of array
  //  init max
  //  init firstHalfCount
  //  init secondHalfCount
  //  init sum
  //  check base case where firstHalfCount = k and secondHalfCount = 0
  //  while secondHalfCount < k
  //    sum = sum - cardPoints[firstHalfCount] + cardPoints.slice(-secondHalfCount)
  //    if sum > max
  //      max = sum
  //  return max
  if (cardPoints.length === k) {
    var total = 0;
    for (var i = 0; i < cardPoints.length; i++) {
      total += cardPoints[i];
    }
    return total;
  }

  var max = 0;
  var firstHalfCount = k;
  var secondHalfCount = 1;
  var sum = 0;

  for (var i = 0; i < firstHalfCount; i++) {
    sum += cardPoints[i];
  }

  if (sum > max) {
    max = sum;
  }

  firstHalfCount--;
  //debugger;
  while (secondHalfCount <= k) {
    sum = sum - cardPoints[firstHalfCount] + cardPoints[cardPoints.length - secondHalfCount];
    if (sum > max) {
      max = sum;
    }

    firstHalfCount--;
    secondHalfCount++;
  }

  return max;
}

var test1Card = [1,2,3,4,5,6,1];
var test1k = 3;

var test2Card = [2, 2, 2];
var test2k = 2

console.log(maxScore(test2Card, test2k));
