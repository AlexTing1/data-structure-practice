function selectionSort(array) {
  // Write your code here.
	var result = [];
	var arrayCopy = array.slice(0);

	while (arrayCopy.length > 0) {
		//findMin
		var minIndex = findMinIndex(arrayCopy);
		result.push(arrayCopy[minIndex])
		//removeMin
		arrayCopy = removeMin(arrayCopy, minIndex);


	}
	return result;
}

function findMinIndex(array) {
	if (array.length <= 1) {
		return 0;
	}
	var min = array[0];
	var index = 0;
	for (var i = 1; i < array.length; i++) {
		if (array[i] < min) {
			min = array[i];
			index = i;
		}
	}
	return index;
}

function removeMin(array, minIndex) {
	if (array.length === 1) {
		return [];
	}
	var firstHalf = array.slice(0, minIndex );
	var secondHalf = array.slice(minIndex + 1);
	var result = firstHalf.concat(secondHalf);
	//console.log(result);
	return result;
}