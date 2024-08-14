/*********LOCAL STORAGE/SESSION STORAGE***********/

const sessionTodosContainer = document.getElementById(
  "session-storage-todos-container"
);
const sessionInputEle = document.getElementById(
  "session-storage-todo-input-ele"
);
const sessionAddTaskBtn = document.getElementById(
  "session-storage-add-task-btn"
);

function createTodoLiElements(todoArray) {
  return todoArray.map((i, index) => {
    const liElement = document.createElement("li");
    const checkboxEle = document.createElement("input");
    const labelEle = document.createElement("label");

    checkboxEle.setAttribute("type", "checkbox");
    checkboxEle.setAttribute("id", `session-chbx-${index}`);
    labelEle.setAttribute("for", `session-chbx-${index}`);

    if (i.checked) {
      checkboxEle.checked = true;
      labelEle.classList.add("todo-task-done");
    }

    checkboxEle.addEventListener("click", (e) => {
      const todoArr = JSON.parse(sessionStorage.getItem("codesweetlyStore"));
      todoArr[e.target.getAttribute("id").split("-")[2]].checked =
        !todoArr[e.target.getAttribute("id").split("-")[2]].checked;
      sessionStorage.setItem("codesweetlyStore", JSON.stringify(todoArr));
      labelEle.classList.toggle("todo-task-done");
    });

    labelEle.textContent = i.text;
    liElement.append(checkboxEle, labelEle);
    return liElement;
  });
}

window.addEventListener(
  "load",
  (() => {
    const sessionTodoArray =
      JSON.parse(sessionStorage.getItem("codesweetlyStore")) || [];
    const todoLiElements = createTodoLiElements(sessionTodoArray);
    sessionTodosContainer.replaceChildren(...todoLiElements);
    // Log the total items in the browser's session storage to the console:
    console.log(sessionStorage.length);
  })()
);

sessionAddTaskBtn.addEventListener("click", () => {
  const currentTodoArray =
    JSON.parse(sessionStorage.getItem("codesweetlyStore")) || [];
  const newTodoArray = [
    ...currentTodoArray,
    { checked: false, text: sessionInputEle.value },
  ];
  const todoLiElements = createTodoLiElements(newTodoArray);
  sessionStorage.setItem("codesweetlyStore", JSON.stringify(newTodoArray));
  sessionTodosContainer.replaceChildren(...todoLiElements);
  sessionInputEle.value = "";
});

//local storage(change alles from session to local)
const localTodosContainer = document.getElementById(
  "local-storage-todos-container"
);
const localInputEle = document.getElementById("local-storage-todo-input-ele");
const localAddTaskBtn = document.getElementById("local-storage-add-task-btn");

function createTodoLiElements(todoArray) {
  return todoArray.map((i, index) => {
    const liElement = document.createElement("li");
    const checkboxEle = document.createElement("input");
    const labelEle = document.createElement("label");

    checkboxEle.setAttribute("type", "checkbox");
    checkboxEle.setAttribute("id", `local-chbx-${index}`);
    labelEle.setAttribute("for", `local-chbx-${index}`);

    if (i.checked) {
      checkboxEle.checked = true;
      labelEle.classList.add("todo-task-done");
    }

    checkboxEle.addEventListener("click", (e) => {
      const todoArr = JSON.parse(localStorage.getItem("codesweetlyStore"));
      todoArr[e.target.getAttribute("id").split("-")[2]].checked =
        !todoArr[e.target.getAttribute("id").split("-")[2]].checked;
      localStorage.setItem("codesweetlyStore", JSON.stringify(todoArr));
      labelEle.classList.toggle("todo-task-done");
    });

    labelEle.textContent = i.text;
    liElement.append(checkboxEle, labelEle);
    return liElement;
  });
}

window.addEventListener(
  "load",
  (() => {
    const localTodoArray =
      JSON.parse(localStorage.getItem("codesweetlyStore")) || [];
    const todoLiElements = createTodoLiElements(localTodoArray);
    localTodosContainer.replaceChildren(...todoLiElements);
    // Log the total items in the browser's local storage to the console:
    console.log(localStorage.length);
  })()
);

localAddTaskBtn.addEventListener("click", () => {
  const currentTodoArray =
    JSON.parse(localStorage.getItem("codesweetlyStore")) || [];
  const newTodoArray = [
    ...currentTodoArray,
    { checked: false, text: localInputEle.value },
  ];
  const todoLiElements = createTodoLiElements(newTodoArray);
  localStorage.setItem("codesweetlyStore", JSON.stringify(newTodoArray));
  localTodosContainer.replaceChildren(...todoLiElements);
  localInputEle.value = "";
});

/***********CHATBOT********/

const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const inputInitHeight = chatInput.scrollHeight;

// API configuration
const API_KEY = "AIzaSyCj7kopU9AS24NwVMGQ9mEfE39_k1SmAxA"; // Your API key here
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

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

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot")
);
chatbotToggler.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);
