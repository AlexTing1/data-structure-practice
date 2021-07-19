// 763. Partition Labels. #1 on top 10 most liked.
// COMPLETE
var partitionLabels = function(s) {
  let sorted = s.split("").sort();
  let sArray = s.split("");
  let trackerObj = {};
  let current = 0;
  let result = [];
  let start = 0;
  let end = 0;
  // iterate through array
  // if !in trackerObj
  //   iterate from back and find second letter, record start and end
  //      check every letter in between that's not in object tracker
  //        if not in object tracker, find second letter
  //          check if end position of second letter > end position of first letter.
  //          if second letter position is greater, then set firstEnd = secondEnd
  //   push into ans (current - start + 1)
  //   set i to current + 1
  while(current < sArray.length) {

    let currentLetter = sArray[current];
    if (!Object.keys(trackerObj).includes(currentLetter) || current === end) {
      trackerObj[currentLetter] = current;
      let currentEnd = findSecondLetter(sArray, currentLetter);
      if (currentEnd > end) {
        end = currentEnd;
      }

      if (current === end) {
        result.push((end - start + 1));
        start = end + 1;
        current = end + 1;
      } else {
        current++;
      }
    } else {
      current++;
    }
  }
  return result;
}

var findSecondLetter = function(array, letter) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] === letter) {
      return i;
    }
  }
  return -1;
}

var partitionLabelsFastAnswer = function(S) {
  var map = new Map();
  for (var j = 0; j < S.length; j++) {
      map.set(S[j], j);
  }

  let done = false;
  let from = 0;
  let to = 0;
  let i = 0;
  let partitions = [];

  while (!done) {
      to = Math.max(to, map.get(S[i]));
      debugger;
      if (to === i) {
          partitions.push(to-from+1);
          from = to + 1;
          to = from;
      }

      i++;

      if (i === S.length) {
          done = true;
      }
  }

  return partitions;

};

const test = 'ababcbacadefegdehijhklij';
const testArray = test.split("");
console.log(partitionLabelsFastAnswer(test));

console.log("hello world")