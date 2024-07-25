"use strict";

/********Global methods********/
/********Decoding and encoding URIs********/
// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);

/********decodeUriComponent() and encodeUriComponent()********/
// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURIComponent(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log("Decoded:", decoded_uri);

/********Practice exercise 8.1********/
// let var1 = "How's%20it%20going%3F";
// let var2 = "How's it going?";
// let decode1 = decodeURIComponent(var1);
// let encode1 = encodeURIComponent(var2);

// console.log(decode1);
// console.log(encode1);

// let uri = "http://www.basescripts.com?=Hello World";
// let encoded1 = encodeURI(uri);
// console.log(encoded1);

/*******Parsing numbers********/
// let str_int = "6";
// let int_int = parseInt(str_int);
// console.log("Type of ", int_int, "is", typeof int_int);

// let str_nan = "hello!";
// let int_nan = parseInt(str_nan);
// console.log("Type of", int_nan, "is", typeof int_nan);

/*******Making floats with parseFloat()********/
// let str_float = "7.6";
// let float_float = parseFloat(str_float);
// console.log("Type of", float_float, "is", typeof float_float);

// let str_int = "6";
// let float_int = parseFloat(str_int);
// console.log("Type of", float_int, "is", typeof float_int);

// let str_binary = "0b101";
// let float_binary = parseFloat(str_binary);
// console.log("Type of", float_binary, "is", typeof float_binary);
// let str_nan = "hello!";
// let float_nan = parseFloat(str_nan);
// console.log("Type of", float_nan, "is", typeof float_nan);

/*******Filtering an array********/
// let arr = ["squirrel", 5, "Tjed", new Date(), true];
// function checkString(element, index) {
// return typeof element === "string";
// }
// let filterArr = arr.filter(checkString);
// console.log(filterArr);

// //Checking a condition for all elements
// console.log(arr.every(checkString));

// //Replacing part of an array with another part of the array
// arr = ["grapefruit", 4, "hello", 5.6, true];
// arr.copyWithin(0, 3, 4);
// arr = ["grapefruit", 4, "hello", 5.6, true];
// arr.copyWithin(0, 3, 5);
// let arr = ["grapefruit", 4, "hello", 5.6, true, false];
// arr.copyWithin(0, 3);
// console.log(arr);

/*******Mapping the values of an array********/
// let arr = [1, 2, 3, 4];
// let mapped_arr = arr.map(x => x + 1);
// console.log(mapped_arr);

/*******Finding the last occurrence in an array********/
// let bb = ["so", "bye", "bye", "love"];
// console.log(bb.lastIndexOf("bye"));
// let bb = ["so", "bye", "bye", "love"];
// console.log(bb.lastIndexOf("hi"));

/*******Practice exercise 8.2********/
// let arr = [
//   "Laurence",
//   "Mike",
//   "Larry",
//   "Kim",
//   "Joanne",
//   "Laurence",
//   "Mike",
//   "Laurence",
//   "Mike",
//   "Laurence",
//   "Mike",
// ];
// let arr2 = arr.filter((value, index, array) => {
//   console.log(value, index, array.indexOf(value));
//   return array.indexOf(value) === index;
// });
// console.log(arr2);

/*******Practice exercise 8.3********/
// let myArr = [1, 4, 5, 6];
// let myArr1 = myArr.map(function (ele) {
//   return ele * 2;
// });
// console.log(myArr1);

// let myArr2 = myArr.map((ele) => ele * 2);
// console.log(myArr2);

/*******Practice exercise 8.4********/
// const val = "thIs will be capiTalized for each word";
// function wordsCaps(str) {
//   str = str.toLowerCase();
//   const tempArr = [];
//   let words = str.split(" ");
//   words.forEach((word) => {
//     let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
//     tempArr.push(temp);
//   });
//   return tempArr.join(" ");
// }
// console.log(wordsCaps(val));

/*******Practice exercise 8.5********/
// let val = "I love JavaScript";
// val = val.toLowerCase();
// let vowels = ["a", "e", "i", "o", "u"];
// vowels.forEach((letter, index) => {
//   console.log(letter);
//   val = val.replaceAll(letter, index);
// });
// console.log(val);

/*******Practice exercise 8.6********/
// console.log(Math.ceil(5.7));
// console.log(Math.floor(5.7));
// console.log(Math.round(5.7));
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 11)); // 0-10
// console.log(Math.floor(Math.random() * 10) + 1); // 1-10;
// console.log(Math.floor(Math.random() * 100) + 1); // 1-100;
// function ranNum(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// for (let x = 0; x < 100; x++) {
//   console.log(ranNum(1, 100));
// }

/*******Practice exercise 8.7********/
// let future = new Date(2025, 5, 15);
// console.log(future);
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// let day = future.getDate();
// let month = future.getMonth();
// let year = future.getFullYear();
// let myDate = `${months[month - 1]} ${day} ${year}`;
// console.log(myDate);
