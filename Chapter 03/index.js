"use strict";
/***********ARRAYS*********/
/*let arr1 = new Array("purple", "green", "yellow");
let arr2 = ["black", "orange", "pink"];

console.log(arr1);
console.log(arr2);//better practice

let arr3 = new Array(10);//determines capacity
let arr4 = [10];//adding element with value 10

console.log(arr3);
console.log(arr4);

let arr = ["hi there", 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);*/

// const arr = ["hi there"];
// arr[0] = "new value";
// console.log(arr[0]);

//throws error due to value previously being assigned line21 (perk of using const)
//arr = ["nope, you are attemting to ovveride the array"];

// let cars = ["Toyota", "Renault", "Volkswagen"];
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]);//undefined as no value has been assigned to thius element
// console.log(cars[-1]);//nothing exists here as arr indecies begin at 0

// cars[0] = "Tesla";
// console.log(`Overwritten index 0 as: ${cars[0]}`);
// console.log(cars);

// cars[3] = "Kia";
// cars[-1] = "Fiat";
// console.log(cars[3]);
// console.log(cars[-1]);
// console.log(cars);

// let colors = ["black", "orange", "pink"];
// let booleans = [true, false, false, true];
// let emptyArray = [];
// console.log("Length of colors:", colors.length);
// console.log("Length of booleans:", booleans.length);
// console.log("Length of empty array:", emptyArray.length);

// let lastElement = colors[colors.length - 1];
// console.log(lastElement);

// let numbers = [12, 24, 36];
// numbers[5] = 48;
// console.log(numbers);
// console.log(numbers.length);
// console.log("numbers", numbers);

/************Practice 3.1***********/
// let arr = ["Milk", "Bread", "Apples"];
// console.log(arr);
// console.log(arr.length);
// arr[1] = "Bannanas";
// console.log(arr);

/*********ARRAY METHODS**********/
//PUSH METHOD
// let favFruits = ["grapefruit", "orange", "lemon"];
// favFruits.push("tangerine");
// console.log(favFruits);
// let lengthOfFavFruits = favFruits.push("lime");
// console.log(favFruits);
// console.log(lengthOfFavFruits);

//SPLICE METHOD
// let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// arrOfShapes.splice(2, 0, "square", "trapezoid");
// console.log(arrOfShapes);

//CONCAT
// let arr5 = [1,2,3];
// let arr6 = [4,5,6];
// let arr7 = arr5.concat(arr6);
// //console.log(arr7);
// let arr8 = arr7.concat(7,8,9);
// console.log(arr8);

//DELETING ELEMENTS
// arr8.pop();//pop removes an element from the end of the array
// console.log(arr8);
// arr8.shift();//shift removes a value from the begining of the array
// console.log(arr8);
// arr8.splice(1, 3);//splice (in this instance) locates index 1(number 3) and removes 3 elements starting there (removing 3 4 and 5)
// console.log(arr8);

/******FINDING ELEMENTS*********/
//find locates the actual element, not a value located at index(x)
// let arr8 = [2, 6, 7, 8];
// let findValue = arr8.find((e) => e === 6);//e is element
// let findValue2 = arr8.find((e) => e === 10);
// console.log(findValue);
// console.log(findValue2);//undefined as there is no element 10 in the array

//finding using indexof()
// let findValue3 = arr8.indexOf(6);//returns the value of whats in index 1
// let findValue4 = arr8.indexOf(10);//returns -1 as 10 doesnt exist in this array
// console.log(findValue3, findValue4);

/**********SORTING ELEMENTS*******/
// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// console.log(names);
// names.sort();//sorts the names in alphabetical order
// console.log(names);

// let ages = [18, 72, 33, 56, 40];
// console.log(ages);
// ages.sort();//sorts the values in ascending order
// console.log(ages);

// //reverse function works as advertised
// names.reverse();
// console.log(names);
// ages.reverse();
// console.log(ages);
// //just reverses the order the list is currently in
// names.reverse();
// console.log(names);

/*********Practice exercise 3.2********/
/*let shoppingList = [];
shoppingList.push("Milk", "Bread", "Apples");
console.log(shoppingList);
shoppingList[1] = "Bananas";
console.log(shoppingList);
shoppingList.pop();
console.log(shoppingList);
shoppingList.sort();
console.log(shoppingList);
let milk = shoppingList.indexOf("Milk");
console.log(milk);
shoppingList.splice(1, 0, "Carrots", "Lettuce");
console.log(shoppingList);
let newList = ["Juice", "Pop"];
console.log(newList);
let shoppingList2 = shoppingList.concat(newList).concat(newList);
console.log(shoppingList2);
let pop = shoppingList2.lastIndexOf("Pop");//use lastIndexOf to return last index value
console.log(pop);*/

/*********MULTIDIMENSIONAL ARRAYS********/
//an array within an array
// let val1 = [1, 2, 3];
// let val2 = [4, 5, 6];
// let val3 = [7, 8, 9];
// let arrOfArrays = [val1, val2, val3];
// console.log(arrOfArrays);

// //the following is a two dimensional array
// let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];//this does the above all in one easy step
// console.log(arrOfArrays2);

// //accessing elements from inner arrays
// let val4 = arrOfArrays[1][2];//call the index of the array where 6 is located in, then calling the index position of 6
// console.log(val4);

// //a true multidimensional array (an array, within an array, within an array)
// let arrOfArrOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays]
// console.log(arrOfArrOfArrays);
// //how to call elements from this
// let middleValue = arrOfArrOfArrays[1][1][1];
// console.log(middleValue);//this returns 5, as it fetches the second arrofarrays, fetches the second array within that, and then the value at index 1, which is 5

/*********Practice exercise 3.3********/
// let val1 = [1, 2, 3];
// let newArr = [val1, val1, val1];
// let val2 = newArr[1][1];
// console.log(val2);

/*********Objects in JavaScript********/
//let arr = [0, 1, 2];
//console.log(typeof arr);//this returns object as js interperets it as an object
// let dog = {
//   dogName: "JavaScript",
//   weight: 2.4,
//   color: "brown",
//   breed: "chihuahua",
//   age: 3,
//   burglarBiter: true,
// };
// console.log(dog);

// let dogColor = dog["color"];
// let dotColor1 = dog.color;//these both do the same thing
// console.log(dogColor, dotColor1);

// //updating object values
// dog["color"] = "blue";
// dog.weight = 2.3;//again, 2 methods/notations to reassign values
// console.log(dog);

// dog["age"] = "three";
// let variable = "age";
// console.log(dog[variable]);

// variable = "breed";
// console.log(dog[variable]);

// dog[variable] = "dachshund";
// console.log(dog["breed"]);

/*********Practice exercise 3.4********/
// let myCar = {
//     make: "Honda",
//     model: "Civic",
//     hasVTEC: true,
//     color: "Red",
//     doors: 3, //its a hatchback i swear
//     wheels: 4 //i couldn't afford the spare wheel :(
// }

// let color = "color";
// myCar[color] = "grey";

// color = "forSale";
// myCar[color] = true;
// console.log(myCar);

// console.log(myCar.make);
// console.log(myCar.model);

// console.log(myCar.forSale);

/*********Working with objects and arrays********/
//Objects in objects
// let company = {
//   companyName: "Healthy Candy",
//   activity: "food manufacturing",
//   address: {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida",
//   },
//   yearOfEstablishment: 2021,
// };
// console.log(company);

// company.address.zipcode = "33117";
// company["address"]["number"] = "100";//these are two different methods to access and modify the object within the object(address)
// console.log(company);

//Arrays in objects
// company = {
//     companyName: "Healthy Candy",
//     activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
//     address: {
//         street: "2nd street",
//         number: "123",
//         zipcode: "33116",
//         city: "Miami",
//         state: "Florida"
//         },
//         yearOfEstablishment: 2021
// };

// let activity = company.activities[1];//

//Objects in arrays
// let addresses = [
//   {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida",
//   },
//   {
//     street: "1st West avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Texas",
//   },
// ];
// console.log(addresses);

// let streetName = addresses[0].street;
// console.log(streetName);

//Objects in arrays in objects
// let company = {
//   companyName: "Healthy Candy",
//   activities: [
//     "food manufacturing",
//     "improving kids' health",
//     "manufacturing toys",
//   ],
//   address: [
//     {
//       street: "2nd street",
//       number: "123",
//       zipcode: "33116",
//       city: "Miami",
//       state: "Florida",
//     },
//     {
//       street: "1st West avenue",
//       number: "5",
//       zipcode: "75001",
//       city: "Addison",
//       state: "Texas",
//     },
//   ],
//   yearOfEstablishment: 2021,
// };
// console.log(company);

// let streetName = company.address[0].street;
// console.log(streetName);

/*********Practice exercise 3.5********/
// let people = { firends: [] };
// let frnd1 = { first: "Fraser", last: "Carpenter", id: 1 };
// let frnd2 = { first: "Skye", last: "Denniston", id: 2 };
// let frnd3 = { first: "Kayla", last: "McLintlock", id: 3 };
// people.firends.push(frnd1, frnd2, frnd3);
// console.log(people);

/*********self check quiz********/

// const myArr2 = [];
// myArr2[10] = 'test'
// console.log(myArr2);
// console.log(myArr2[2]);
// const myArr3 = [3,6,8,9,3,55,553,434];
// myArr3.sort();
// myArr3.length = 0;
// console.log(myArr3[0]);