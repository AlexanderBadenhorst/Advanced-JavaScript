"use strict";
//Menu items price calculator
class Menu {
  #offer1 = 30;
  #offer2 = 70;
  constructor(val1, val2) {
    this.val1 = val1;
    this.val2 = val2;
  }
  calTotal() {
    return this.val1 * this.#offer1 + this.val2 * this.#offer2;
  }
  get total() {
    return this.calTotal();
  }
}

let val1 = new Menu(2, 0);
let val2 = new Menu(1, 3);
let val3 = new Menu(3, 2);
console.log("Order 1: R"+val1.total);
console.log("Order 2: R"+val2.total);
console.log("Order 3: R"+val3.total);
