/*
<li class="list-group-item d-flex justify-content-between">
  Todo 1
  <a href = "#" class ="delete-item">
      <i class = "fa fa-remove"></i>
  </a>
</li>
*/

// Tüm Elementler Seçme
const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.getElementById("filter");
const clearButton = document.getElementById("clear-todos");

eventListeners();

function eventListeners(){ // Tüm Eventler
  form.addEventListener("submit",addTodo);
  // clearButton.addEventListener("click",removeTodos);
  document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
  secondCardBody.addEventListener("click",deleteTodo);
  filter.addEventListener("keyup",filterTodos);
}

function filterTodos(e){
  const filterValue = e.target.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");
  listItems.forEach(function(listItem){
    const text = listItem.textContent.toLowerCase();
    if (text.indexOf(filterValue) === -1){
      // Bulamadı
      listItem.setAttribute("style","display:none !important");
    }
    else {
      listItem.setAttribute("style","display:block");
    }
  })
}

function loadAllTodosToUI(){
  let todos = getTodosFromStorage();
  todos.forEach(function(todo){
    addTodoToUI(todo);
  })
}

function deleteTodo(e){
  console.log(e);
  if (e.target.className === "fa fa-remove"){
    e.target.parentElement.parentElement.remove();
    deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
    showAlert("success","Todo Başarıyla silindi.");
  }
}

function deleteTodoFromStorage(deleteTodo){
  let todos = getTodosFromStorage();
  todos.forEach(function(todo,index){
    if(todo === deleteTodo){
      todos.splice(index,1);
    }
  });
  localStorage.setItem("todos",JSON.stringify(todos));
}

function addTodo(e){
  const newTodo = todoInput.value.trim();
  if(newTodo === ""){
    showAlert("danger","Lütfen bir todo giriniz.");
  }
  else{
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);
    showAlert("success","Todo başarılı bir şekilde eklendi.");
  }
  e.preventDefault();
}

function addTodoToUI(newTodo){
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = "<i class='fa fa-remove'></i>";
  listItem.className = "list-group-item d-flex justify-content-between";
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);
  todoList.appendChild(listItem);
  todoInput.value = "";
}

function getTodosFromStorage(){
  let todos;
  if (localStorage.getItem("todos") === null){
    todos = [];
  }
  else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

function addTodoToStorage(newTodo){
  let todos = getTodosFromStorage();
  todos.push(newTodo);
  localStorage.setItem("todos",JSON.stringify(todos));
}

function showAlert(type, message){
  /* 
<div class="alert alert-danger" role="alert">
  A simple primary alert—check it out!
</div>
 */
  const alert = document.createElement("div");
  alert.className = `mt-3 alert alert-${type}`;
  alert.textContent = message;
  firstCardBody.appendChild(alert);

  setTimeout(function(){
    alert.remove();
  }, 2000);
}