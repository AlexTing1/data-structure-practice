var alphabetBoardPath = function(target) {
  const dict = {
    a: [0, 0],
    b: [1, 0],
    c: [2, 0],
    d: [3, 0],
    e: [4, 0],
    f: [0, 1],
    g: [1, 1],
    h: [2, 1],
    i: [3, 1],
    j: [4, 1],
    k: [0, 2],
    l: [1, 2],
    m: [2, 2],
    n: [3, 2],
    o: [4, 2],
    p: [0, 3],
    q: [1, 3],
    r: [2, 3],
    s: [3, 3],
    t: [4, 3],
    u: [0, 4],
    v: [1, 4],
    w: [2, 4],
    x: [3, 4],
    y: [4, 4],
    z: [0, 5]
  }

  var result = '';
  var currentX = 0;
  var currentY = 0;

  var helper = function(letter) {
    const coord = dict[letter];
    const distToX = coord[0] - currentX;
    const distToY = coord[1] - currentY;

    if (distToX > 0) {
      let directionsToAdd = new Array(distToX).fill('R').join('');
      result = result + directionsToAdd;
    }

    if (distToX < 0) {
      let directionsToAdd = new Array(Math.abs(distToX)).fill('L').join('');
      result = result + directionsToAdd;
    }

    if (distToY > 0) {
      let directionsToAdd = new Array(distToY).fill('D').join('');
      result = result + directionsToAdd;
    }

    if (distToY < 0) {
      let directionsToAdd = new Array(Math.abs(distToY)).fill('U').join('');
      result = result + directionsToAdd;
    }

    result = result + '!';
    currentX = coord[0];
    currentY = coord[1];
  }

  for (var i = 0; i < target.length; i++) {
    var currentLetter = target[i];
    helper(currentLetter);
  }

  return result;
};

var test = "leet";

console.log(alphabetBoardPath(test));
