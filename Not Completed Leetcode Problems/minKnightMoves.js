var minKnightMoves = function(x, y) {
  if (x === 0 && y === 0) {
    return 0;
  }

  x = Math.abs(x);
  y = Math.abs(y);

  let queue = [[0, 0]];
  let tracker = {};
  let count = 0;

  const xKey = [-2, -2, -1, -1, 1, 1, 2, 2];
  const yKey = [1, -1, 2, -2, 2, -2, 1, -1];

  while (queue) {

    //debugger;
    let length = queue.length
    for (var j = 0; j < length; j++) {
      let current = queue.shift();
      if (current[0] === x && current[1] === y) {
        return count;
      }
      for (var i = 0; i < xKey.length; i++) {
        var xValue = xKey[i] + current[0];
        var yValue = yKey[i] + current[1];
        var newCoord = [xValue, yValue];


        if (tracker[newCoord] === undefined && xValue >= -2 && yValue >= -2) {
          queue.push(newCoord);
          tracker[newCoord] = 1;
        }
      }

    }

    //debugger;
    count++;
  }

  return -1;
};

console.log(minKnightMoves(2, 1));
