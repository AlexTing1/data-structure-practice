var groupAnagrams = function(strs) {
  //  init trackerObj
  //  iterate through strs
  //      sort each strs[i]
  //      if strs[i] in trackerObj
  //          add unsortd to trackerOb[sortedStrs[i]]
  //      else
  //          trackerObj[sorted] = [unsorted]
  //  put all values of trackerObj into array
  //  return that array

  var trackerObj = {};
  var result = [];
  for (var i = 0; i < strs.length; i++) {
      var unsorted = strs[i];
      var sorted = unsorted.split("").sort().join("");
      if (trackerObj[sorted] !== undefined) {
          trackerObj[sorted].push(unsorted)
      } else {
          trackerObj[sorted] = [unsorted]
      }
  }

  var values = Object.values(trackerObj);
  for (var i = 0; i < values.length; i++) {
      result.push(values[i]);
  }

  return result;
};