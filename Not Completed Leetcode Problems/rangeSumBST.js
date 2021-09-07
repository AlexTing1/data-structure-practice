var rangeSumBST = function(root, low, high) {
  var sum = 0;

  var helper = function(currentNode) {
      if (currentNode === null) {
          return;
      }

      if (currentNode.val >= low && currentNode.val <= high) {
          sum += currentNode.val;
      }

      helper(currentNode.left);
      helper(currentNode.right);
  }

  helper(root);
  return sum;
};