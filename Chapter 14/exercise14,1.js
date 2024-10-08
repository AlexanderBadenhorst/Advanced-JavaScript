'use strict';

const message = document.getElementById("message");
const output = document.querySelector(".output");
const myInput = document.querySelector("input");
myInput.addEventListener("change", uploadAndReadFile);
function uploadAndReadFile(e) {
  const files = e.target.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const img = document.createElement("img");
    img.classList.add("thumb");
    img.file = file;
    output.appendChild(img);
    const reader = new FileReader();
    reader.onload = (function (myImg) {
      return function (e) {
        myImg.src = e.target.result;
      };
    })(img);
    reader.readAsDataURL(file);
  }
}
