const todoList = document.querySelector("#todos");
const createButton = document.querySelector("#createButton");
const deleteCheckedButton = document.querySelector("#deleteChecked");

const createTodo = (text) => {
  const todo = document.createElement("li");
  todo.classList.add("todo");
  const todoBody = document.createElement("p");
  todoBody.classList.add("todoBody");

  const checkButton = document.createElement("button");
  checkButton.classList.add("checkButton");
  checkButton.textContent = "Check";
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.textContent = "Delete";

  checkButton.addEventListener("click", () => {
    todo.classList.toggle("checked");
  });

  deleteButton.addEventListener("click", function (e) {
    const todoToRemove = e.target.parentElement.parentElement;
    todoToRemove.remove();
  });

  todoBody.textContent = text;
  todoBody.appendChild(checkButton);
  todoBody.appendChild(deleteButton);
  todo.appendChild(todoBody);
  return todo;
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
    todo.remove();
  }
});
