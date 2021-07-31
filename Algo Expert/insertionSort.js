function insertionSort(array) {
  // Write your code here.
	var arrayCopy = array.slice(0);
	for (var i = 1; i < arrayCopy.length; i++) {
		if (arrayCopy[i] < arrayCopy[i - 1]) {
			// put into proper place
			arrayCopy = insertionSortHelper(arrayCopy.slice(0, i), arrayCopy.slice(i + 1), arrayCopy[i])
		}
	}
	return arrayCopy;
}

function insertionSortHelper(firstPart, secondPart, variable) {
	for (var i = firstPart.length - 1; i >= 0; i--) {
		if (i === 0 && variable < firstPart[i]) {
			firstPart.unshift(variable);

			return firstPart.concat(secondPart);
		}

		if (variable >= firstPart[i]) {
			var firstPartHalf = firstPart.slice(0, i + 1);
			var secondPartHalf = firstPart.slice(i + 1);
			firstPartHalf.push(variable)
			return firstPartHalf.concat(secondPartHalf).concat(secondPart);

		}
	}
}