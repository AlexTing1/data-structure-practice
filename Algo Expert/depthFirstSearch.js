class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.


		var helper = function(node) {
			array.push(node.name);
			for (var i = 0; i < node.children.length; i++) {
				helper(node.children[i]);
			}
		}
		helper(this);
		return array;
  }

}
