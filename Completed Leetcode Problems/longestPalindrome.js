//NOT COMPLETE
let longestPalindrome = function(str) {
  if (str.length === 0) {
    return "";
  }

  if (str.length === 1) {
    return str;
  }

  if (isPalindrome(str)) {
    return str;
  };

  var result = "";

  //test for odd palindrome
  for (var i = 0; i < str.length; i++) {
    var baseStr = str[i];
    var upper = i + 1;
    var lower = i - 1;
    //debugger;
    while (isPalindrome(baseStr) && lower >= 0 && upper < str.length) {
      if (baseStr.length > result.length) {
        result = baseStr;
      }
      baseStr = str[lower] + baseStr + str[upper];
      if (isPalindrome(baseStr) && baseStr.length > result.length) {
        result = baseStr;
      }
      upper++;
      lower--;
    }
  }
  //debugger;
  if (result.length === str.length) {
    return result;
  }
  //test for even palindrome
  for (var i = 0; i < str.length - 1; i++) {
    var baseStr = str[i] + str[i + 1];
    if (isPalindrome(baseStr) && baseStr.length > result.length) {
      result = baseStr;
    };
    var upper = i + 2;
    var lower = i - 1;
    while (isPalindrome(baseStr) && lower >=0 && upper < str.length) {
      if (baseStr.length > result.length) {
        result = baseStr;
      }
      baseStr = str[lower] + baseStr + str[upper];
      if (isPalindrome(baseStr) && baseStr.length > result.length) {
        result = baseStr;
      }
      lower--;
      upper++;
    }
  }

  if (result === "") {
    return str[0];
  };

  return result;
}

let isPalindrome = function(str) {
  var firstHalf = str.slice(0, str.length/2);
  var secondHalf = '';
  if (str.length % 2 === 0) {
    secondHalf = str.slice(str.length/2).split("").reverse().join("");
  } else {
    secondHalf = str.slice(str.length/2 + 1).split("").reverse().join("");
  }
  return firstHalf === secondHalf
}

/* console.log(longestPalindrome('ccc')); */
exports.isPalindrome = isPalindrome;
exports.longestPalindrome = longestPalindrome;

