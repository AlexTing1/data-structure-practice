var Logger = function() {
  this.trackerObj = {};
};

/**
* Returns true if the message should be printed in the given timestamp, otherwise returns false.
      If this method returns false, the message will not be printed.
      The timestamp is in seconds granularity.
* @param {number} timestamp
* @param {string} message
* @return {boolean}
*/
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
  var keys = Object.keys(this.trackerObj);
  if (!keys.includes(message)) {
      this.trackerObj[message] = timestamp + 10;
      return true;
  } else {
      var timeStampMin = this.trackerObj[message];

      if (timestamp < timeStampMin) {
          return false
      } else {
          this.trackerObj[message] = timestamp + 10;
          return true;
      }
  }
};
