function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
	redShirtHeights.sort(function(a, b) { return a - b});
	blueShirtHeights.sort(function(a, b) { return a - b});
	var blueBackRow = true;
	if (redShirtHeights[0] > blueShirtHeights[0]) {
		blueBackRow = false;
	}

	for (var i = 0; i < redShirtHeights.length; i++) {
		if (blueBackRow) {
			if (redShirtHeights[i] >= blueShirtHeights[i]) {
				return false
			}
		} else {
			if (redShirtHeights[i] <= blueShirtHeights[i]) {
				return false
			}
		}
	}
  return true;
}
