function findThreeLargestNumbers(array) {
  // Write your code here.

	var largest = array.slice(0, 3).sort(function (a, b) {return a - b});
	console.log(largest)
	for (var i = 3; i < array.length; i++) {
		var current = array[i];
		if (current > largest[0]) {
			largest.shift();
			largest.unshift(current)
			largest.sort(function (a, b) {return a - b});
		}
	}
	return largest;
}
