function generateDocument(characters, document) {
  // Write your code here.
	// put document into object in from {letter: #count}
	// iterate characters and subtract from object values
	// if #count < 0 || character not in object, return false
	// return true
	if (document.length === 0) {
		return true;
	}

	var trackerObj = {};
	for (var i = 0; i < characters.length; i++) {
		var current = characters[i];
		if (!Object.keys(trackerObj).includes(current)) {
				trackerObj[current] = 1;
		} else {
				trackerObj[current]++;
		}
	}

	for (var i = 0; i < document.length; i++) {
		var current = document[i];
		if (!Object.keys(trackerObj).includes(current) || trackerObj[current] - 1 < 0) {
			return false
		} else {
			trackerObj[current]--;
		}
	}
	return true;
}