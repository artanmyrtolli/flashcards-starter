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

});