/*
<li class="list-group-item d-flex justify-content-between">
  Todo 1
  <a href = "#" class ="delete-item">
      <i class = "fa fa-remove"></i>
  </a>
</li>
*/

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter =document.getElementById("filter");
const clearButton = document.getElementById("clear-todos");



eventListeners();



function eventListeners(){
form.addEventListener("submit",addTodo);
}

function addTodo(e){
  const newTodo = todoInput.value.trim();
  addTodoToUI(newTodo);

  e.preventDefault();
}

function addTodoToUI(newTodo){
  const olusturli = document.createElement("li");
  olusturli.className = "list-group-item d-flex justify-content-between";
  const olustura = document.createElement("a");
  olustura.href = "#";
  olustura.href.className = "delete-item";
  const olusturi = document.createElement("i");
  olusturi.className = "fa fa-remove";
  const text = document.createTextNode(newTodo);


  olustura.appendChild(olusturi);
  olusturli.appendChild(text);
  olusturli.appendChild(olustura);
  todoList.appendChild(olusturli);
  
}

function showAlert(type,message){
  const alert = document.createElement("div");
  alert.className = 'alert alert-${type}';
  alert.textContent = message;
  firstCardBody.appendChild(alert);

  setTimeout(function(){
    alert.remove();
  })
}