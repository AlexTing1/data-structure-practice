function firstNonRepeatingCharacter(string) {
  // Write your code here.
	var trackerObj = {};
	for (var i = 0; i < string.length; i++) {
		if (!Object.keys(trackerObj).includes(string[i])) {
			trackerObj[string[i]] = [i, 1];
		} else {
			trackerObj[string[i]][1]++;
		}
	}

	var keys = Object.keys(trackerObj);
	for (var i = 0; i < keys.length; i++) {
		var current = keys[i];

		if (trackerObj[current][1] === 1) {
			return trackerObj[current][0];
		}
	}
  return -1;
}
