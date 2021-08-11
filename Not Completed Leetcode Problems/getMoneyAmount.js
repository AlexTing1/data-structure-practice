//  Input - max n from [1, n]
//  Output - max number to payout
//  Contraints - 1 <= n <= 200
//  Edge Cases - n = 1, n = 2

var getMoneyAmount = function(n) {
  //  init trackerObj
  //  init range
  //  create helper function to iterate
  //  do Binary search on every number and record what payout will be,
  //    if new payout is greater than current payout, then replace that with current payout

  var largestPayout = 0;
  var tracker = [];
  var guess = ;
  var helper = function(min, max, currentPayout, prevPayout, guess) {
    var mid =  Math.floor((min + max)/2);
    var upperMid = Math.floor((guess + max)/2);
    var lowerMid = Math.floor((guess + min)/2);
    currentPayout += prevPayout;
    if (currentPayout > largestPayout) {
      largestPayout = currentPayout;
    }

    if (min === max) {
      return;
    }
    //go right
    helper(guess + 1, max, currentPayout, guess, upperMid);
    //go left
    helper(min, guess, currentPayout, guess, lowerMid);
  }

  helper(1, n, 0, 0, guess);
  return largestPayout;
};

console.log(getMoneyAmount(10));