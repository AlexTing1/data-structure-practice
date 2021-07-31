function getNthFib(n) {
  // Write your code here.
	if (n === 1) {
		return 0;
	}

	if (n === 2) {
		return 1;
	}

	var f0 = 0;
	var f1 = 1;

	return helper(f0, f1, n - 2, 0);
}

var helper = function(f0, f1, n, sum) {
	if (n === 0) {
		return sum;
	}
	sum = f0 + f1;
	return helper(f1, sum, n - 1, sum);
}