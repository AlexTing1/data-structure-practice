function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
	arrayOne.sort(function(a, b) {return a - b});
	arrayTwo.sort(function(a, b) {return a - b});

	var countOne = 0;
	var countTwo = 0;
	var result = [];
	var smallestAbs = Infinity;
	while (countOne < arrayOne.length && countTwo < arrayTwo.length) {
		var currentOne = arrayOne[countOne];
		var currentTwo = arrayTwo[countTwo];
		var difference = Math.abs(currentOne - currentTwo);
		if (difference < smallestAbs) {
			smallestAbs = difference;
			result = [currentOne, currentTwo];
		}

		if (currentOne < currentTwo) {
			countOne++;
		} else {
			countTwo++;
		}
	}
	return result;
}
