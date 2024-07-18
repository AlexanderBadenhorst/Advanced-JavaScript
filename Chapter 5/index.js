"use strict";
/*******LOOPS********/

/*******while loops********/ //check page 88 for basic setup framework
// let i = 0; //Basic setup of a while loop
// while (i < 10) {
//   console.log(i);
//   i++;
// }

//looping through an array
// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
// let notFound = true;
// while (notFound && someArray.length > 0) {
//   if (someArray[0] === "Louiza") {
//     console.log("Found her!");
//     notFound = false;
//   } else {
//     someArray.shift();
//     console.log(someArray);
//   }
// }
//this checks if the first index element is Louiza, if not it uses shift method to shorten adn check again until index 0 contains element louiza

//more sophisticated loops
//fibonacci sequence pg 90
// let nr1 = 0;
// let nr2 = 1;
// let temp;
// let fibonacciArray = [];
// while (fibonacciArray.length < 25) {
//   fibonacciArray.push(nr1);
//   temp = nr1 + nr2;
//   nr1 = nr2;
//   nr2 = temp;
// }
// console.log(fibonacciArray);

/******Practice exercise 5.1 pg 90********/
// let max = 10;
// let sol = Math.floor(Math.random() * 11);
// console.log(sol);
// let result = false;
// while (!result) {
//   let userGuess = Number(prompt("Please enter a number between 1 and " + max));
//   if (userGuess === sol) {
//     result = true;
//     alert(`Correct, the number was ${sol}`);
//     console.log(`Correct, the number was ${sol}`);
//   } else if (userGuess > sol) {
//     alert("Your guess is over the correct value");
//     console.log("Your guess is over the correct value");
//   } else {
//     alert("Your guess is under the correct value");
//     console.log("Your guess is under the correct value");
//   }
// }

/******do while loops pg 91********/
// let number;
// do {
//   number = prompt("Please enter a number between 0 and 100: ");
// } while (!(number >= 0 && number < 100));
// //this asks the user for a number between 0 and 100, so it will prompt the user as long as they don't enter a value between those numbers
// alert(number);

/******Practice exercise 5.2 pg 92********/
// let counter = 0;
// let step = 5;
// do {
//   console.log(counter);
//   counter += step;
// } while (counter <= 100);

/******for loops pg 92********/
// for (let i = 0; i < 10; i++) {//i starts at 0, as long as i is less than 10 the loop will run, and every time it runs it increments by 1
//   console.log(i);
// }
//basic for loop that will log 0-9, exactly the same as the very first example on this page

//can also use a for loop to create a sequence and add values to an array
// let arr = [];
// for (let i = 0; i < 100; i++) {
//   arr.push(i);
// }
// console.log(arr);

//we can do the same for specific values, such as even numbers
// let arr = [];
// for (let i = 0; i < 100; i=i + 2) {//note the notation of the final portion of the loop, i is equal to i+2
//   arr.push(i);
// }
// console.log(arr);

/******Practice exercise 5.3 pg 95********/
// let myWork = [];
// for (let i = 0; i < 10; i++) {
//   let status = i % 2 ? true : false;//i modulo 2 just checks if i is divisible by 2
//   let tempObj = { name: `Lesson ${i}`, status };
//   myWork.push(tempObj);
// }
// console.log(myWork);

/******Nested loops pg 95********/
// let arrOfArrays = [];
// for (let i = 0; i < 3; i++){
//     arrOfArrays.push([]);//[[],[],[]] is whats happening here
//     for(let j = 0; j<7; j++){
//         arrOfArrays[i].push(j);//[[0,1,2,3,4,5,6],[0,1,2,3,4,5,6],[0,1,2,3,4,5,6]] is whats happening here
//     }
// }
// //console.log(arrOfArrays);
// console.table(arrOfArrays);//explained at bottom of pg 96, very cool function

/******Practice exercise 5.4 pg 97********/
// let myTable = [];
// let rows = 5;
// let collums = 5;
// let counter = 0;
// for (let i = 0; i < rows; i++) {
//   let tempTable = [];
//   for (let j = 0; j < collums; j++) {
//     counter++;
//     tempTable.push(counter);
//   }
//   myTable.push(tempTable);
// }
// console.table(myTable);

/******Loops and arrays pg 98********/
// let names = ["Chantal", "John", "Maxine", "Bobbi", "Jair"];
// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }
//or you can write it like this
// let names = ["Chantal", "John", "Maxine", "Bobbi", "Jair"];
// for(let i = 0; i < names.length; i++){
//     names[i] = "hello " + names[i];
//     console.log(names);
// }

/******Practice exercise 5.5 pg 100********/
// let grid = [];
// let cells = 64;
// let counter = 0;
// let row;
// for(let i = 0; i < cells + 1; i++){
//     if(counter % 8 == 0){
//         if(row != undefined){
//             grid.push(row);
//         }
//         row = [];
//     }
//     counter++;
//     let tempValue = counter;
//     row.push(tempValue);
// }
// console.table(grid);

/******Practice exercise 5.6 pg 102********/
// let emptArr = [];
// for (let i = 0; i < 10; i++) {
//   emptArr.push(i + 1);
// }
// console.log(emptArr);
// for (let j = 0; j < emptArr.length; j++) {
//   console.log(emptArr[j]);
// }
// for (let value of emptArr) {//check page 101 for the for of loop info
//   console.log(value);
// }

/******for in loop pg 103********/
// let car = {
//   model: "Golf",
//   make: "Volkswagen",
//   year: 1999,
//   color: "Black",
// };
// for (let prop in car) {
//   console.log(car[prop]);//take note of the notation***
// }

/******Practice exercise 5.7 pg 104********/
// let object = {
//   item1: "a",
//   item2: "b",
//   item3: "c",
// };
// for (let prop in object) {
//   console.log(prop, object[prop]);
// }
// let arr = ["item1", "item2", "item3"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(i, arr[i]);
// }

// for (let element in arr) {
//   console.log(element, arr[element]);
// }

/******Looping over objects by converting to an array pg 104********/
// let car = {
//   model: "Golf",
//   make: "Volkswagen",
//   year: 1999,
//   color: "black",
// };
// //what follows is multiple ways to print the results, check pg106
// // let arrKeys = Object.keys(car);
// // console.log(arrKeys);

// // for (let key of Object.keys(car)) {
// //   console.log(key);
// // }

// // let arrKeys = Object.keys(car);
// // for (let i = 0; i < arrKeys.length; i++) {
// //   console.log(arrKeys[i] + ": " + car[arrKeys[i]]);
// // }

// // let arrEntries = Object.entries(car);
// // console.log(arrEntries);

// // for (const [key, value] of Object.entries(car)) {
// //   console.log(key, ":", value);
// // }

/******break and continue pg 107********/
// let cars = [
//   {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//   },
//   {
//     model: "Picanto",
//     make: "Kia",
//     year: 2020,
//     color: "red",
//   },
//   {
//     model: "Peugeot",
//     make: "208",
//     year: 2021,
//     color: "black",
//   },
//   {
//     model: "Fiat",
//     make: "Punto",
//     year: 2020,
//     color: "black",
//   },
// ];
// //break
// //We can also use break to stop looping through the array of cars when we have found a car that matches our demands.
// // for (let i = 0; i < cars.length; i++) {
// //   if (cars[i].year >= 2020) {
// //     if (cars[i].color === "black") {
// //       console.log("I have found my new car:", cars[i]);
// //       break;
// //     }
// //   }
// // }

// //continue
// for (let car of cars) {
//   if (car.color !== "black") {
//     continue;
//   }
//   if (car.year >= 2020) {
//     console.log("we could get this one:", car);
//   }
// }

/******Practice exercise 5.8 pg 111********/
// let output = String("");
// let numSkip = Number(prompt("enter a number between 0 and 9 youd like to skip"));
// for(let i = 0; i < 10; i++){
//     if(i === numSkip){
//         continue;
//     }
//     output += i;
// }
// console.log(output+"\n"+numSkip+" was skipped");

/******break, continue, and nested loops pg 111********/
let groups = [
  ["Martin", "Daniel", "Keith"],
  ["Margot", "Marina", "Ali"],
  ["Helen", "Jonah", "Sambikos"],
];
for (let i = 0; i < groups.length; i++) {
  let matches = 0;
  for (let j = 0; j < groups[i].length; j++) {
    if (groups[i][j].startsWith("M")) {
      matches++;
    } else {
      continue;
    }
    if (matches === 2) {
      console.log("Found a group with two names starting with an M:");
      console.log(groups[i]);
      break;
    }
  }
}
for (let group of groups) {
  for (let member of group) {
    if (member.startsWith("M")) {
      console.log("found one starting with M:", member);
      break;
    }
  }
}

/******break and continue and labeled blocks pg 111********/
outer: for (let group of groups) {
  inner: for (let member of group) {
    if (member.startsWith("M")) {
      console.log("found one starting with M:", member);
      break outer;
    }
  }
}
