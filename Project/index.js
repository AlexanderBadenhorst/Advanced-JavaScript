"use strict";

//Chat bot
const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

//User table

let userMessage = null; // Variable to store user's message
const inputInitHeight = chatInput.scrollHeight;

// API configuration chatbot
const API_KEY = "AIzaSyCj7kopU9AS24NwVMGQ9mEfE39_k1SmAxA"; // Your API key here
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

//API Config Users
const USERS_API = "https://jsonplaceholder.typicode.com";

const createChatLi = (message, className) => {
  // Create a chat <li> element with passed message and className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", `${className}`);
  let chatContent =
    className === "outgoing"
      ? `<p></p>`
      : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi; // return chat <li> element
};

const generateResponse = async (chatElement) => {
  const messageElement = chatElement.querySelector("p");

  // Define the properties and message for the API request
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [{ text: userMessage }],
        },
      ],
    }),
  };

  // Send POST request to API, get response and set the reponse as paragraph text
  try {
    const response = await fetch(API_URL, requestOptions);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error.message);

    // Get the API response text and update the message element
    messageElement.textContent =
      data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1");
  } catch (error) {
    // Handle error
    messageElement.classList.add("error");
    messageElement.textContent = error.message;
  } finally {
    chatbox.scrollTo(0, chatbox.scrollHeight);
  }
};

const handleChat = () => {
  userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
  if (!userMessage) return;

  // Clear the input textarea and set its height to default
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  // Append the user's message to the chatbox
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    // Display "Thinking..." message while waiting for the response
    const incomingChatLi = createChatLi("Thinking...", "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingChatLi);
  }, 600);
};

chatInput.addEventListener("input", () => {
  // Adjust the height of the input textarea based on its content
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  // If Enter key is pressed without Shift key and the window
  // width is greater than 800px, handle the chat
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

const getUsers = async () => {
  if (localStorage.getItem("users")) {
    const users = JSON.parse(localStorage.getItem("users"));
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = ""; // Clear the table body

    users.forEach(({ name, username, phone, email }) => {
      const newRow = document.createElement("tr");
      const nameCell = document.createElement("td");
      nameCell.textContent = name;
      newRow.appendChild(nameCell);

      const usernameCell = document.createElement("td");
      usernameCell.textContent = username;
      newRow.appendChild(usernameCell);

      const phoneCell = document.createElement("td");
      phoneCell.textContent = phone;
      newRow.appendChild(phoneCell);

      const emailCell = document.createElement("td");
      emailCell.textContent = email;
      newRow.appendChild(emailCell);

      const checkboxCell = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkboxCell.appendChild(checkbox);
      newRow.appendChild(checkboxCell);

      tableBody.appendChild(newRow);
    });
  } else {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    var response = await fetch(`${USERS_API}/users`, requestOptions);
    var data = await response.json();
    console.log(data);
    localStorage.setItem("users", JSON.stringify(data));

    const tableBody = document.getElementById("table-body");
    data.forEach(({ name, username, phone, email }) => {
      const newRow = document.createElement("tr");
      const nameCell = document.createElement("td");
      nameCell.textContent = name;
      newRow.appendChild(nameCell);

      const usernameCell = document.createElement("td");
      usernameCell.textContent = username;
      newRow.appendChild(usernameCell);

      const phoneCell = document.createElement("td");
      phoneCell.textContent = phone;
      newRow.appendChild(phoneCell);

      const emailCell = document.createElement("td");
      emailCell.textContent = email;
      newRow.appendChild(emailCell);

      const checkboxCell = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkboxCell.appendChild(checkbox);
      newRow.appendChild(checkboxCell);

      tableBody.appendChild(newRow);
    });
  }
};

// Get the table body element
const tableBody = document.getElementById("table-body");

// Get the add user form
const addUserForm = document.getElementById("add-user-form");

// Get the remove user button
const removeUserBtn = document.getElementById("remove-user-btn");

// Add an event listener to the add user form
addUserForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  // Create a new user object
  const user = {
    name,
    username,
    phone,
    email,
  };

  // Add the user to the users array
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);

  // Store the users array in local storage
  localStorage.setItem("users", JSON.stringify(users));

  // Create a new table row
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${username}</td>
    <td>${phone}</td>
    <td>${email}</td>
    <td><input type="checkbox"></td>
  `;

  // Add the new row to the table body
  tableBody.appendChild(newRow);

  // Clear the form fields
  document.getElementById("name").value = "";
  document.getElementById("username").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
});

// Add an event listener to the remove user button
removeUserBtn.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const rowsToRemove = [];

  // Get the rows to remove
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      rowsToRemove.push(checkbox.parentNode.parentNode);
    }
  });

  // Remove the rows
  rowsToRemove.forEach((row) => {
    tableBody.removeChild(row);
    // Remove the user from the users array
    let users = JSON.parse(localStorage.getItem("users"));
    users = users.filter((user) => user.username !== row.cells[1].textContent);
    localStorage.setItem("users", JSON.stringify(users));
  });
});

// Add an event listener to the table body
tableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const row = e.target.parentNode.parentNode;
    tableBody.removeChild(row);
  }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot")
);
chatbotToggler.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);

getUsers();

//users are retrieved from https://jsonplaceholder.typicode.com/users adn stored in local storage