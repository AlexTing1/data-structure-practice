function nodeDepths(root) {
  // Write your code here.
	var depthSum = 0;
	var depth = 0;
	var helper = function(root, depth) {
		if (root === null) {
			return;
		}
		depthSum = depthSum + depth;
		helper(root.right, depth + 1);
		helper(root.left, depth + 1);
	}
	helper(root, depth);
	return depthSum;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}