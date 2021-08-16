var carFleet = function(target, position, speed) {
  //  sort position by greatest to least by target - position
  //  sort speed to match sorting position of position
  //  init time array by calculate time it takes to hit target from each position using x/v = t
  //  init max time so far
  //  init fleetCount = position.length
  //  iterate position array
  //    maxTime = Math.max(maxTime, current)
  //    if current time <= max time
  //      fleetCount--
  //      currentTime = maxTime
  //      currentSpeed = maxTimeSpeed
  //  return array.length

  var positionSpeed = [];
  for (var i = 0; i < position.length; i++) {
    positionSpeed.push([target - position[i], speed[i], (target - position[i])/speed[i]]);
  }

  positionSpeed.sort((a, b) => a[0] - b[0])
  debugger;

  var fleetCount = position.length;
  var maxTime = positionSpeed[0][2];
  var maxSpeed = positionSpeed[0][1];
  for (var i = 1; i < positionSpeed.length; i++) {
    var currentCar = positionSpeed[i];
    var currentCarTime = currentCar[2];
    if (currentCarTime <= maxTime) {
      fleetCount--;
      positionSpeed[i][2] = maxTime;
      positionSpeed[i][1] = maxSpeed;
    }

    maxTime = Math.max(maxTime, currentCarTime);
  }

  return fleetCount;
};

var target = 12;
var position = [10,8,0,5,3];
var speed = [2,4,1,1,3];

console.log(carFleet(target, position, speed));
