function binarySearch(array, target) {
  // Write your code here.
	return helper(0, array.length, array, target);
}

var helper = function(low, high, array, target) {
	var midIndex = Math.floor((low + high)/2);
	if (target === array[midIndex]) {
		return midIndex;
	} else if (low + 1 === high || midIndex === 0) {
		return -1;
	} else if (array[midIndex] > target) {
		// go left
		console.log(array.slice(low, midIndex));
		return helper(low, midIndex, array, target);
	} else if (array[midIndex] < target) {
		// go right
		console.log(array.slice(midIndex, high));
		console.log(midIndex, high);
		return helper(midIndex, array.length, array, target);
	} else {
		return -1;
	}
}