function sortedSquaredArray(array) {
  // Write your code here.
	var result = [];
	for (var i = 0; i < array.length; i++) {
		result.push(array[i]**2);
	}
	result = result.sort(function (a, b) {return a - b});
  return result;
}