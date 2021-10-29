var sumTime = function(inputArray) {
  var hours = inputArray[0];
  var mins = inputArray[1];
  var secs = inputArray[2];

  return parseInt(hours) * 60 * 60 + parseInt(mins) * 60 + parseInt(secs);
}

var outageInterval = function(tradeData) {
  for (var i = 0; i < tradeData.length - 1; i++) {
    var current = tradeData[i];
    var next = tradeData[i + 1];

    var currentSplit = current.split(':');
    var nextSplit = next.split(':');

    var currentTime = sumTime(currentSplit);
    var nextTime = sumTime(nextSplit);

    if (nextTime - currentTime > 1) {
      return current + '-' + next;
    }
  }
  return "no error";
}

var test = ["12:31:04.04", "12:31:05.01", "12:31:06.21", "12:31:14.39", "12:31:15.13", "12:31:16.98", "12:31:17.09"];
var test2 = ["00:00:01.00", "00:00:02.08","00:00:02.93","00:00:12.43"]
console.log(outageInterval(test2));
