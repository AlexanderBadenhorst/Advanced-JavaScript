"use strict";
//Create a recursive function
const main = function counter(i) {
  console.log(i);
  if (i < 10) {
    return counter(i + 1);
  }
  return;
};
main(4);
