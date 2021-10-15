var isSameAnagram = function(str1, str2) {
  var str1Sort = str1.split('').sort().join('');
  var str2Sort = str2.split('').sort().join('');
  if (str1Sort === str2Sort) {
    return true;
  } else {
    return false;
  }
}

var findAnagrams = function(s, p) {
  var result = [];
  var shortLength = p.length;
  for (var i = 0; i + shortLength < s.length; i++) {
    var current = s.slice(i, i + shortLength);
    if (isSameAnagram(current, p)) {
      result.push(i);
    }
  }

  return result;
};