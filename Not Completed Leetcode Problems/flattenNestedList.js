var result = [];

var nestedIterator = function(nestedList) {
  while (nestedList.length !== 0) {
    var current = nestedList.shift();
    if (!Array.isArray(current)) {
      result.push(current);
    } else {
      nestedIterator(current);
    }
  }

}

var test = [1,[4,[6]]];
nestedIterator(test);

console.log(result);
