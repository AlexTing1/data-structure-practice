var licenseKeyFormatting = function(s, k) {
  var string = s.split("-").join("").toUpperCase();
  var remainder = string.length % k;
  var result = [];
  debugger;
  if (remainder !== 0) {
    result.push(string.slice(0, remainder));
  }


  for (var i = remainder; i < string.length; i = i + k) {
    var current = string.slice(i, i + k);
    result.push(current);
  }

  return result.join("-");
}

console.log(licenseKeyFormatting("a0001afds-", 4));
