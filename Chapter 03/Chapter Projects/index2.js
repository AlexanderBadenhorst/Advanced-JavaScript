"use strict";

let inventory = [];

let item1 = {
  name: "Glock",
  model: "43x",
  cost: 13450,
  quantity: 10,
};
let item2 = {
  name: "CZ",
  model: "P10C",
  cost: 11595,
  quantity: 6,
};
let item3 = {
  name: "Sig",
  model: "P365 XMacro Comp",
  cost: 31360,
  quantity: 2,
};

inventory.push(item1, item2, item3);
console.log(inventory);
console.log(inventory[2].quantity);

console.log(inventory[1].cost);
console.log(inventory[0].name);
let item4 = {
    name: "Canik",
    model: "Mete SFX",
    cost: 18650,
    quantity: 3,
  }
inventory.splice(0,0,item4);
console.log(inventory);
