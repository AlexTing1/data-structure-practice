class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
	var result = [];

	var helper = function(root, sum) {
		if (root === null) {
			return;
		}

		if (root.right === null && root.left === null) {
			result.push(sum + root.value);
			return;
		}
		sum = sum + root.value;
		helper(root.left, sum);
		helper(root.right, sum);
	}

	helper(root, 0);
	return result;
}