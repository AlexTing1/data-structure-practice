//SOLVED

var addBinary = function(a, b) {
    if (a.length < b.length) {
      a = Array(b.length - a.length + 1).join("0") + a;
    }

    if (a.length > b.length) {
      b = Array(a.length - b.length + 1).join("0") + b;
    }
    var result = "";
    var counter = "0";
    for (var i = a.length - 1; i >= 0; i--) {
      //[1, 1, 1]
      //  11 (counter = 1, current = 1)
      //[1, 1, 0]
      //  10 (counter = 1, current = 0)
      //[1, 0, 0]
      //  01 (counter = 0, current = 1)
      //[0, 0, 0]
      //  00 (counter = 0, current = 0)
      debugger;
      var arrayTracker = [parseInt(a[i]), parseInt(b[i]), parseInt(counter)].reduce((pv, cv) => pv + cv, 0);
      if (arrayTracker === 1) {
        result = "1" + result;
        counter = "0";
      } else if (arrayTracker === 2) {
        result = "0" + result;
        counter = "1";
      } else if (arrayTracker === 3) {
        result = "1" + result;
        counter = "1";
      } else {
        result = "0" + result;
        counter = "0";
      }


    }
    if (counter === "1") {
      result = counter + result;
    }
    return result;
};

var test = "0";
var test2 = "0";

console.log(addBinary(test, test2));