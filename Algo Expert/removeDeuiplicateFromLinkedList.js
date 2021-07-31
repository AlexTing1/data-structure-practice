class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
	if (linkedList === null || linkedList.next === null) {
		return linkedList;
	}
	var currentNode = linkedList;
	var  nextNode = linkedList.next;
	var isLast = false;
	while (currentNode !== null && nextNode !== null) {

			while (nextNode.next !== null && currentNode.value === nextNode.value) {
				if (nextNode.next !== null) {
					nextNode = nextNode.next;
				} else {
					isLast = true;
				}
			}

			if (nextNode.next === null && currentNode.value === nextNode.value) {
				currentNode.next = null;
				currentNode = currentNode.next;
			} else {
				currentNode.next = nextNode;
				nextNode = nextNode.next;
				currentNode = currentNode.next;
			}


	}
	console.log(currentNode);
	console.log(nextNode);
  return linkedList;
}
