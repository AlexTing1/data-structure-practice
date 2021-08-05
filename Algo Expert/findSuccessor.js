class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  // Write your code here.
	var tracker = [];
	function inOrderTraversal(tree, array) {
		if (tree === null) {
			return;
		}

		inOrderTraversal(tree.left, array);
		array.push(tree);
		inOrderTraversal(tree.right, array);
	}

	inOrderTraversal(tree, tracker);

	if (tracker.includes(node)) {
		var index = tracker.indexOf(node);
		return tracker[index + 1];
	} else {
		return null;
	}
}