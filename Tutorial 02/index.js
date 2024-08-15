"use strict";

   //example of synchronus programming
// Define three functions
// function firstTask() {
//     console.log("Task 1");
//   }

//   function secondTask() {
//     console.log("Task 2");
//   }

//   function thirdTask() {
//   console.log("Task 3");
//   }

//   // Execute the functions
//   firstTask();
//   secondTask();
//   thirdTask();


   //example 2
// function someLongRunningFunction() {
//   let start = Date.now();
//   while (Date.now() - start < 5000) {
//     // do nothing
//   }
//   return "Hello";
// }

// console.log("Starting...");

// let result = someLongRunningFunction();
// console.log(result);

// console.log("...Finishing");


   //example 3
// console.log("Start of script");

// setTimeout(function () {
//   console.log("First timeout completed");
// }, 2000);

// console.log("End of script");


   //example 4
// Declare function
// function fetchData(callback) {
//   setTimeout(() => {
//     const data = { name: "John", age: 30 };
//     callback(data);
//   }, 3000);
// }

// // Execute function with a callback
// fetchData(function (data) {
//   console.log(data);
// });

// console.log("Data is being fetched...");


   //example 5: callback hell (the dorito of doom)
// getData(function (a) {
//   getMoreData(a, function (b) {
//     getEvenMoreData(b, function (c) {
//       getEvenEvenMoreData(c, function (d) {
//         getFinalData(d, function (finalData) {
//           console.log(finalData);
//         });
//       });
//     });
//   });
// });


   //example 6: promises
//Initialize a promise
//const myPromise = new Promise(function(resolve, reject) {}); //arrow opperator unnecessary
// console.log(myPromise);


   //example 7: promise that resolves and logs a string after 2 seconds
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello from the promise!");
//   }, 2000);
// });
// console.log(myPromise);


   //consuming a promise
//example 8:
// myPromise
// .then((result) => {
//   console.log(result);
// })
// .catch((error) => {
//   console.log(error);
// });

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     //code here will be executed regardless of the status
//     //of a promise (fulfilled or rejected)
//   });


   //chaining promises
// fetch("https://example.com/data")
//   .then((response) => response.json())
//   .then((data) => processData(data))
//   .then((processedData) => {
//     // do something with the processed data
//   })
//   .catch((error) => console.log(error));


   //error handling
// fetch("https://api.github.com/users/octocat")
//   .then((response) => response.json())
//   .then((data) => {
//     try {
//       //processing received data
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   })
//   .catch((error) => console.log(error));

// promise.all
// let promise1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
// let promise2 = fetch("https://jsonplaceholder.typicode.com/posts/2");
// let promise3 = fetch("https://jsonplaceholder.typicode.com/posts/3");

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });


   //how to fetch API with promises
// fetch('https://some-api.com/data')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


   //async/await
// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const data = await response.json();
//   console.log(data);
// }

// getData();
