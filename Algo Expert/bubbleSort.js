function bubbleSort(array) {
  // Write your code here.
	var arrayCopy = array.slice(0);
	var swapped = false;
	for (var i = 0; i < arrayCopy.length - 1; i++) {
		var current = arrayCopy[i];
		var next = arrayCopy[i + 1];
		if (next < current) {
			var temp = arrayCopy[i];
			arrayCopy[i] = arrayCopy[i + 1];
			arrayCopy[i + 1] = temp;
			swapped = true;

		}
	}

	if (swapped) {
		return bubbleSort(arrayCopy);
	} else {
		return arrayCopy;
	}
}