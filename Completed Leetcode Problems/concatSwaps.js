var concatSwaps = function(str, sizes) {
  var result = [];
  var lastSize = 0;
  for (var i = 0; i < sizes.length; i++) {
    result.push(str.slice(lastSize, lastSize + sizes[i]));
    lastSize += sizes[i];
    //console.log(str);
  }

  var current;
  var next;
  var ans = "";
  for (var j = 0; j < result.length - 1; j = j + 2) {
    current = result[j];
    next = result[j + 1];
    ans += next + current
  }

  if (result.length % 2 === 1) {
    ans += result[result.length - 1];
  }
  return ans;
}

console.log(concatSwaps("descognail", [3, 2, 3, 1, 1]));
