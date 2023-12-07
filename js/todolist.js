const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDos = [];

function buttonDelete(event){
    const li = event.target.parentElement;
    li.remove();
}

function saveTodo(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", buttonDelete);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newToDo;
    toDoList.appendChild(li);
}

function handleToDoList(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveTodo();
}


toDoForm.addEventListener("submit", handleToDoList);

const savedToDo = localStorage.getItem("toDos");

if(savedToDo !== null){
    const parsedToDo = JSON.parse("savedToDo");
    console.log(parsedToDo);
    parsedToDo.forEach(paintToDo);

}