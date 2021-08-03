function mergeOverlappingIntervals(array) {
  // Write your code here.
	// init trackerObj
	// sort array
	var trackerObj = {};
	array = array.sort(function(a, b) {return a[0] - b[0]});
	var result = [array[0]];
	for (var i = 1; i < array.length; i++) {
		var current = array[i];
		var latest = result[result.length - 1];
		if (current[0] > latest[1]) {
			result.push(current);
		} else if (current[0] <= latest[1] && current[1] > latest[1]) {
			result[result.length - 1][1] = current[1];
		}
	}
  return result;
}