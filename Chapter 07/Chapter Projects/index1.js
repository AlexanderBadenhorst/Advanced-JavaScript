"use strict";
//Employee tracking app
class Employee {
  constructor(first, last, years) {
    this.first = first;
    this.last = last;
    this.years = years;
  }
}
let person1 = new Employee("Michael", "Jordan", 12);
let person2 = new Employee("Michael", "Jackson", 8);
let workers = [person1, person2];

Employee.prototype.details = function () {
  return (
    this.first + " " + this.last + " has worked here " + this.years + " years"
  );
};

workers.forEach((person) => {
  console.log(person.details());
});
