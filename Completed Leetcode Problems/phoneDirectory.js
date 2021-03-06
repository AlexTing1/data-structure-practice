var PhoneDirectory = function(maxNumbers) {
  this.maxLength = maxNumbers;
  this.set = new Set();
  while (maxNumbers--) {
      this.set.add(maxNumbers);
  }
};

/**
* Provide a number which is not assigned to anyone.
      @return - Return an available number. Return -1 if none is available.
* @return {number}
*/
PhoneDirectory.prototype.get = function() {
  if (this.set.size === 0) {
      return -1;
  }

  const n = this.set.values().next().value;
  this.set.delete(n);
  return n;
};

/**
* Check if a number is available or not.
* @param {number} number
* @return {boolean}
*/
PhoneDirectory.prototype.check = function(number) {
  return this.set.has(number);
};

/**
* Recycle or release a number.
* @param {number} number
* @return {void}
*/
PhoneDirectory.prototype.release = function(number) {
  this.set.add(number);
};