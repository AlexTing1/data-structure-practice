function isMonotonic(array) {
  // Write your code here.
	if (array.length <= 1) {
		return true;
	}

	var inc = true;
	for (var i = 0; i < array.length; i++) {
		if (array[i + 1] < array[i]) {
			inc = false;
			break;
		}

		if (array[i] > array[i + 1]) {
			inc = true;
			break;
		}
	}


	for (var i = 0; i < array.length - 1; i++) {
		var current = array[i];
		var next = array[i + 1];

		if (inc && (next < current)) {
			return false;
		}

		if (!inc && (current < next)) {
			return false;
		}
	}
	return true;
}