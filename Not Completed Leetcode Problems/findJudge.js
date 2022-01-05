var findJudge = function(n, trust) {
  if (trust.length === 0 && n === 1) {
    return n;
  }
  var graph = {};
  var peopleThatTrust = {};
  var length = trust.length;
  for (var i = 0; i < length; i++) {
    //debugger;
    var current = trust[i].slice(0);
    var person = current[0];
    var trustPerson = current[1];

    if (graph[trustPerson] === undefined) {
      graph[trustPerson] = [person];
    } else {
      graph[trustPerson].push(person);
    }

    if (peopleThatTrust[person] === undefined) {
      peopleThatTrust[person] = 1;
    }
  }

  //debugger;

  var peopleOfTrust = Object.keys(graph);

  //debugger;
  for(var i = 0; i < peopleOfTrust.length; i++) {
    var judge = peopleOfTrust[i];
    if (graph[judge].length === n - 1 && peopleThatTrust[judge] === undefined) {
      return judge;
    }
  }
  return -1;
};
var n = 3;
var trust = [[1,3],[1,4],[2,3],[2,4],[4,3]];
var trust2 = [[1,3],[2,3],[3,1]];

console.log(findJudge(n, trust2));