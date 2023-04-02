const todoList = document.querySelector("#todos");
const createButton = document.querySelector("#createButton");
const deleteCheckedButton = document.querySelector("#deleteChecked");
const placeholder = document.querySelector("#placeholder");

const createTodo = (text) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");
  const todoBody = document.createElement("div");
  todoBody.classList.add("todoBody");

  const { checkButton, deleteButton } = generateButtons(todoBody);

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentTime = date.getHours() + ":" + date.getMinutes();

  let currentDate = `${day}-${month}-${year} ${currentTime}`;
  const time = document.createElement("time");
  time.textContent = currentDate;
  time.classList.add("todoTime");

  todoBody.textContent = text;
  todo.appendChild(time);
  todo.appendChild(todoBody);
  todo.appendChild(checkButton);
  todo.appendChild(deleteButton);
  return todo;
};

const generateButtons = (todoBody) => {
  const checkButton = document.createElement("button");
  checkButton.classList.add("checkButton");
  checkButton.textContent = "Check";
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.textContent = "Delete";

  checkButton.addEventListener("click", () => {
    todoBody.classList.toggle("checked");
  });

  deleteButton.addEventListener("click", function (e) {
    const todoToRemove = e.target.parentElement;
    todoToRemove.remove();
    if (todoList.children.length === 1) {
      placeholder.classList.remove("hidden");
    }
  });
  return { checkButton, deleteButton };
};

createButton.addEventListener("click", () => {
  let text = prompt("Enter a to-do");
  if (text) {
    todoList.appendChild(createTodo(text));
    placeholder.classList.add("hidden");
  }
});

deleteCheckedButton.addEventListener("click", () => {
  const checkedTodos = document.querySelectorAll(".checked");
  for (let todo of checkedTodos) {
    todo.parentElement.remove();
  }
  if (todoList.children.length === 1) {
    placeholder.classList.remove("hidden");
  }
});
