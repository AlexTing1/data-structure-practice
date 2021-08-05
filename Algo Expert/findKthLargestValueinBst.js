class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  // Write your code here.
  var trackerArray = [];
	var inOrderTraversal = function(tree) {
		if (tree === null) {
			return;
		}

		inOrderTraversal(tree.left);
		trackerArray.push(tree.value);
		inOrderTraversal(tree.right);
	}

	inOrderTraversal(tree);

	return trackerArray[trackerArray.length - k];
}
