function getByClassName(root, className) {
	// todo
  var result = [];

  function helper(node) {
    debugger;
    if (node.className === className) {
      result.push(node);
    }

    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      helper(child);
    }
  }

  helper(root);
  return result;
}

function getByClassNameBFS(root, className) {
  //todo
  var result = [];
  var queue = [root];

  while (queue.length !== 0) {
    var currentNode = queue.shift();
    if (currentNode.className === className) {
      result.push(currentNode);
    }

    for (var i = 0; i < currentNode.children.length; i++) {
      var child = currentNode.children[i];
      queue.push(child);
    }
  }

  return result;
}

const { JSDOM } = require("jsdom");
const { document } = new JSDOM(`
  <div class='a' id="root">
    <div class='b' id='b-1'>
      <div class='a' id='a-2'>
        <div class='d' id='d-1'></div>
      </div>
      <div class='c' id='c-1'>
        <div class='a' id='a-3'>
          <div class='d' id='d-2'></div>
        </div>
      </div>
    </div>
  </div>
`).window;
const getIds = (elements=[]) => Array.from(elements).map(x => x.id);
const root = document.getElementById('root');
console.log('actual:  ', getIds(getByClassNameBFS(root, 'a')));
console.log('expected:' , `[ 'root', 'a-2', 'a-3' ]`);

console.log('actual:  ', getIds(getByClassNameBFS(root, 'b')));
console.log('expected:' , `['b-1']`);

console.log('actual:  ', getIds(getByClassNameBFS(root, 'c')));
console.log('expected:' , `['c-1']`);

console.log('actual:  ', getIds(getByClassNameBFS(root, 'd')));
console.log('expected:' , `['d-1', 'd-2']`);