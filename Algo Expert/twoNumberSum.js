function twoNumberSum(array, targetSum) {
  // Write your code here.
	var sum = 0;
	for (var i = 0; i < array.length - 1; i++) {
		for (var j = i + 1; j < array.length; j++) {
			var currentSum = array[i] + array[j];
			if (currentSum === targetSum) {
				return [array[i], array[j]]
			}
		}
	}
	return [];
}