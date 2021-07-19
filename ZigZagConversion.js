var convert = function(str, numRows) {
    //make object: each key = 1 row, value = string on row
    //iterate through str with counter and add string to right row
    //return obj[key1] + obj[key2] +...+ obj[keyn]
    if(numRows === 1) {
      return str;
    }
    var tracker = {}
    var counter = 0;
    var result = "";
    var toAdd = true;
    for (var i = 0; i < numRows; i++) {
      tracker[i] = "";
    }
    for (var i = 0; i < str.length; i++) {
      var current = str.charAt(i);
      tracker[counter.toString()] = tracker[counter.toString()] + current;
      toAdd = setToAdd(toAdd, counter, numRows);
      counter = setCounter(counter, toAdd);
    }

    var keys = Object.keys(tracker);
    for (var key in tracker) {
      result = result + tracker[key];
    }

    return result;
};

var setToAdd = function(toAdd, counter, numRows) {
  if (counter === numRows - 1) {
    toAdd = false;
  }

  if (counter === 0) {
    toAdd = true;
  }

  return toAdd;
}

var setCounter = function(counter, toAdd) {
  if (toAdd) {
    counter++;
  } else {
    counter--;
  }

  return counter;
}

var test = "AB";

console.log(convert(test, 1));