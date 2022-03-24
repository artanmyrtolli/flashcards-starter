const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Deck = require('../src/Deck');

var newGame = new Game()
var startGame = newGame.start()

describe(`Game`, () => {
    it(`should instantiate a game`, () => {
        expect(newGame).to.be.an.instanceOf(Game);
    })
    
    it(`should instantiate a deck`, () => {
        expect(startGame.deck).to.be.an.instanceOf(Deck)
    })

    it(`should keep track of rounds`, () => {
        expect(newGame.currentRound()).to.equal(startGame)
    })

    it(`can shuffle the cards`, () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        expect(newGame.shuffleCards(array)).to.not.deep.equal(array)
    })
});