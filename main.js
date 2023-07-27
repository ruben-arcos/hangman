"use strict";

const wordDisplay = document.querySelector(".wordDisplay");
const guessesText = document.querySelector(".incorrectGuess b");
const keyboardDiv = document.querySelector(".keyboard");

let currentWord;
let correctLetters = [];
let wrongGuessCount = 0;
const maxGuesses = 6;

//selecting a random word and hint from the words.js
const randomWord = () => {
  const { word, hint } = words[Math.floor(Math.random() * words.length)];
  currentWord = word;
  console.log(word);
  document.querySelector(".hintText b").innerText = hint;
  wordDisplay.innerHTML = word
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");
};

const gameOver = (isVictory) => {};

const initGame = (button, clickedLetter) => {
  //checking if clickedLetter exists on the currentWord
  if (currentWord.includes(clickedLetter)) {
    [...currentWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        correctLetters.push(letter);
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
      }
    });
  } else {
    //if clicked letter doesn't exists then update the wrongGuessCount
    wrongGuessCount++;
  }
  button.disabled = true;
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

  if (wrongGuessCount === maxGuesses) return gameOver(false);
  if (correctLetters.length === currentWord.length) return gameOver(true);
};

//Creating keyboard buttons and attaching event listeners
// For each lowercase letter (a to z)
for (let i = 97; i <= 122; i++) {
  // Create a new button element with the letter as its text
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  //Append the button to the keyboardDiv element
  keyboardDiv.appendChild(button);
  // Add an event listener to the button to handle the click event
  button.addEventListener("click", (e) =>
  //Call initGame function with the clicked button and the associated letter as parameters
    initGame(e.target, String.fromCharCode(i))
  );
}

randomWord();
