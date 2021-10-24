var maxArea = function(h, w, horizontalCuts, verticalCuts) {
  horizontalCuts = [0, ...horizontalCuts.sort((a, b) => a - b), h];
  verticalCuts = [0, ...verticalCuts.sort((a, b) => a - b), w];

  let horMax = 1;
  let vertMax = 1;

  for (var i = 0; i < horizontalCuts.length - 1; i++) {
    horMax = Math.max(horMax, horizontalCuts[i + 1] - horizontalCuts[i]);
  }

  for (var i = 0; i < verticalCuts.length - 1; i++) {
    vertMax = Math.max(vertMax, verticalCuts[i + 1] - verticalCuts[i]);
  }

  return ( BigInt(vertimax) *  BigInt(horimax)) % 1000000007n
};

