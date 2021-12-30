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
const del = document.getElementById("delete");
const deletekey = document.getElementById("deletekey");


eventListeners();

del.addEventListener("click",deleteItem);


function eventListeners(){
form.addEventListener("submit",addTodo);
}

function addTodo(e){
  const newTodo = todoInput.value.trim();
  addTodoToUI(newTodo);
  

  e.preventDefault();
}
function deleteItem(e){
  sessionStorage.removeItem(deletekey.value)
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
  alert.className = `alert alert-${type}`;
  alert.textContent = message;
  firstCardBody.appendChild(alert);
  sessionStorage.removeItem(deletekey.value)

  setTimeout(function(){
    alert.remove();
  })
}


//todolar ekle depo kısmına bellege (data-base gibi kullanıcaz)
//x tıklayınca silecek
//filtreleme işlemi yapıcaz
//tüm taskları temizlemeyi yapıcaz depodan da silecek