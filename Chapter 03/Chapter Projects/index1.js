"use strict";

let theList = [
  "Laurence",
  "Svekis",
  true,
  35,
  null,
  undefined,
  { test: "one", score: 55 },
  ["one", "two"],
];

//remove laurence and [one two] array 
theList.shift();
theList.pop();


//add FIRST to the start of the array
theList.unshift("FIRST");

//assign hello World to fourth item value
theList[3] = "hello World";

//assign MIDDLE to third index value
theList[2] = "MIDDLE";

//just to remove rhe test score object
theList[6] = null;

//add LAST to last portion of array
theList.push("LAST");

//output to console
console.log(theList);