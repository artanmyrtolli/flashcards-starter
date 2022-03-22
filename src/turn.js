class Turn {
    constructor(guess, card){
        this.userGuess = guess;
        this.card = card;
    }

    returnGuess() {
        return this.userGuess
    }

    returnCard() {
        return this.card
    }

    evaluateGuess() {
        if (this.userGuess === this.card.correctAnswer) {
            this.correct = true;
            return true;
        }
        this.correct = false;
        return false;
    }

    giveFeedback() {
        if (this.userGuess === this.card.correctAnswer) {
            return `Correct!`;
        }
        return `Incorrect!`;
    }
}


module.exports = Turn;