function caesarCipherEncryptor(string, key) {
  // Write your code here.
	var result = '';
	key = key % 26;
	for (var i = 0; i < string.length; i++) {
		var currentAscii = string.charCodeAt(i);
		var newAscii = currentAscii + key;
		if (newAscii > 122) {
			newAscii = 96 + newAscii % 122;
		}
		result = result + String.fromCharCode(newAscii);
	}
	return result;
}