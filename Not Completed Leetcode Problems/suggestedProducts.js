var suggestedProducts = function(products, searchWord) {
  const productsSorted = products.sort();

  let result = [];
  let map = {};

  var getSearch = function(letters, firstStart) {
    //find location in productsSorted
    //get next 3 if possible

    const lettersLength = letters.length;
    let result = [];

    for (var i = firstStart; i < products.length; i++) {
      let currentWord = products[i];
      if (currentWord[0] !== searchWord[0] || result.length === 3) {
        return result;
      }

      if (currentWord.slice(0, lettersLength) === letters) {
        result.push(currentWord);
      }
    }

    return result;
  }

  var currentSearch = '';

  for (var i = 0; i < products.length; i++) {
    const word = products[i];
    const letter = word[0];

    if (map[letter] === undefined) {
      map[letter] = i;
    }
  }

  for (var i = 0; i < searchWord.length; i++) {
    var currentLetter = searchWord[i];
    currentSearch = currentSearch + currentLetter;
    var searchResult = getSearch(currentSearch, map[searchWord[0]]);
    result.push(searchResult);
  }

  return result;
}

console.log(suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"], "mouse"));
