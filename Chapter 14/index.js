"use strict";

/**********LOCAL FILE READER*********/
// let message = document.getElementById("message");
// if (window.FileReader) {
//   message.innerText = "Good to go!";
// } else {
//   message.innerText = "No FileReader :(";
// }

//uploading files
// // function uploadFile(files) {
// //   console.log(files[0]);
// //   message.innerText = files[0].name;
// function uploadFile(files) {
//     for (let i = 0; i < files.length; i++) {
//     message.innerHTML += files[i].name + "<br>";
//     }
// }

//reading files
// function uploadAndReadFile(files) {
//   let fr = new FileReader();
//   fr.onload = function (e) {
//     message.innerHTML = e.target.result;
//   };
//   fr.readAsText(files[0]);
// }

/**********Practice exercise 14.1*********/

/**********Getting position data with GeoLocation*********/
// window.onload = init;
// function init() {
//   console.dir(navigator.geolocation);
// }

// window.onload = init;
// function init() {
//   navigator.geolocation.getCurrentPosition(showGeoPosition);
// }
// function showGeoPosition(data) {
//   console.dir(data);
// }

/**********HTML5 canvas*********/
// let canvas = document.getElementById("c1");
// let ctx = canvas.getContext("2d");
// canvas.width = 500; //px
// canvas.height = 500; //px
// ctx.fillStyle = "pink";
// ctx.fillRect(20, 40, 100, 100); //left, top, right, bottom

/**********Practice exercise 14.2*********/

/**********Dynamic canvas*********/
//Adding lines and circles to the canvas
// let canvas = document.getElementById("canvas1");
// let ctx = canvas.getContext("2d");
// canvas.width = 100;
// canvas.height = 100;
// ctx.lineWidth = 2;
// ctx.moveTo(0, 20);
// ctx.lineTo(50, 100);
// ctx.stroke();

//adding circles
// let canvas = document.getElementById("canvas1");
// let ctx = canvas.getContext("2d");
// canvas.width = 150;
// canvas.height = 200;
// ctx.beginPath();
// //arg1: start position x
// //arg2: start position y
// //arg3: radius of the circle
// //arg4: starting angle in radians
// //arg5: ending angle in radians
// ctx.arc(75, 100, 50, 0, Math.PI * 2);
// ctx.stroke();

/**********Practice exercise 14.3*********/

//adding text to canvas
// let canvas = document.getElementById("canvas1");
// let ctx = canvas.getContext("2d");
// canvas.width = 200;
// canvas.height = 200;
// ctx.font = "24px Arial";
// let txt = "Hi canvas!";
// ctx.fillText(txt, 10, 35);

/**********Practice exercise 14.4*********/

//Adding and uploading images to the canvas
// window.onload = function () {
//   let canvas = document.getElementById("c1");
//   canvas.height = 300;
//   canvas.width = 300;
//   let ctx = canvas.getContext("2d");
//   let myImage = document.getElementById("flower");
//   ctx.drawImage(myImage, 10, 10);
// };

//canvas in canvas
// let canvas1 = document.getElementById("canvas1");
// let ctx1 = canvas1.getContext("2d");
// ctx1.strokeRect(5, 5, 150, 100);
// let canvas2 = document.getElementById("canvas2");
// let ctx2 = canvas2.getContext("2d");
// ctx2.beginPath();
// ctx2.arc(60, 60, 20, 0, 2 * Math.PI);
// ctx2.stroke();
// let canvas3 = document.getElementById("canvas3");
// let ctx3 = canvas3.getContext("2d");
// ctx3.drawImage(canvas1, 10, 10);
// ctx3.drawImage(canvas2, 10, 10);

//upload image into canvas
// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// let imgLoader = document.getElementById("imgLoader");
// imgLoader.addEventListener("change", upImage, false);
// function upImage() {
//   let fr = new FileReader();
//   fr.readAsDataURL(event.target.files[0]);
//   fr.onload = function (e) {
//     let img = new Image();
//     img.src = event.target.result;
//     img.onload = function () {
//       canvas.width = img.width;
//       canvas.height = img.height;
//       ctx.drawImage(img, 0, 0);
//     };
//     console.log(fr);
//   };
// }

/**********Practice exercise 14.5*********/

//Adding animations to the canvas
// window.onload = init;
// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// canvas.height = 500;
// canvas.width = 500;
// var pos = {
//   x: 0,
//   y: 50,
// };
// function init() {
//   draw();
// }
// function draw() {
//   pos.x = pos.x + 5;
//   if (pos.x > canvas.width) {
//     pos.x = 0;
//   }
//   if (pos.y > canvas.height) {
//     pos.y = 0;
//   }
//   ctx.fillRect(pos.x, pos.y, 100, 100);
//   window.setTimeout(draw, 50);
// }

/**********Practice exercise 14.6*********/

//Drawing on canvas with a mouse
// window.onload = init; // add this line to the start of the script
// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// canvas.width = 700;
// canvas.height = 700;

// function init() {
//   canvas.addEventListener("mousemove", draw);
//   canvas.addEventListener("mousemove", setPosition);
//   canvas.addEventListener("mouseenter", setPosition);
// }
// let pos = {
//   x: 0,
//   y: 0,
// };
// function setPosition(e) {
//   pos.x = e.pageX;
//   pos.y = e.pageY;
// }
// function draw(e) {
//   if (e.buttons !== 1) return;
//   ctx.beginPath();
//   ctx.moveTo(pos.x, pos.y);
//   setPosition(e);
//   ctx.lineTo(pos.x, pos.y);
//   ctx.lineWidth = 10;
//   ctx.lineCap = "round";
//   ctx.stroke();
// }
// let bgColor = "pink";
// let bgC = document.getElementById("bgColor");
// bgC.addEventListener("change", function () {
//   bgColor = event.target.value;
// });

/**********Practice exercise 14.7*********/

//Saving dynamic images
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// canvas.width = 200;
// canvas.height = 200;
// const penColor = document.getElementById("squareColor");
// penColor.addEventListener("change", function () {
//   color = event.target.value;
//   draw(color);
// });
// document.getElementById("save").addEventListener("click", function () {
//   let dataURL = canvas.toDataURL();
//   document.getElementById("holder").src = dataURL;
// });
// function draw(color) {
//   ctx.fillStyle = color;
//   ctx.fillRect(70, 70, 100, 100);
// }//doesn't work and Jada did not bother explaining why, even when asked!!

//Media on the page

