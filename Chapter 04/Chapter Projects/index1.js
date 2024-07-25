"use strict";
//Evaluating a number game

let usernum = Number(prompt("Please enter a number"));//prompt user for a number
let dynamicNum = 256;//dynamic number value (i think)
let message = "";//empty message variable
if (usernum > dynamicNum) {//check if user number is greater than the dynamic value
  message = `${usernum} is greater than ${dynamicNum}`;
} else if (usernum === dynamicNum) {//check if the values are equal
  message = `${usernum} is the same as ${dynamicNum}`;
} else {//check if the number is lesser than the dynamic one
  message = `${usernum} is less than ${dynamicNum}`;
}
console.log(message);