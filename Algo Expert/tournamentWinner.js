function tournamentWinner(competitions, results) {
  // Write your code here.
	var trackerObj = {};
	for (var i = 0; i < competitions.length; i++) {
		var currentComp = competitions[i];
		var homeTeam = currentComp[0];
		var awayTeam = currentComp[1];

		if (!Object.keys(trackerObj).includes(homeTeam)) {
			trackerObj[homeTeam] = 0;
		}

		if (!Object.keys(trackerObj).includes(awayTeam)) {
			trackerObj[awayTeam] = 0;
		}

		// calculate results
		if (results[i] === 0) {
			trackerObj[awayTeam] += 3;
		} else {
			trackerObj[homeTeam] += 3;
		}
	}
	console.log(trackerObj);
	var max = 0;
	var winner = '';
	for (var key in trackerObj) {
		if (trackerObj[key] > max) {
			max = trackerObj[key];
			winner = key;

		}
	}
  return winner
}