"use strict";

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const str = "Hello World";
ctx.font = "italic 50px Comic";
ctx.fillStyle = "blue";
//ctx.textAlign = 'left';
ctx.fillText(str, 100, 100);
ctx.font = "bold 20px Arial";
ctx.fillStyle = "red";
for (let x = 1; x < 11; x++) {
  ctx.fillText("counter:" + x, 50, 200 + 40 * x);
}
