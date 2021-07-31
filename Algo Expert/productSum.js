function productSum(array) {
  // Write your code here.
	var sum = 0;

	var helper = function(array, depth, multiplier) {
		for (var i = 0; i < array.length; i++) {
			if (!Array.isArray(array[i])) {
				sum += array[i] * multiplier;
			} else {
				helper(array[i], depth + 1, multiplier * depth );
			}
		}
	}

	helper(array, 2, 1);
	return sum;
}
