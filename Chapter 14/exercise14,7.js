"use strict";

window.onload = init;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.style.border = "1px solid black";
const penColor = document.querySelector("#penColor");
const penWidth = document.querySelector("#penWidth");
document.querySelector(".clear").addEventListener("click", clearImg);
canvas.width = 700;
canvas.height = 700;
let pos = {
  x: 0,
  y: 0,
};
function init() {
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mousemove", setPosition);
  canvas.addEventListener("mouseenter", setPosition);
}
function draw(e) {
  if (e.buttons !== 1) return;
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.lineTo(pos.x, pos.y);
  ctx.strokeStyle = penColor.value;
  ctx.lineWidth = penWidth.value;
  ctx.lineCap = "round";
  ctx.stroke();
}
function setPosition(e) {
  pos.x = e.pageX;
  pos.y = e.pageY;
}
function clearImg() {
  const temp = confirm("Clear confirm?");
  if (temp) {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
  }
}
