var minKnightMoves = function(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);

  let tracker = {};
  let count = 0;
  let queue = [[0, 0]];

  const xDir = [-2, -2, -1, -1, 1, 1, 2, 2];
  const yDir = [1, -1, 2, -2, 2, -2, 1, -1];

  while (queue) {

    const queueLength = queue.length;

    for (var i = 0; i < queueLength; i++) {
      let current = queue.shift();
      if (current[0] === x && current[1] === y) {
        return count;
      }
      for (var j = 0; j < xDir.length; j++) {
        const xValue = current[0] + xDir[j];
        const yValue = current[1] + yDir[j];
        const coord = [xValue, yValue];

        if (tracker[coord] === undefined && xValue >= -2 && yValue >= -2) {
          queue.push(coord);
          tracker[coord] = 1;
        }
      }

    }
    count++;
  }
  return -1;
};

console.log(minKnightMoves(5, 5));
