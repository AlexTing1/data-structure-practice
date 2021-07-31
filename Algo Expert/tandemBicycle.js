function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
	redShirtSpeeds = redShirtSpeeds.sort(function(a, b) {return a - b});
	var sum = 0;

	if (fastest) {
		blueShirtSpeeds = blueShirtSpeeds.sort(function(a, b) {return b - a});
	} else {
		blueShirtSpeeds = blueShirtSpeeds.sort(function(a, b) {return a - b});
	}

	for (var i = 0; i < redShirtSpeeds.length; i++) {
			var current = Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
			sum += current;
		}
	return sum;
}
