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

function randomWord() {
  answer =
    programming_languages[
      Math.floor(Math.random(words) * programming_languages.length)
    ];
}

const btnClick = (event, letter) => {
  console.log(event.target);
  console.log("You just clicked on", letter);
};

alphabet.forEach((letter) => {
  const button = document.createElement("button");
  button.classList.add("letters");
  button.setAttribute("type", "button");
  button.addEventListener("click", (event) => {
    btnClick(event, letter);
  });
  button.innerText = letter.toUpperCase();
  keyboard.appendChild(button);
});

let answer = "";

let maxWrong = 6;
