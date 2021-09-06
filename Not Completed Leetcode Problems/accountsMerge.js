var accountsMerge = function(accounts) {
  var result = [];
  var nameObj = {};
  //iterate accounts
  //  if name does not exists
  //    add directly to result
  //  else
  //    check nameObj if an email exists
  //    if email exists, then add to email
  //    else add to result, add to nameObj
  //return result
  var createEmailObj = function(emailArray, index) {
    var result = {};
    for (var m = 1; m < emailArray.length; m++) {
      var current = emailArray[m];
      result[current] = index;
    }
    return result;
  }

  for (var i = 0; i < accounts.length; i++) {
    var currentAccount = accounts[i];
    var currentName = currentAccount[0];
    //debugger;
    if (nameObj[currentName] === undefined) {
      var emailObj = createEmailObj(currentAccount, result.length - 1);
      nameObj[currentName] = [emailObj];
    } else {
      var users = nameObj[currentName];
      var toAdd = true;
      for (var j = 0; j < users.length; j++) {
        var currentUser = users[j];
        toAdd = true;
        for (var k = 1; k < currentAccount.length; k++) {
          var currentEmail = currentAccount[k];
          if (currentUser[currentEmail] !== undefined) {
            for (var l = 1; l < currentAccount.length; l++) {
              currentUser[currentAccount[l]] = 1;
            }
            toAdd = false;
            break;
          }
        }
        if (!toAdd) {
          break;
        }
      }
      if (toAdd) {
        var emailObj = createEmailObj(currentAccount, result.length - 1);
        nameObj[currentName].push(emailObj);
      }
    }

  }
  debugger;

  var keys = Object.keys(nameObj);
  for (var i = 0; i < keys.length; i++) {
    var name = keys[i];
    for (var j = 0; j < nameObj[name].length; j++) {
      debugger;
      var emails = Object.keys(nameObj[name][j]).sort();

      var fullUser = [name];
      fullUser = fullUser.concat(emails);
      result.push(fullUser);
    }
  }
  return result;
};

var accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]];

console.log(accountsMerge(accounts));
