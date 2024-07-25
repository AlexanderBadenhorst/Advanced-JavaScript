"use strict";
//Friend checker game

let name1 = String(prompt("Please enter a name: "));//enter a friend name
let message = "";//empty message field
switch(name1){
    case "Matthew":
    case "Mark":
    case "Luke":
    case "John":
    message = `${name1} is a friend!`;
    break;
    default:
    message = `I do not know ${name1}`;
}
console.log(message);