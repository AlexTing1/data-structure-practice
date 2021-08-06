function numberOfWaysToMakeChange(n, denoms) {
  // Write your code here.
	var trackerArray = new Array(n + 1).fill(0);
	trackerArray[0] = 1;

	for (var j = 0; j < denoms.length; j++) {
		var currentDenom = denoms[j];

		for (var i = 1; i < trackerArray.length; i++) {
			var currentNum = trackerArray[i];
			if (currentDenom <= i) {
				trackerArray[i] += trackerArray[i - currentDenom]
			}

		}
	}
	return trackerArray[trackerArray.length - 1];
}