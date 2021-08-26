var licenseKeyFormatting = function(s, k) {
  var array = s.split("-").filter(Boolean);
  debugger;
  if (array.length === 1) {
    var current = array[0];
    if (current.length <= k) {
      return current.toUpperCase();
    }
    var singleResult = [];
    for (var i = current.length - k; i >= 0; i= i - k) {
      var sliceCurrent = current.slice(i, i + k);
      singleResult.unshift(sliceCurrent.toUpperCase())
    }
    return singleResult.join("-");
  }
  var index = array.length - 1;
  var result = [];
  while (index >= 0) {
    debugger;
    var current = array[index];
    if (current.length === k) {
      result.unshift(current.toUpperCase());
      index--;
    } else if (current.length > k) {
      result.unshift(current.slice(-k).toUpperCase())
      array[index - 1] += current.slice(0, current.length - k);
      index--;
    } else {
      while (current.length !== k) {
        var next = array[index - 1];
        if (next === undefined) {
          //result.unshift(current.toUpperCase());
          index--;
          break;
        }
        if (next.length + current.length <= k) {
          current = next + current;
          /* if (current.length < k) {
            index--;
          } */
          index--;
        } else {
          var toAdd = next.slice(-(k - current.length));
          current = toAdd + current;
          array[index - 1] = next.slice(0, next.length - toAdd.length);
          //index--;
        }
      }
      result.unshift(current.toUpperCase());
      index--;
    }

  }

  //result.unshift(array[0].toUpperCase());
  debugger;
  return result.join("-");
}

console.log(licenseKeyFormatting("a0001afds-", 4));
