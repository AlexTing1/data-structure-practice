// 378 Kth Smallest Element in a Sorted Matrix. Top interview questions
// COMPLETE
var kthSmallest = function(matrix, k) {
  let combinedArray = [];
  for (var i = 0; i < matrix.length; i++) {
      const row = matrix[i]
      combinedArray = combinedArray.concat(row);
  }
  combinedArray = combinedArray.sort(function(a, b) {return (a - b)})
  console.log(combinedArray);
  return combinedArray[k - 1];
};

var test = [[1, 2], [1, 3]];
kthSmallest(test, 2);
