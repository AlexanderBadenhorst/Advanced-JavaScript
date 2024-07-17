"use strict";
//Rock Paper Scissors game

let rpsArr = ["Rock", "Paper", "Scissors"]; //1.
let playerNum = Math.floor(Math.random() * 3); //2.
let compNum = Math.floor(Math.random() * 3); //2.
let message = `Player: ${playerNum}\nComputer: ${compNum}\nFinal result: `; //3.
if (playerNum === compNum) {//4.
  console.log(`${message}Draw!`);
} else if (playerNum > compNum) {//5.
  if (compNum == 0 && playerNum == 2) {
    console.log(`${message}Computer Wins!`);
  } else {
    console.log(`${message}Player wins!`);
  }
} else {
  if (compNum == 2 && playerNum == 0) {
    console.log(`${message}Player wins!`);
  } else {
    console.log(`${message}Computer Wins!`);
  }
}
