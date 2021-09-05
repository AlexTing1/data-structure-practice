var accountsMerge = function(accounts) {
  var trackerObj = {};

  for (var i = 0; i < accounts.length; i++) {
    var current = accounts[i];
    var name = current[0];

    if (trackerObj[name] === undefined) {
      //  format email = 1;?
      var email = {};
      for (var i = 1; i < current.length; i++) {
        email[current[i]] = 1;
      }
      trackerObj[name] = [email];
    } else {
      var users = trackerObj[name];
      for (var i = 0; i < users.length; i++) {
        var currentEmailObj = users[i];
        for (var j = 1; j < current.length; j++) {
          if (currentEmailObj[current[j]] !== undefined) {
            //add everything to emailboj
          }
        }
      }
    }
  }
};