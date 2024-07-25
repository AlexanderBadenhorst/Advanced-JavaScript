"use strict";
//Rock Paper Scissors game

let rpsArr = ["Rock"/*0*/, "Paper"/*1*/, "Scissors"/*2*/]; //1.
let playerNum = Math.floor(Math.random() * 3); //2.
let compNum = Math.floor(Math.random() * 3); //2.
let message = `Player: ${playerNum}\nComputer: ${compNum}\nFinal result: `; //3.
if (playerNum === compNum) {//4.//if values are equal then its a draw
  console.log(`${message}Draw!`);
} else if (playerNum > compNum) {//5.//if players number is higher, execute the following
  if (compNum == 0 && playerNum == 2) {//comp has rock, player has scissors
    console.log(`${message}Computer Wins!`);//rock beats scissors, therefore comp wins
  } else {//scissors beats paper
    console.log(`${message}Player wins!`);
  }
} else {
  if (compNum == 2 && playerNum == 0) {//if comp guessed scissors and player guessed rock
    console.log(`${message}Player wins!`);
  } else {
    console.log(`${message}Computer Wins!`);
  }
}
