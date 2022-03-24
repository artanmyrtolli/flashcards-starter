const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

let card1, card2, card3, deck;
describe(`Deck`, () => {
    beforeEach( () => {
        card1 = new Card(13, "The callback function for map() returns a modified version of the current element.", ["true", "false"], "true");
        card2 = new Card(22, "Which prototype method is used to iterate over each property of an object?", ["Object.keys()", "Object.values()", "reduce()"],"Object.keys()");
        card3 = new Card(10, "Which iteration method returns the first array element where the callback function returns true", ["find()", "filter()", "forEach()"], "find()");
        deck = new Deck([card1, card2, card3]);
    })

    it(`should intantiate our good friend Deck`, () => {
        expect(deck).to.be.an.instanceOf(Deck)
    })

    it(`should be able to store cards`, () => {
        expect(deck.cards).to.deep.equal([card1, card2, card3])
    })

    it(`should be able to count the cards in the deck`, () => {
        const cardCount = deck.countCards()
        expect(cardCount).to.equal(3)
    })
})