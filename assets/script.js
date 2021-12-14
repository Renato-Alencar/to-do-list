const ADD_TASK = document.getElementById("todo-input__btn");
const INPUT_TASK = document.getElementById("todo-input__input");
const TODO_TASKS = document.getElementById("todo-tasks");

function createTask(value) {
  const TASK = document.createElement("label");
  const CHECKBOX_TASK = document.createElement("input");
  const SPAN_TEXT = document.createElement("span");
  const DELETE_TASK = document.createElement("button");

  CHECKBOX_TASK.setAttribute("type", "checkbox");
  CHECKBOX_TASK.setAttribute("name", value);
  CHECKBOX_TASK.setAttribute("id", value);

  TASK.appendChild(CHECKBOX_TASK);
  TASK.appendChild(SPAN_TEXT);
  TASK.appendChild(DELETE_TASK);
  TASK.setAttribute("class", "new-task");
  TASK.setAttribute("for", value);

  DELETE_TASK.innerHTML = "&#10005;";
  DELETE_TASK.setAttribute("id", "remove-task");
  DELETE_TASK.addEventListener("click", () => {
    TASK.parentNode.removeChild(TASK);
  });

  SPAN_TEXT.setAttribute("class", "text-task");
  SPAN_TEXT.innerHTML = value;

  TODO_TASKS.appendChild(TASK);
}

ADD_TASK.addEventListener("click", (event) => {
  event.preventDefault();

  createTask(INPUT_TASK.value);

  INPUT_TASK.value = "";
});
