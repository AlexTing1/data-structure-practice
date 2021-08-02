function arrayOfProducts(array) {
  // Write your code here.
	var trackerObj = {};
	for (var i = 0; i < array.length; i++) {
		var current = array[i];
		trackerObj[current] = array.slice(0, i).concat(array.slice(i + 1));
	}

	var result = [];

	for (var i = 0; i < array.length; i++) {
		var current = array[i];
		var valueArray = trackerObj[current];
		result.push(productOfArray(valueArray));
	}
	return result;
	//console.log(trackerObj);
}

function productOfArray(array) {
	var result = 1;
	for (var i = 0; i < array.length; i++) {
		result = result * array[i];
	}
	return result;
}