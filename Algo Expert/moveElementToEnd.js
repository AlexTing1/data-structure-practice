function moveElementToEnd(array, toMove) {
  // Write your code here.
	var index = 0;
	var count = 0;
	while (count < array.length) {
		var current = array[index];
		if (current === toMove) {
			array.splice(index, 1);
			array.push(toMove);
		} else {
			index++;
		}
		count++;
	}
	return array;
}
