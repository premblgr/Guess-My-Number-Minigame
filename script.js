'use strict';

/* ------------------------------------INITIAL VALUES ------------------------------------- */

let secretNumber = Math.floor(Math.random() * 20 + 1);
console.log(secretNumber);

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

/* ------------------------------- ON CHECK BUTTON CLICK--------------------------- */

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  /* -----------------------------------GUESS LOGIC-------------------------------------------*/
  if (!guess) {
    displayMessage('Please enter a number...');
  } else if (guess > 20) {
    displayMessage('Please enter a valid number...');
    document.querySelector('body').style.backgroundColor = 'red';
  } else if (guess === secretNumber) {
    displayMessage(
      'Correct answer! Play again by pressing the "try again" button'
    );
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.guess').readOnly = true;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    /*------------------------------- SCORE LOGIC----------------------------- */
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Number too high' : 'Number too low'
      );
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#222';
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.background = 'red';
    }
  }
});

/* -----------------------------ON AGAIN BUTTON CLICK------------------------- */
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').readOnly = false;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
