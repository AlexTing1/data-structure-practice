function firstDuplicateValue(array) {
  // Write your code here.
	var trackerArray = [];
	for (var i = 0; i < array.length; i++) {
		var current = array[i];
		if (trackerArray.includes(current)) {
			return current;
		} else {
			trackerArray.push(current);
		}
	}
  return -1;
}