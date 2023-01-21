"use strict";

// console.log(document.querySelector('.message').textContent); //gets text content from "message" class
// document.querySelector('.message').textContent = 'Correct Number!'; //changes the text content of "message" class

// document.querySelector('.number').textContent = "12";
// document.querySelector('.score').textContent = "10";

// document.querySelector(".guess").value = "23";
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // no input
  if (!guess) {
    // document.querySelector(".message").textContent = "No Number!";
    displayMessage("No Number!");

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    // document.querySelector(".message").textContent = "Correct Number!";
    displayMessage("Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //when guess is incorrect
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      //   document.querySelector(".message").textContent =
      //     guess > secretNumber ? "Too high" : "Too low";
      displayMessage(guess > secretNumber ? "Too high" : "Too low");
      document.querySelector(".score").textContent = score;
    } else {
      //   document.querySelector(".message").textContent = "Game Over!";
      displayMessage("Game Over!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(".number").textContent = "?";
  //   document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
