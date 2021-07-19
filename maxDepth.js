function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

var maxDepth = function(root) {
  var count = 0;
  var depth = 0;
  if (root === null) {
    return 0;
  }
  var helper = function(root, depth) {
    if (root === null) {
      return;
    }

    if (this.left !== null) {
      if (depth + 1> count) {
        count = depth + 1;
      }
      helper(root.left, depth + 1)
    }

    if (this.right !== null) {
      if (depth > count) {
        count = depth + 1;
      }
      helper(root.right, depth + 1)
    }
    return count;
  }

  return helper(root, 0);
}

var minDepth = function(root) {
  var count = Infinity;
  var depth = 0;

  if (root === null) {
    return 0;
  }

  var helper = function(root, depth) {
    if (root.left === null && root.right === null) {
      if (depth < count) {
        count = depth;
      }
    }

    if (root.left !== null) {
      helper(root.left, depth + 1)
    }

    if(root.right !== null) {
      helper(root.right, depth + 1);
    }
    return count;
  }
  return helper(root, 0);
}