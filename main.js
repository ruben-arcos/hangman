"use strict";
console.clear();
const keyboard = document.getElementById("keyboard");

// need an array of words, that way we can pull a random word
let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const wordDisplay = document.querySelector(".wordDisplay")
const guessesText = document.querySelector(".incorrectGuess b")
const keyboardDiv = document.querySelector(".keyboard");

let currentWord;
let correctLetters = [];
let wrongGuessCount = 0;
const maxGuesses = 6;

const randomWord = () => {
  const {word, hint} = words[Math.floor(Math.random() * words.length)]
  currentWord = word;
  console.log(word);
  document.querySelector(".hintText b").innerText = hint;
  wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
}

const gameOver = (isVictory) => {
  
}

const initGame = (button, clickedLetter) => {
  if(currentWord.includes(clickedLetter)) {
    [...currentWord].forEach((letter, index) => {
      if(letter === clickedLetter) {
        correctLetters.push(letter);
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
      }
    })
  } else {
    wrongGuessCount++;
  }
  button.disabled = true;
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

  if (wrongGuessCount === maxGuesses)
  return gameOver(false);
  if (correctLetters.length === currentWord.length)
  return gameOver(true)
}

//creating keyboard buttons
for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button);
  button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)))
}

randomWord();






let answer = "";

let maxWrong = 6;
