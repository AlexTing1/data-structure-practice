var isHappy = function(n) {
  var trackerObj = {};

  var helper = function(n) {
    if (n === 1) {
        return true;
    }

    if (trackerObj[n] !== undefined) {
      return false;
    } else {
      trackerObj[n] = 1;
    }

    var nString = n.toString().split("");

    var newN = 0;

    for (var i = 0; i < nString.length; i++) {
      var current = parseInt(nString[i]);

      newN += current ** 2;
    }

    return helper(newN);
  }

  return helper(n);
};

var test = {};

var testString = '12343'
console.log(isHappy(2));
