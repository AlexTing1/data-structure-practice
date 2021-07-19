var sortedSquares = function(nums) {
  var storage = [];
  var result = [];
  var storageCurrent;
  for (var i = 0; i < nums.length; i++) {
   //if current < 0
   // storage.push(current ** 2)
   // contiune
   var current = nums[i];
   var currentSquare = Math.pow(current, 2);

   if (current < 0) {
     storage.unshift(currentSquare);
     storageCurrent = storage[0];
     continue;
   }

   //now current > 0
   debugger;
   while(storageCurrent <= currentSquare) {
     result.push(storageCurrent);
     storage.shift();
     storageCurrent = storage[0];
   }

   result.push(currentSquare);
  }
  if (result.length === 0 && storage.length !== 0) {
    return storage;
  }

  if (storage.length !== 0) {
    return result.concat(storage);
  }
  return result;
};

var test =  [-2, 0];
console.log(sortedSquares(test));