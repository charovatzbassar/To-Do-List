const todoList = document.querySelector("#todos");
const createButton = document.querySelector("#createButton");
const deleteCheckedButton = document.querySelector("#deleteChecked");

const createTodo = (text) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");
  const todoBody = document.createElement("div");
  todoBody.classList.add("todoBody");

  const { checkButton, deleteButton } = generateButtons(todoBody);

  todoBody.textContent = text;

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
  });
  return { checkButton, deleteButton };
};

createButton.addEventListener("click", () => {
  let text = prompt("Enter a to-do");
  if (text) {
    todoList.appendChild(createTodo(text));
  }
});

deleteCheckedButton.addEventListener("click", () => {
  const checkedTodos = document.querySelectorAll(".checked");
  for (let todo of checkedTodos) {
    todo.parentElement.remove();
  }
});
