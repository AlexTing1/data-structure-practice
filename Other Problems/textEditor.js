function textEditor(queries) {
  var result = '';
  var history = [];
  var copyText = '';

  function insert(text) {
    var lastIndex = result.length - 2;
    result = result + text;
    history.push(['insert', lastIndex]);
  };

  function deleteLast() {
    var last = result[result.length - 1];
    result = result.slice(0, result.length - 1);
    history.push(['delete', last])
  };

  function copy(index) {
    copyText = result.slice(index);
  };

  function paste() {
    var lastIndex = result.length - 2;
    result = result + copyText;
    history.push(['paste', lastIndex]);
  };

  function undo() {
    var lastOperation = history.pop();
    var command = lastOperation[0];
    var value = lastOperation[1];

    if (command === 'insert' || command === 'paste') {
      result = result.slice(0, value);
    } else{
      result = result + value;
    }
  };

  for (var i = 0; i < queries.length; i++) {
    var current = queries[i].split(' ');
    if (current[0] === 'INSERT') {
      insert(current[1])
    } else if (current[0] === 'DELETE') {
      deleteLast();
    } else if (current[0] === 'COPY') {
      copy(current[1]);
    } else if (current[0] === 'PASTE') {
      paste();
    } else {
      if (history.length !== 0) {
        undo()
      }
    }
    console.log(result);
  }
  return result;
}

var operations = ["INSERT Da", "COPY 0", "UNDO", "PASTE", "PASTE", "COPY 2", "PASTE", "PASTE", "DELETE", "INSERT aaam"];

console.log(textEditor(operations));
//console.log(("testing").slice(0, 0));
