function getByClassName(root, className) {
	// todo
  var result = [];

  var helper = function(node) {
    if (node.className === className) {
      result.push(node);
    }
    //result.push(node);
    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      helper(child);
    }
  }

  helper(root);
  return result;
}

function getByClassNameBFS(root, className) {
  var queue = [root];
  var result = [root];
  while (queue.length !== 0) {
    var node = queue.shift();
    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      queue.push(child);
      if (child.className === className) {
        result.push(child);
      }
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