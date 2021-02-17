import { ToDo } from "./todo.js";

let todos = [];

if (localStorage.getItem("todos")){
    todos = JSON.parse(localStorage.getItem("todos"));
}

makeList();

function makeList(){
    if (todos.length > 0) {
        let list = document.getElementById("todolist");
        list.innerHTML = "";

        todos.forEach(
            todo =>{
                list.innerHTML +=
                  `<li>
                  <label ${todo.Completed ? "class='completed'" : ""}>
                  <input type="checkbox" value="${todo.Id}" ${todo.Completed ? "checked" : ""}>
                  ${todo.Content}
                  </label>
                  </input>
                  <button id="${todo.Id}" class="xbox" type="reset">X</button>
                  </li>`;
            }
        );

        const checkboxes = document.querySelectorAll("input[type='checkbox']");
        checkboxes.forEach(
            checkbox => {
                checkbox.addEventListener("change", (event) =>{
                    const id = Number(event.target.value);
                    const task = todos.find(todo => todo.Id === id);
                    task.Completed = !task.Completed;

                    localStorage.setItem("todos", JSON.stringify(todos));
                    
                    makeList();

                });
            }
        )

        const deletion = document.querySelectorAll("button[type='reset']");
        deletion.forEach(
            button => {
                button.addEventListener("click", (event) =>{
                    const id = Number(button.id);
                    const deleteIndex = todos.findIndex(todo => todo.Id === id);
                    todos.splice(deleteIndex, 1);

                    localStorage.setItem("todos", JSON.stringify(todos));
                    
                    makeList();

                });
            }
        )

    }
}

const all = document.getElementById("all");
all.addEventListener("click", (event) => {
    event.preventDefault();
    
})
const open = document.getElementById("open");
const completed = document.getElementById("completed");
const button = document.getElementById("task");
button.addEventListener("click", (event) =>
{
    event.preventDefault();

    const contentElement = document.getElementById("content");
    const newTodo = new ToDo(contentElement.value);
    todos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(todos));
    makeList();
    contentElement.value = "";

    
})