//NOT COMPLETE
let longestPalindrome = function(str) {


  if (str.length === 1) {
    return true;
  }

  if (str.length > 1 && str.length < 4) {
    if (str[0] === str[str.length - 1]) {
      return true;
    }
    return false;
  }




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

exports.isPalindrome = isPalindrome;
exports.longestPalindrome = longestPalindrome;

