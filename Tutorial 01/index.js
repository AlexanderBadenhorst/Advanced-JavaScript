"use strict";
/*instructions:
Use the appropriate Web Storage APIs to accomplish the following tasks:

- Prevent the Session pane’s To-Do items from disappearing whenever users reload the browser.
- Prevent the Local section’s To-Do items from disappearing whenever users reload or close their browser tab (or window).
- Auto-display the Session section's previously added tasks on page reload.
- Auto-display the Local section's previously added tasks on page reload (or browser reopen).*/

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
  const localInputEle = document.getElementById(
    "local-storage-todo-input-ele"
  );
  const localAddTaskBtn = document.getElementById(
    "local-storage-add-task-btn"
  );
  
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