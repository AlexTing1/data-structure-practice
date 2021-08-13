var getDecimalValue = function(head) {
  //  init trackerArray
  //  init decimal
  //  iterate linkedList
  //    push current node.value into trackerArray
  //  iterate trackerArray backwards
  //    decimal += decimal^i
  var trackerArray = [];
  var decimal = 0;
  var current = head;

  while (current !== null) {
    trackerArray.unshift(current.val);
    current = current.next;
  }

  for (var i = 0; i < trackerArray.length; i++) {
    if (trackerArray[i] === 1) {
      decimal += 2 ** i;
    }

  }

  return decimal;
};