class Deck {
  #cards; //array of all cards
  #deltIndex = 0; //int of number of cards delt
  shuffle() {

  }

  getRemainingCards() {

  }

  dealHand(n) {

  }

  dealCard() {

  }

}

class Card {
  constructor(suite, value, avaliable) {
    this.suite = suite;
    this.value = value;
    this.avaliable = avaliable;
  }

  get suite() {
    return this.suite;
  }

  get value() {
    return this.value;
  }

  set suite(suite) {
    this.suite = suite;
  }

  set value(value) {
    this.value = value;
  }

  get avaliable() {
    return this.avaliable;
  }

  set avaliable(avaliable) {
    this.avaliable = avaliable;
  }
}

class Hand extends Card {
  #hand = {};

  getScore() {
    var score = 0;
    for (var i = 0; i < #hand.length; i++) {
      var currentCard = #hand[i];
      score = score + currentCard.value
    }

    return score;
  }

  addCard(card) {
    #hand[card] = 1;
  }

  removeCard(card) {
    delete #hand[card];
  }
}

class BlackJackCard extends Card {
  constructor(suite, value, avaliable) {
    super(suite, value, avaliable);
  }

  value() {
    if (isAce()) {
      return 1;
    } else if (isFacecard()) {
      return 10;
    } else {
      return this.value;
    }
  }
  isAce() {
    return this.value === 1;
  }

  minValue() {
    if (isAce()) {
      return 1;
    } else {
      return this.value;
    }
  }

  maxValue() {
    if (isAce()) {
      return 11;
    } else {
      return this.value;
    }
  }

  isFacecard() {
    return this.value >= 11 && this.value <= 13;
  }
}