 var iterateSchedule = function(numCourses, schedule, startPoint) {

 }
 var findOrder = function(numCourses, prerequisites) {
  //create graph from pre-req
  //iterate graph

  //course: [preqreq]
  var graph = {};

  for(var i = 0; i < prerequisites.length; i++) {
    var current = prerequisites[i];
    var course = current[0];
    var prereq = current[1];
    if (graph[course] === undefined) {
      graph[course] = [prereq];
    } else {
      graph[course].push(prereq);
    }

    if (graph[prereq] === undefined) {
      graph[prereq] = [];
    }
  }

  debugger;

  var startingPoints = Object.keys(graph);

  for (var i = 0; i < startingPoints.length; i++) {
    var startPoint = startingPoints[i];
    if (graph[startPoint] === []) {
      //search
      iterateSchedule(numCourses, graph, startPoint);
    }
  }
};

var numCourses = 4;
var prereq = [[1,0],[2,0],[3,1],[3,2]];

findOrder(numCourses, prereq);

