function isPalindrome(string) {
  // Write your code here.
	if (string.length === 1) {
		return true;
	}

	var start = 0;
	var end = string.length - 1;

	while (start < string.length) {
		if (string[start] !== string[end]) {
			return false
		}
		start++;
		end--;
	}
	return true;
}
