var isRobotBounded = function(instructions) {
  var history = {};
  var direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  var directionIndex = 0;
  var currentLocation = [0, 0];
  history[currentLocation] = 1;
  for (var i = 0; i < instructions.length; i++) {
    var currentInstruction = instructions[i];
    debugger;
    if (currentInstruction === 'G') {
      currentLocation[0] += direction[directionIndex][0];
      currentLocation[1] += direction[directionIndex][1];
      /* if (history[currentLocation] !== undefined) {
        return true;
      } else {
        history[currentLocation] = 1;
      } */
    } else if (currentInstruction === 'R') {
      if (directionIndex + 1 >= direction.length) {
        directionIndex = 0;
      } else {
        directionIndex++;
      }
    } else {
      if (directionIndex - 1 <= 0) {
        directionIndex = direction.length - 1;
      } else {
        directionIndex--;
      }
    }
  }
  if (directionIndex !== 0 || currentLocation === [0, 0]) {
    return true;
  } else {
    return false;
  }
};

var instructions = "GGLLGG";
console.log(isRobotBounded(instructions));