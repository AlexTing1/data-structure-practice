function nonConstructibleChange(coins) {
  // Write your code here.
	if (coins.length === 0) {
		return 1;
	};
	 var sorted = coins.sort(function(a, b) {return a - b});
  if (sorted[0] !== 1) {

		return 1;
	}

	if (coins.length === 1 && coins[0] === 1) {
		return 2;
	}
	var tracker = [];
	//console.log(sorted)
	for (var i = 0; i < coins.length; i++) {
		var current = coins[i];
		tracker.push(current);

		var temp = []
		for (var j = 0; j < tracker.length - 1; j++) {
			if(!tracker.includes(current + tracker[j])) {
				temp.push(current + tracker[j]);
			}

		}
		tracker = tracker.concat(temp);
		temp = [];
	}

	var result = 1;
	var count = 0;
	tracker = tracker.sort(function(a, b) { return a - b});
	while (count < tracker.length) {
		if (!tracker.includes(result)) {
			return result;
		}
		result++;
		count++;
	}

	return 1;
}