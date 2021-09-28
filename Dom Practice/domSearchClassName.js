const { JSDOM } = require("jsdom");
const { document: document2 } = new JSDOM(`
<div class="a" id="a-1">
    <div class="b" id="b-1">
        <div class="c" id="c-1">
        </div>
        <div class="c" id="c-2">
        </div>
    </div>
    <div class="c" id="c-3">
    </div>
</div>
`).window;

function getByClassnameHierarchy(root, classNames) {
  //todo
  var path = classNames.split('>');
  var result = [];
  var currentPath = [root.className];

  function helper(node, currentPath) {
    if ((path.length === 1 && path[0] === node.className) || checkPath(path, currentPath)) {
      result.push(node);
    }

    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      currentPath.push(child.className);
      helper(child, currentPath);
      currentPath.pop();
    }
  }

  helper(root, currentPath);
  return result;
}

function checkPath(map, currentPath) {
  for (var i = 0; i < currentPath.length; i++) {
    var current = currentPath[i];
    if (current === map[0]) {
      if (checkPath2(map, currentPath.slice(i))) {
        return true;
      }
    }
  }
  return false;
}

function checkPath2(map, currentPath) {
  return JSON.stringify(map) === JSON.stringify(currentPath);
}

const getIds = (elements=[]) => Array.from(elements).map(x => x.id);
const root2 = document2.getElementById('a-1');

console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'a>b')));
console.log(`a>b expected:` , `['b-1']`, '\n');

// order matters!:
console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'b>a')));
console.log(`b>a expected:` , `[]`, '\n');

// must be direct descendants:
console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'a>c')));
console.log(`a>c expected:` , `[c-3]`, '\n');

// the number of classes in the string doesn't matter:
console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'a>b>c')));
console.log(`a>b>c expected:` , `['c-1', 'c-2']`, '\n');

console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'b>c')));
console.log(`b>c expected:` , `['c-1', 'c-2']`, '\n');

console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'c')));
console.log(`c expected:` , `['c-1', 'c-2', 'c-3']`, '\n');