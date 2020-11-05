'use strict';

// Set Guess random between 1 and 20.
// Set initial Score value to 20
// Set initial highScore value 0
// implement check button
// if input is not a number/empty then print No number in place of starting game...
// if input number is lower than random number then change starting game string to Too low!
// if input number is higher than random number then change starting game string to Too high!
// if input number matches the random numer then print correct number and also change guess box that number inplace of ? also change backgroup color.
// Decrease score counter after each wrong guess.
// check if score is higher then highscore if it's greater then set to it new highscore.
// Implement Again/reset button

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20; // This is a state vaiable
let highScore = 0; // initial highScore value

// Creating a funciton for repeatative code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// click a check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there was no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number';
    displayMessage('⛔ No number');
  }

  // When Guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈 Too high!' : '📉 Too low!'; // used Ternary Operator for Guess too high or too low
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--; // score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // Guess is correct
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347'; // Changing CSS
    document.querySelector('.number').style.width = '30rem'; // Changing CSS

    // Set HighScore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

// Game reset button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1); // reassign the random number value
  document.querySelector('.guess').value = '';
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = `?`;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
