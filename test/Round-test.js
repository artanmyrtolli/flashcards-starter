const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


let card1, card2, card3, deck, round;
describe(`Round`, () => {
    beforeEach( () => {
        card1 = new Card(13, "The callback function for map() returns a modified version of the current element.", ["true", "false"], "true");
        card2 = new Card(22, "Which prototype method is used to iterate over each property of an object?", ["Object.keys()", "Object.values()", "reduce()"],"Object.keys()");
        card3 = new Card(10, "Which iteration method returns the first array element where the callback function returns true", ["find()", "filter()", "forEach()"], "find()");
        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
    })

    it(`should instantiate a Round`, () => {
        expect(round).to.be.an.instanceof(Round)
    })

    it(`should store the current card in play`, () => {
        expect(round.currentCard).to.equal(card1)
    })

    it(`should return the current card in play`, () => {
        expect(round.returnCurrentCard()).to.equal(card1)
    })

    it(`should update turns count`, () => {
        expect(round.turns).to.equal(0)
        round.takeTurn(`true`);
        expect(round.turns).to.equal(1)
        round.takeTurn(`reduce()`);
        expect(round.turns).to.equal(2)
    })

    it(`should log incorrect guesses`, () => {
        expect(round.turns).to.equal(0)
        round.takeTurn(`true`);
        expect(round.incorrectGuesses.length).to.equal(0)
        round.takeTurn(`reduce()`);
        expect(round.incorrectGuesses.length).to.equal(1)
        expect(round.incorrectGuesses).to.deep.equal([22])
    })

    it(`should cycle in the next card to play`, () => {
        expect(round.currentCard).to.equal(card1)
        round.takeTurn()
        expect(round.currentCard).to.equal(card2)
        round.takeTurn()
        expect(round.currentCard).to.equal(card3)
    })
    
    it(`should give feedback on the guess`, () => {     
        expect(round.takeTurn('true')).to.equal(`Correct!`)
        expect(round.takeTurn('true')).to.equal(`Incorrect!`)
    })

    it(`should calculate percentage of correct answers`, () => {
        round.takeTurn(`true`);
        round.takeTurn(`true`);
        round.takeTurn(`find()`);

        let calculateCorrect = round.calculatePercentCorrect();
        expect(calculateCorrect).to.equal(66)
    })

    it(`should give a round ending message`, () => {
        round.takeTurn(`true`);
        round.takeTurn(`true`);
        round.takeTurn(`find()`);

        expect(round.endRound()).to.equal(`** Round over! ** You answered 66% of the questions correctly!`)
    })
})    