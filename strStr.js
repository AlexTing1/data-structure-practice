var strStr = function(haystack, needle) {
    if (needle.length === 0 || haystack === needle) {
      return 0;
    }

    for (var i = 0; i < haystack.length; i++) {
      var currentBlock = haystack.substring(i, i + needle.length);
      if (currentBlock === needle) {
        return i;
      }
    }
    return -1;
};

console.log(strStr("abc", "dc"));