/**
 * Initialize your data structure here.
 */
 var RandomizedSet = function() {
  this.set = {};
};

/**
* Inserts a value to the set. Returns true if the set did not already contain the specified element.
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  debugger;
  if (this.set[val] === undefined) {
      this.set[val] = 1;
      console.log(this.set);
      return true  ;
  }
  console.log(this.set)
  return false;


};

/**
* Removes a value from the set. Returns true if the set contained the specified element.
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  if (!(val in Object.keys(this.set))) {
      return false;
  }

  delete this.set[val];
  return true;
};

/**
* Get a random element from the set.
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  const keys = Object.keys(this.set);
  const rand = Math.floor(Math.random() * (keys.length - 1));
  return keys[rand];
};



/*  var obj = new RandomizedSet()
 var param_1 = obj.insert(1)
 var param_2 = obj.remove(2)
 var param_3 = obj.getRandom() */

var randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1)); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
console.log(randomizedSet.remove(2)); // Returns false as 2 does not exist in the set.
console.log(randomizedSet.insert(2)); // Inserts 2 to the set, returns true. Set now contains [1,2].
console.log(randomizedSet.getRandom()); // getRandom() should return either 1 or 2 randomly.
console.log(randomizedSet.remove(1)); // Removes 1 from the set, returns true. Set now contains [2].
// debugger;
randomizedSet.insert(2); // 2 was already in the set, so return false.
console.log(randomizedSet.getRandom()); // Since 2 is the only number in the set, getRandom() will always return 2.
