function isValidSubsequence(array, sequence) {
  // Write your code here.
	var sequenceCount = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i] === sequence[sequenceCount]) {
			sequenceCount++;
			if (sequenceCount === sequence.length) {
				return true;
			}
		}
	}
	return false;
}