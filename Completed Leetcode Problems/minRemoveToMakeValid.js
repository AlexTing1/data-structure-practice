var minRemoveToMakeValid = function(s) {
  //  if closed before bracket before open, then remove bracket
  //  if open without bracket, then remove open
  var recordOpenIndex = [];
  var tracker = 0;
  for (var i = 0; i < s.length; i++) {
    debugger;
    var current = s[i];
    if (current === ')' && tracker === 0) {
      s = s.slice(0, i) + s.slice(i + 1);
      i--;
      continue;
    }

    if (current === '(') {
      tracker++;
      recordOpenIndex.unshift(i);
    }

    if (current === ')') {
      tracker--;
    }
  }

  for (var i = 0; i < tracker; i++) {
    var current = recordOpenIndex[i];
    s = s.slice(0, current) + s.slice(current + 1);
  }

  return s;
};

console.log(minRemoveToMakeValid("))(("));