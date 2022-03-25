# FlashCards
## Overview

* FlashCards is a quiz designed to be run in the terminal/command line. The application presents users one question at a time, and allows them to select from a list of possible answers. At the end, the application will calculate and return the percentage of correct answers. 

## Technologies Used
* JavaScript (ES6)
* MAC terminal
* [mocha testing framework](https://mochajs.org/)
* [chai assertion library](https://www.chaijs.com/)
* git 
* [gitHub](https://github.com)

---
---
## Application in action

![flashcards](https://user-images.githubusercontent.com/92772785/160030546-0ae3c8b2-0490-4b89-a45a-c127f1bcb9f4.gif)

---
## Installation/Setup Instructions

1. On the top right corner of this page, click the `Fork` button.

2. Once forked, click the green **Code** button, and copy the remote address. 
    * *Note: SSH is recommended over HTTPS, as SSH is more secure, but either will work.*

3. In your terminal, type the following, replacing [remote-address] with the address copied during step 2, above.

```bash
git clone [remote-address] 
```

4. Once you have cloned the repo, change directories into the directory:

```bash
cd flashcards-starter
```

5. Run the game:

```bash
node index.js
```
---
## User interactions

### Start of game

* When the game starts, you will be greeted with the message  "Welcome to FlashCards! You are playing with 30 cards."


Note:  the cards will be in random order each time the application is run.


### Quit current game
* To end the game while it is in progress, press `CTRL` + `C` on your keyboard at any time during the game.
    
### Identify selected Answer

* A list of **possible answers** will be displayed under each question. 
* The **selected answer** will be blue, while unselected answers will be white. 
    * The first answer on the list will be selected by default, each time a new question is presented.

### Select different answer

* To select an answer other than the currently selected answer, use the &#8593; or &#8595;  keys on your keyboard. 

* You may also type in the number that corresponds to the answer you would like to submit.

### Submit guess

* Once the answer you believe to be correct is selected or corresponding number is typed in, press `Enter` on your keyboard to submit. 
    * Your guess will be displayed, in blue, next to the question. 
    * The question's possible answers will be replaced by feedback, indicating whether your guess was correct or incorrect.
    * The application will pause to allow you to review the feedback.


### Moving to the next question

* Once you have reviewed the provided feedback for the previous question, press `Enter` on your keyboard to display both the next question, and its possible answers. 

### End of game

* Once you have completed all cards, you will receive a message that includes, "** Round over! **" along with the percentage of questions you answered correctly.
  

---
