var divisorGame = function(n) {
  var helper = function(n, turn) {
    if (n <= 1) {
      return turn === 'bob';
    }

    for (var i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
      if (n % i === 0) {
        if (turn === 'bob') {
          return helper(n - i, 'alice');
        } else {
          return helper(n - i, 'bob');
        }
        break;
      }
    }
  }

  return helper(n, 'alice');
};

console.log(divisorGame(4));
