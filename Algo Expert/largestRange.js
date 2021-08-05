function largestRange(array) {
  // Write your code here.
	var trackerArray = [[array[0]]];

	for (var i = 1; i < array.length; i++) {
		var current = array[i];
		var trackerLength = trackerArray.length
		trackerArray = updateTrackerArray(trackerArray, current);
	}
	console.log(trackerArray);

	for (var i = 0; i < trackerArray.length; i++) {
		trackerArray = updateTrackerArray2(trackerArray, trackerArray[i])
	}
	console.log(trackerArray);
	var largestRange = 0;
	var result = [];
	for (var i = 0; i < trackerArray.length; i++) {
		var current = trackerArray[i];
		var range = current[current.length - 1] - current[0];

		if (range >= largestRange) {
			largestRange = range;
			result = [current[0], current[current.length - 1]];
		}

	}

	return result;
}

function updateTrackerArray(trackerArray, input) {

	for (var i = 0; i < trackerArray.length; i++) {
		if (trackerArray[i][0] - 1 === input /*|| trackerArray[i][0] === input */) {
			trackerArray[i].unshift(input);
			return trackerArray;
		}

		if (trackerArray[i][trackerArray[i].length - 1] + 1 === input /*|| trackerArray[i][trackerArray[i].length - 1] === input */) {
			trackerArray[i].push(input);
			return trackerArray;
		}

	}

	trackerArray.push([input]);
	return trackerArray;
}

function updateTrackerArray2(trackerArray, input) {
	for (var i = 0; i < trackerArray.length; i++) {
		var current = trackerArray[i];
		if (current[0] - 1 === input[input.length - 1]) {
			trackerArray[i] = input.concat(trackerArray[i]);
			return trackerArray;
		}

		if (current[current.length - 1] + 1 === input[0]) {
			trackerArray[i] = trackerArray[i].concat(input);
			return trackerArray;
		}

		if (current[0] === input[input.length - 1]) {

			var temp = input.slice(0);
			temp.pop();
			trackerArray[i] = temp.concat(current);
			return trackerArray;
		}

		if (current[current.length - 1] === input[0]) {
			current.pop();
			trackerArray[i] = current.concat(input);
			return trackerArray;
		}
	}

	return trackerArray
}