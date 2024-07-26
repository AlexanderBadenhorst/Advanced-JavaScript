"use strict";
let userPassword = prompt("Enter password: ");

const allowed = [
  "password123",
  "passkey",
  "12345",
  "Supercalifragilisticexpialidocious",
];

function passwordChecker(pass) {
  return allowed.includes(pass);
}

function login(password) {
  return new Promise((resolve, reject) => {
    if (passwordChecker(password)) {
      resolve({
        status: true,
      });
    } else {
      reject({
        status: false,
      });
    }
  });
}

function check(pass) {
  login(pass)
    .then((token) => {
      console.log("Approved " + userPassword);
      console.log(token);
    })
    .catch((value) => {
      console.log("Rejected " + userPassword);
      console.log(value);
    });
}

//check('password123');
// check('garballed');
// check('passkey');
// check('sdrfugbuisybdfo');
// check('Supercalifragilisticexpialidocious');
check(userPassword);
