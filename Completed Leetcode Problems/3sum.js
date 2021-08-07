function threeNumberSum(array, targetSum) {
  // Write your code here.
	array.sort(function(a, b) {return a - b});
	var result = [];
	for (var i = 0; i < array.length; i++) {
		var current = array[i];
		var startCount = i + 1;
		var start = array[startCount];
		var endCount = array.length - 1;
		var end = array[endCount];

		while (startCount < endCount) {
			var sum = current + start + end;
			if (sum === targetSum) {
				result.push([current, start, end]);
				startCount++;
				endCount--;
				start = array[startCount];
				end = array[endCount];
			} else if (sum > targetSum) {
				endCount--;
				end = array[endCount];
			} else {
				startCount++;
				start = array[startCount];
			}
		}

	}
	return result;
}
