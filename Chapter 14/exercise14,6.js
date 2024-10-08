"use strict";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const ballSize = 10;
let x = canvas.width / 2;
let y = canvas.height / 2;
let dirX = 1;
let dirY = 1;
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballSize, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}
function move() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  if (x > canvas.width - ballSize || x < ballSize) {
    dirX *= -1;
  }
  if (y > canvas.height - ballSize || y < ballSize) {
    dirY *= -1;
  }
  x += dirX;
  y += dirY;
}
setInterval(move, 10);
