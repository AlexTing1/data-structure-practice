var reorderList = function(head) {
  //  iterate linkedlist
  //      push into stack
  //  backEnd = top half of stack
  //  frontEnd = first half of stack
  //  iterate frontEnd
  //      frontEnd[i].next = backEnd[i]
  //      backEnd[i].next = frontEnd[i + 1]
  //  return start
  if (head.next === null) {
      return head;
  }
  var start = head;
  var reset = head;
  var nextNode = head.next;
  var trackerArray = [];
  while(start.next !== null) {
      start.next = null;
      trackerArray.push(start);
      start = nextNode;
      nextNode = nextNode.next;
  }
  trackerArray.push(start);
  start = reset;

  var frontEnd = trackerArray.slice(0, trackerArray.length/2);
  var backEnd = trackerArray.slice(trackerArray.length/2);

  //console.log(frontEnd);
  //console.log(backEnd);

  var start = frontEnd[0];
  //frontEnd.shift();
  var start2 = frontEnd[0];
  for (var i = 0; i < frontEnd.length; i++) {
      var backEndCurrent = backEnd.pop();
      var nextFrontEnd = frontEnd[i + 1];
      start.next = backEndCurrent;
      start = start.next;
      if (nextFrontEnd === undefined) {
          break;
      }
      start.next = nextFrontEnd;
      start = start.next;
  };

  //console.log(frontEnd);
  //console.log(backEnd);
  //console.log(start2);

  if (backEnd.length !== 0) {
      start.next = backEnd.pop();
  }
  return start2;

};