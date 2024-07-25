"use strict";
//Math multiplication table

let multiTable = [];
let val1 = 13;
for (let i = 0; i < val1; i++) {
  let temp = [];
  for (let j = 0; j < val1; j++) {
    temp.push(i * j);
  }
  multiTable.push(temp);
}
console.table(multiTable);
