/*
<li class="list-group-item d-flex justify-content-between">
  Todo 1
  <a href = "#" class ="delete-item">
      <i class = "fa fa-remove"></i>
  </a>
</li>
*/

//Tüm Elementleri Seçme
const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.getElementById("filter");
const clearButton = document.getElementById("clear-todos");


function eventListeners(){ //Tüm Eventler
  form.addEventListener("submit",addTodo);
  //todoInput.addEventListener("keydown",deneme);
  clearButton.addEventListener("click",clearTodosButton);
  
}
eventListeners();

function getAllTodos() {
  let todos = JSON.parse(localStorage.getItem("todos"));
  console.log(todos);
  for (let index = 0; index < todos.length; index++) {
    const element = todos[index];
    console.log(element);
    addTodoToUI(element);
  }
}
getAllTodos();

function addTodo(e) {
  const newTodo = todoInput.value.trim(); //trim boslukları siler
  if(newTodo === ""){
    showAlert("danger","Lütfen Bir Todo Giriniz.");
  } else {
    addTodoToUI(newTodo);
    showAlert("success","Todo Başarılı bir şekilde eklendi.");
    addToDoToStorage(newTodo);

  }
  //console.log(newTodo);
  e.preventDefault();

}

function addToDoToStorage(newTodo) {
  if (localStorage.getItem("todos") === null) {
    // ilk todo ekleme
    localStorage.setItem("todos", JSON.stringify([newTodo]));

  } else {
    // daha önce todo eklenmiş

    let todos = JSON.parse(localStorage.getItem("todos"));
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}

function addTodoToUI(newTodo){
  const createI = document.createElement("i");
  createI.className = "fa fa-remove";

  const removeButton = document.createElement("button");
  removeButton.className = "delete-item";
  removeButton.addEventListener("click", function() { //silme işlemi
    // Ekrandan silme
    createLi.remove();

    // Local storagedan silme
    let todos = JSON.parse(localStorage.getItem("todos"));
    for (let index = 0; index < todos.length; index++) {
      if (todos[index] == newTodo) {
        
        todos.splice(index, 1);
      }
      
    }
    localStorage.setItem("todos", JSON.stringify(todos));

  });
  const text = document.createTextNode(newTodo);

  const createLi = document.createElement("li");
  createLi.className = "list-group-item d-flex justify-content-between";

  removeButton.appendChild(createI);
  createLi.appendChild(text);
  createLi.appendChild(removeButton);
  todoList.appendChild(createLi);
  todoInput.value = "";

}


// var alertList = document.querySelectorAll('.alert')
// var alerts =  [].slice.call(alertList).map(function (element) {
//   return new bootstrap.Alert(element)
// })

function showAlert(type, message){
 const alert = document.createElement("div");
 alert.className =  `alert alert-${type}`;
 alert.textContent = message;
 firstCardBody.appendChild(alert);

 setTimeout(function(){
   alert.remove();
 }, 2000 ); //milisaniye cinsinden yazılır
}

function clearTodosButton(){
  localStorage.clear();
  window.location.reload();

}

//todolar ekle depo kısmına bellege (data-base gibi kullanıcaz) +
//x tıklayınca silecek +
//filtreleme işlemi yapıcaz
//tüm taskları temizlemeyi yapıcaz depodan da silecek +