"use strict";

/*****CALLBACKS*****/
// function judge(grade) {
//   switch (true) {
//     case grade == "A":
//       console.log("You got an", grade, ": amazing!");
//       break;
//     case grade == "B":
//       console.log("You got a", grade, ": well done!");
//       break;
//     case grade == "C":
//       console.log("You got a", grade, ": alright.");
//       break;
//     case grade == "D":
//       console.log("You got a", grade, ": hmmm...");
//       break;
//     default:
//       console.log("An", grade, "! What?!");
//   }
// }
// function getGrade(score, callback) {
//   let grade;
//   switch (true) {
//     case score >= 90:
//       console.log(score+"%");
//       grade = "A";
//       break;
//     case score >= 80:
//       console.log(score+"%");
//       grade = "B";
//       break;
//     case score >= 70:
//       console.log(score+"%");
//       grade = "C";
//       break;
//     case score >= 60:
//       console.log(score+"%");
//       grade = "D";
//       break;
//     default:
//       console.log(score+"%");
//       grade = "F";
//   }
//   callback(grade);
// }
// getGrade(95, judge);
// getGrade(85, judge);
// getGrade(75, judge);
// getGrade(65, judge);
// getGrade(55, judge);

/*****Practice exercise 13.1*****/
// let fullname = prompt("Enter your full name please: ");
// function greet(fullname) {
//   console.log(`Welcome, ${fullname[0]} ${fullname[1]}`)
// }
// function processCall(user, callback) {
//   fullname = user.split(" ");
//   callback(fullname);
// }
// processCall(fullname, greet);

/*****Promises*****/
// let promise = new Promise(function (resolve, reject) {
//   // do something that might take a while
//   // let's just set x instead for this example
//   let x = 20;
//   if (x > 10) {
//     resolve(x); // on success
//   } else {
//     reject("Too low"); // on error
//   }
// });
// promise.then(
//   //resolve
//   function (value) {
//     console.log("Success:", value);
//   },
//   function (error) {
//     //reject
//     console.log("Error:", error);
//   }
// );

//chaining promisses
// const promise = new Promise((resolve, reject) => {
//   resolve("success!");
// })
//   .then((value) => {
//     console.log(value);
//     return "we";
//   })
//   .then((value) => {
//     console.log(value);
//     return "can";
//   })
//   .then((value) => {
//     console.log(value);
//     return "chain";
//   })
//   .then((value) => {
//     console.log(value);
//     return "promises";
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((value) => {
//     console.log(value);
//   });

//chain with reject
// const promise = new Promise((resolve, reject) => {
//   reject("oops... ");
// })
//   .then((value) => {
//     console.log(value);
//     return "we";
//   })
//   .then((value) => {
//     console.log(value);
//     return "can";
//   })
//   .then((value) => {
//     console.log(value);
//     return "chain";
//   })
//   .then((value) => {
//     console.log(value);
//     return "promises";
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((value) => {
//     console.log(value);
//   });

/*****Practice exercise 13.2*****/
// const promise1 = new Promise((resolve, reject)=>{
//         resolve("Start Counting");
// });

// function counter(val){
//     console.log(val);
// }

// promise1
//     .then(value => {counter(value); return 'one'})
//     .then(value => {counter(value); return 'two'})
//     .then(value => {counter(value); return 'three'})
//     .then(value => {counter(value);});

/*****ASYNC AND AWAIT*****/
// function saySomething(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("something" + x);
//     }, 2000);//2000ms aka 2seconds
//   });
// }
// async function talk(x) {
//   const words = await saySomething(x);
//   console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);

/*****Practice exercise 13.3*****/
var counter = 0;

function outputTime(val){
    return new Promise(resolve => {
        setTimeout(()=> {
            counter++;
            resolve(`x value ${val} counter: ${counter}`);
        }, 1000);
    });
}
async function aCall(val){
    console.log(`ready ${val} counter: ${counter}`);
    const reso = await outputTime(val);
    console.log(reso);
}
for(let x = 1; x < 4; x++){
    aCall(x);
}

/*****Event loop*****/
// console.log("Hi there");
// setTimeout(() => console.log("Sorry I'm late"), 1000);
// console.log(add(4, 5));
// function add(x, y) {
//   return x + y;
// }
