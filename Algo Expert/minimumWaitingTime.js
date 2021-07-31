function minimumWaitingTime(queries) {
  // Write your code here.
  queries.sort(function(a, b) {return a - b})
	// caluclate wait time for current query
	// add wait time to total wait time

	var totalWaitTime = 0;
	var currentWaitTime = 0;

	for (var i = 0; i < queries.length; i++) {
		totalWaitTime += currentWaitTime;
		currentWaitTime += queries[i];
	}
	return totalWaitTime;

}