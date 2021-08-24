var matrixQuery = function(n, m, queries) {
  var rows = fillArray(m);
  var cols = fillArray(n);
  var result = [];
  for (var i = 0; i < queries.length; i++) {
    debugger;
    var current = queries[i];
    if (current[0] === 0) {
      result.push(cols[0] * rows[0]);
    } else if (current[0] === 1) {
      rows = rows.slice(0, current[1] - 1).concat(rows.slice(current[1]));
    } else {
      cols = cols.slice(0, current[1] - 1).concat(cols.slice(current[1]));
    }
  }
  return result;

}

var fillArray = function(n) {
  var result = [];
  for (var i = 1; i <= n; i++) {
    result.push(i);
  }

  return result;
}

console.log(matrixQuery(3, 4, [[0], [1, 2], [0], [2, 1], [0], [1, 1], [0]]))
