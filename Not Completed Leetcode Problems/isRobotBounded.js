var isRobotBounded = function(instructions) {
  var direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  var directionIndex = 0;
  var x = 0;
  var y = 0;
  for (var i = 0; i < instructions.length; i++) {
    var currentInstruction = instructions[i];
    debugger;
    if (currentInstruction === 'G') {
      x += direction[directionIndex][0];
      y += direction[directionIndex][1];
      /* if (history[currentLocation] !== undefined) {
        return true;
      } else {
        history[currentLocation] = 1;
      } */
    } else if (currentInstruction === 'R') {
      directionIndex = (directionIndex + 3) % 4;
    } else {
      directionIndex = (directionIndex + 1) % 4;
    }
  }
  if (directionIndex !== 0 || (x === 0 && y === 0)) {
    return true;
  } else {
    return false;
  }
};

var instructions = "GLGLGGLGL";
console.log(isRobotBounded(instructions));

