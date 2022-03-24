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

  start(testing){
    let cards = data.prototypeData.map(e => {
      return new Card(e.id, e.question, e.answers, e.correctAnswer);
    })
      cards = this.shuffleCards(cards)
      let deck = new Deck(cards);
      const round = new Round(deck);
      if (!testing) {
        this.printMessage(deck, round)
        this.printQuestion(round)
      }
      this.round = round;
      return round
  }

  shuffleCards(cards) {
    let shuffled = cards
      .map(card => ({ card, randNum: Math.random() }))
      .sort((a, b) => a.randNum - b.randNum)
      .map(({ card }) => card)
    return shuffled
  }
}

module.exports = Game;