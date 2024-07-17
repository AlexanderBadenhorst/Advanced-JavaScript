"use strict";

/***********if and if else statements*********/
// let rain = false;
// if (rain) {//executes if rain is true
//   console.log("** Taking my umbrella when I need to go outside **");
// } else {//executes if rain is false
//   console.log("** I can leave my umbrella at home **");
// }

// let age = Number(prompt("Please enter your age: "));
// if(age < 18){
//     alert("We're very sorry, but you can't get in if you're under 18");
// }
// else{
//     alert("Welcome!")
// };

/***********Practice exercise 4.1*********/
// let bool = false;
// console.log(bool);
// if(bool){
//     console.log("The boolean is true")
// } else{
//     console.log("The boolean is false")
// }
// if(!bool){
//     console.log("The boolean is !NOT true")
// }

/***********else if statements*********/
// let age = prompt("Please enter your age: ");
// let cost = 0;
// let message;
// if(age < 3){//checks ages up to age 3
//     cost = 0;
//     message = "Access is free for anyone under 3";
// } else if (age >= 3 && age < 12){//checks ages between 3 and 11
//     cost = 5;
//     message = "A child discount applies, therefor the fee is 5 dollars";
// } else if(age >= 12 && age < 65){//checks ages 12 to 64
//     cost = 10;
//     message = "A regular ticket costs 10 dollars.";
// } else {//age 65 and up
//     cost = 7;
//     message = "Pensioner discount! A ticket is 7 dollars";
// }

// console.log(message);
// console.log(`Your total cost is ${cost} dollars`);

/***********Practice exercise 4.2*********/
// let age = Number(prompt("Please enter your age: "));
// let message;
// if(age >= 21){
//     message = "Come in my friend, it's time to dop!!";
// } else if(age >= 19){
//     message = "You can come in, but no karate water for you!";
// } else{
//     message = "Eish friend, gaan huis toe asseblief";
// }
// console.log(message);

/***********Conditional ternary operators*********/
//basically an if else in one line
// let age = Number(prompt("Please enter your age: "));
// let access = age < 18 ? "Access denied!" : "Welcome";//before ? is the condition, left of : is checking if, right is checking else basically
// alert(access);

/***********Practice exercise 4.3*********/
// let ID = true;
// let message = (ID) ? "You may enter" : "Entry denied!";
// console.log(message);

/***********switch statements*********/
//if else good for boolean valkues, but when checking many values switch statements are better
//let activity = "Lunch";

// if (activity === "Get up") {
//   console.log("It is 6:30am");
// } else if (activity === "Breakfast") {
//   console.log("It is 7:00AM");
// } else if (activity === "Drive to work") {
//   console.log("It is 8:00AM");
// } else if (activity === "Lunch") {
//   console.log("It is 12.00PM");
// } else if (activity === "Drive home") {
//   console.log("It is 5:00PM");
// } else if (activity === "Dinner") {
//   console.log("It is 6:30PM");
// }
//this is a longwinded way to write some code, below is a streamlined method
// let activity = "dhdfh";
// switch (activity) {
//   case "Get up":
//     console.log("It is 6:30am");
//     break;
//   case "Breakfast":
//     console.log("It is 7:00am");
//     break;
//   case "Drive to work":
//     console.log("It is 8:00am");
//     break;
//   case "Lunch":
//     console.log("It is 12:00pm");
//     break;
//   case "Drive home":
//     console.log("It is 5:00pm");
//     break;
//   case "Dinner":
//     console.log("It is 6:30pm");
//     break;
//     default://the default case pg79
//         console.log("I cannot determine the current time.");
// }

/***********Practice exercise 4.4*********/
// let randoNumber = Math.floor(Math.random() * 6);
// let answer = "";
// let question = String(
//   prompt("Pose a question for the Magic 8 Ball to answer: ")
// );
// switch (randoNumber) {
//   case 0:
//     answer = "It is certain";
//     break;
//   case 1:
//     answer = "Signs point to yes";
//     break;
//   case 2:
//     answer = "Ask again later";
//     break;
//   case 3:
//     answer = "Better not tell you now";
//     break;
//   case 4:
//     answer = "Don't count on it";
//     break;
//   case 5:
//     answer = "Outlook not so good";
//     break;
//   default:
//     answer = "Uh-oh! Something went awry...";
// }
// let output = `Your question was: ${question}\nThe Magic 8 Ball says: ${answer}`;
// console.log(output);

/***********Combining cases*********/
// let grade = prompt("Please enter your grade: ").toUpperCase();
// switch(grade){
//     case"F":
//     case"D":
//     console.log("You've failed");
//     break;
//     case "C":
//     case "D":
//         console.log("You've passed!");
//         break;
//         case "A":
//             console.log("Well done! You've passed with flying colours!");
//             break;
//             default:
//             console.log("Unable to interpret grade..");
// }

/***********Practice exercise 4.5*********/
let prize = Number(prompt("Please enter a number between 0 and 10"));
let output = "My Selection: ";
switch (prize) {
  case 0:
    console.log(`${output}A horse made of diamonds`);
    break;
  case 1:
    console.log(`${output}A fully staffed mansion`);
    break;
  case 2:
    console.log(`${output}A nice bag of potatoes`);
    break;
  case 3:
    console.log(`${output}One single flip-flop!`);
    break;
  case 4:
    console.log(`${output}A free trip to Mars`);
    break;
  case 5:
    console.log(`${output}A garage pie`);
    break;
  case 6:
    console.log(`${output}A case of hunters`);
    break;
  case 7:
    console.log(`${output}$1000000`);
    break;
  case 8:
    console.log(`${output}Love`);
    break;
  case 9:
    console.log(`${output}Vacation to the bush`); //the best prize
    break;
  case 10:
    console.log(`${output}Beans`); //the 2nd best prize
    break;
  default:
    console.log(`${output}Please try again`);
}
