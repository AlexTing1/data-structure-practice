//  Edge cases - less courses than numCourses, loop, no loop, multiple prereq
var canFinish = function(numCourses, prerequisites) {

  //  iterate numCourses
  //    check every courses in numcourses if a loop exists
  //      if false
  //        count++;
  //        if (count === numcourses)
  //          return true
  //  return false
  //  init helper function (find if there are loops)
  //    base case: course input has no prereq
  //    base case #2: course input has prereq already seen
  //    init trackerObj
  //    iterate through numCourses
  //      if prereq exists
  //        helper(fucntion
  if (prerequisites.length === 0) {
    return true;
  }
  var courseWithPreqreq = {};
  var alreadyCounted = [];
  var cleared = [];
  for (var i = 0; i < prerequisites.length; i++) {
    var current = prerequisites[i];
    if (courseWithPreqreq[current[0]] === undefined) {
      courseWithPreqreq[current[0]] = [current[1]];
    } else {
      courseWithPreqreq[current[0]].push(current[1]);
    }
  }

  debugger;
  var count = 0;
  var helper = function(course, trackerObj) {
    debugger;
    //  course does not have preqreq
    if (courseWithPreqreq[course] === undefined) {
      if (!alreadyCounted.includes(course)) {
        count++;
        alreadyCounted.push(course);
      }
      cleared.push(course);
      return true;
    }

    if (cleared.includes(course)){
      return true;
    }
    //  course already been checked. (in a loop)
    if(trackerObj[course] !== undefined) {
      return false;
    }

    //  preq req also has preqreq
    if (courseWithPreqreq[course] !== undefined) {
      trackerObj[course] = 1;
      for (var i = 0; i < courseWithPreqreq[course].length; i++) {
        if (!helper(courseWithPreqreq[course][i], trackerObj)) {
          return false
        }
        //trackerObj = {};
      }
    }
    cleared.push(course);
    return true;
  }

  var keys = Object.keys(courseWithPreqreq);
  for (var i = 0; i < keys.length; i++) {
    //  check preqreqs of each key
    var currentKey = keys[i];
    var preReqArray = courseWithPreqreq[currentKey];
    debugger;
    for (var j = 0; j < preReqArray.length; j++) {
      var currentPreReq = preReqArray[j];
      //check if preReq have any preReq
      if (!helper(currentPreReq, {})) {
        return false;
      } else {
        if (!alreadyCounted.includes(currentPreReq)) {
          count++;
          alreadyCounted.push(currentPreReq);
        }

      }
    }
    if (!alreadyCounted.includes(currentKey)) {
      count++;
      alreadyCounted.push(currentKey);
    }
  }
  debugger;
  if (count >= numCourses - 1) {
    return true;
  } else {
    return false;
  }
};

var testCourses = 7;
var testPreReq = [[1,0],[0,3],[0,2],[3,2],[2,5],[4,5],[5,6],[2,4]];
var test2 = [[1, 0], [0, 1]];
console.log(canFinish(testCourses, testPreReq));
