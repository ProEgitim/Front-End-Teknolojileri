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
const buton = document.querySelector(".btn-danger");
buton.addEventListener("click" , addTodo);

function addTodo (e){
const newTodo = todoInput.value;
if(newTodo === ""){
  showAlert("danger", "please add somht");
}
else{
  addTodoToUI(newTodo);
  showAlert("success","input is success");
  addTodoLocal(newTodo);
}
e.preventDefault();
}



function addTodoToUI(newTodo){
 var li= document.createElement("li");
 li.className = "list-group-item d-flex justify-content-between";
 var text = document.createTextNode(newTodo);
 var a = document.createElement("a");
 a.className ="delete-item";
 a.href = "#";
 var i = document.createElement("i");
 i.className = "fa fa-remove";
 todoInput.value = "";
 a.appendChild(i);
 li.appendChild(text);
 li.appendChild(a);
 todoList.appendChild(li);



}

function showAlert(type , value){
  var alert = document.createElement("div");
  alert.className = `mt-3 alert alert-${type} d-flex`;
  alert.textContent = `${value}`;
  form.appendChild(alert);
  var i = document.createElement("i");
 i.className = "fa fa-remove";
 alert.appendChild(i);
 i.addEventListener("click", function removeAlert(e){
  alert.remove();
 });

}

function addTodoLocal(newTodo){
  let todos = getLocal();
  todos.push(newTodo);
  localStorage.setItem("Todos",JSON.stringify(todos));

 
}

function getLocal(){
 let todos;
if(localStorage.getItem("Todos") === null){
  todos = [];
}
else{
todos = JSON.parse(localStorage.getItem("Todos"));

}
return todos;

}

document.addEventListener("DOMContentLoaded", function allTodoUI(){
  
  let todos = [...getLocal()];
  todos.forEach(function(todo){
   addTodoToUI(todo);

  })
});
