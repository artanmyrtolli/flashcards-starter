const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const util = require('./util');

class Game {
  constructor() {
    this.round;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  currentRound(){
    return this.round;
  }

  start(){
    const cards = data.prototypeData.map(e => {
      return new Card(e.id, e.question, e.answers, e.correctAnswer);
    })
      const deck = new Deck(cards);
      const round = new Round(deck);
      this.printMessage(deck, round)
      this.printQuestion(round)
      this.round = round;
      return round
  }
}

module.exports = Game;