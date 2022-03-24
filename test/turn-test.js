const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

let turn, card;
describe(`Turn`, () => {
    beforeEach( () => {
        card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        turn = new Turn(`object`, card)
    })

        it(`should be an instance of Card`, () => {         
            expect(turn).to.be.an.instanceof(Turn);
        }); 
        
        it(`should be able to store a user's guess`, () => {
            expect(turn.userGuess).to.equal(`object`)
        })
        
        it(`should be able to store a new Card`, () => {
            expect(turn.card.id).to.equal(1)
            expect(turn.card).to.equal(card);
        })
        
        it(`should be able to return the user's guess`, () => {
            const guess = turn.returnGuess(); 
            expect(guess).to.equal(`object`);
        })
        
        it(`should be able to return the current card in play`, () => {          
            const currentCard = turn.returnCard();
            expect(currentCard.id).to.equal(1);
            expect(currentCard).to.equal(card);
        })
        
        
        it(`should be able to evaluate the user's guess`, () => {
            const card2 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
            const turn2 = new Turn(`wrong`, card2);
            
            const evaluate = turn.evaluateGuess();
            const evaluate2 = turn2.evaluateGuess();
            
            expect(evaluate).to.equal(true);
            expect(evaluate2).to.equal(false);
        })
        
        it(`should give the user feedback on their guess`, () => {            
            const feedback = turn.giveFeedback();
            expect(feedback).to.equal(`Correct!`);
        })
});
    