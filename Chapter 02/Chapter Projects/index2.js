"use strict";

//1 inch = 2.54 centimetres.
//2.2046 pounds in a kilo
let inches = prompt("Please enter your height in inches: ");
let pounds = prompt("Please enter your height in lbs: ");
let weight = pounds / 2.2046; //convert to kilos
let height = inches * 2.54; //convert to centimetres
console.log(`Your weight in kg is ${Math.floor(weight)}kg, and your height in cm is ${Math.floor(height)}cm`);
let bmi = weight/(height/100*height/100);
console.log(`Your BMI is ${Math.floor(bmi)}`);
