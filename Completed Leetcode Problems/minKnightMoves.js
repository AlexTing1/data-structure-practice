var minKnightMoves = function(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);

  let queue = [[0, 0]];
  let count = 0;
  let tracker = {};

  const xDir = [-2, -2, -1, -1, 1, 1, 2, 2];
  const yDir = [1, -1, -2, 2, 2, -2, 1, -1];

  while (queue) {
    const queueLength = queue.length;

    for (var i = 0; i < queueLength; i++) {
      const current = queue.shift();
      for (var j = 0; j < xDir.length; j++) {
        debugger;

        if (current[0] === x && current[1] === y) {
          return count;
        }
        const newX = current[0] + xDir[j];
        const newY = current[1] + yDir[j];

        if (tracker[[newX, newY]] === undefined && newX >= -2 && newY >= -2) {
          queue.push([newX, newY]);
          tracker[[newX, newY]] = 1;
        }

      }
    }
    count++;
  }

};

console.log(minKnightMoves(5, 5));
