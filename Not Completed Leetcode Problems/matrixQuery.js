var matrixQuery = function(n, m, queries) {
  var rows = fillArray(m);
  var cols = fillArray(n);
  var result = [];
  for (var i = 0; i < queries.length; i++) {
    var current = queries[i];
    if (current[0] === 0) {
      result.push(cols[0] * rows[0]);
    } else if (current[0] === 1) {
      rows = rows.splice(current[1] - 1, 1);
    } else {
      cols = cols.splice(current[1] - 1, 1);
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

