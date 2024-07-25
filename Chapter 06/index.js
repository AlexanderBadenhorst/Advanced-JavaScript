"use strict";

/*****Basic functions pg118*****/
/*Invoking functions: the syntax
nameOfTheFunction();
functionThatTakesInput("the input", 5, true);*/

//Writing functions: a simple function that asks the user for their name
// function sayHello() {
//   let you = prompt("What's your name? ");
//   console.log("Hello", you + "!");
// }
// sayHello();

/*****Practice exercise 6.1 pg120*****/
// function adder(a, b) {
//   return a + b;
// }
// let val1 = 10;
// let val2 = 20;
// console.log(adder(val1, val2));
// console.log(adder(20, 30));

/*****Practice exercise 6.2 pg120*****/
// let adj = ["super", "wonderful", "bad", "angry", "careful"];

// function myFun() {
//   let question = prompt("What is your name?");
//   let nameAdj = Math.floor(Math.random() * adj.length);
//   console.log(adj[nameAdj] + " " + question);
// }
// myFun();

/*****Practice exercise 6.3 pg120*****/
// let val1 = 10;
// let val2 = 5;
// let operat = "-";
// function cal(a, b, op) {
//   if (op == "-") {
//     console.log(a - b);
//   } else {
//     console.log(a + b);
//   }
// }
// cal(val1, val2, operat);

//Arrow functions: basic syntax
//(param1, param2) => body of the function;
// no parameters / () => body of the function;
//one parameter / param => body of the function;
//(param1, param2) => {
// line 1;
// any number of lines;
//};

//Rest parameter
// function someFunction(param1, param2) {
//   console.log(param1, param2);
// }
// someFunction("hi", "there!", "How are you?");

/*****Practice exercise 6.4 pg129*****/
// let myArr = [];

// for (let x = 0; x < 10; x++) {
//   let val1 = 5 * x;
//   let val2 = x * x;
//   let res = cal(val1, val2, "+");
//   myArr.push(res);
// }
// console.log(myArr);
// function cal(a, b, op) {
//   if (op == "-") {
//     return a - b;
//   } else {
//     return a + b;
//   }
// }

/*****Practice exercise 6.5 pg137*****/
// let val = "1000";

// (function () {
//   let val = "100"; // local scope variable
//   console.log(val);
// })();

// let result = (function () {
//   let val = "Laurence";
//   return val;
// })();
// console.log(result);
// console.log(val);

// (function (val) {
//   console.log(`My name is ${val}`);
// })("Laurence");

//Recursive functions
// function getRecursive(nr) {
//   console.log(nr);
//   getRecursive(--nr);
// }
// getRecursive(3);

// function getRecursive(nr) {
//   console.log(nr);
//   if (nr > 0) {
//     getRecursive(--nr);
//   }
// }
// getRecursive(3);

// function logRecursive(nr) {
//   console.log("Started function:", nr);
//   if (nr > 0) {
//     logRecursive(nr - 1);
//   } else {
//     console.log("done with recursion");
//   }
//   console.log("Ended function:", nr);
// }
// logRecursive(3);

/*****Practice exercise 6.6 pg140*****/
// function calcFactorial(nr) {
//   console.log(nr);
//   if (nr === 0) {
//     return 1;
//   } else {
//     return nr * calcFactorial(--nr);
//   }
// }
// console.log(calcFactorial(4));

/*****Practice exercise 6.7 pg142*****/
// let start = 10;
// function loop1(val) {
//   console.log(val);
//   if (val < 1) {
//     return;
//   }
//   return loop1(val - 1);
// }
// loop1(start);
// function loop2(val) {
//   console.log(val);
//   if (val > 0) {
//     val--;
//     return loop2(val);
//   }
//   return;
// }
// loop2(start);

/*****Practice exercise 6.8 pg143*****/
// let test = function (val) {
//   console.log(val);
// };
// test("hello 1");

// function test1(val) {
//   console.log(val);
// }
// test1("hello 2");

//Function callbacks
// function doFlexibleStuff(executeStuff) {
//   executeStuff();
//   console.log("Inside doFlexibleStuffFunction.");
// }
// doFlexibleStuff(functionVariable);