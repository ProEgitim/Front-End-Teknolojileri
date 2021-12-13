/*
<li class="list-group-item d-flex justify-content-between">
  Todo 1
  <a href = "#" class ="delete-item">
      <i class = "fa fa-remove"></i>
  </a>
</li>
*/

//Tüm Elementler Seçme
const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.getElementById("filter");
const clearButton = document.getElementById("clear-todos");

eventListeners();
function eventListeners(){
  form.addEventListener("submit",addTodo);
}

function eventListeners(){ //Tüm Eventler
  form.addEventListener("submit",addTodo);
  //todoInput.addEventListener("keydown",deneme);
  
}

function addTodo(e) {
  const newTodo = todoInput.value.trim(); //trim boslukları siler
  if(newTodo === ""){
    showAlert("danger","Lütfen Bir Todo Giriniz.");
  }
  else{
    addTodoToUI(newTodo);
    showAlert("success","Todo Başarılı bir şekilde eklendi.")
  }



  addTodoToUI(newTodo);
  //console.log(newTodo);
  e.preventDefault();
}

function addTodoToUI(newTodo){
  const createI = document.createElement("i");
  createI.className = "fa fa-remove";

  const createA = document.createElement("a");
  createA.href = "#";
  createA.className = "delete-item";
  const text = document.createTextNode(newTodo);

  const createLi = document.createElement("li");
  createLi.className = "list-group-item d-flex justify-content-between";

  createA.appendChild(createI);
  createLi.appendChild(text);
  createLi.appendChild(createA);
  todoList.appendChild(createLi);
  todoInput.value = "";

}

// var alertList = document.querySelectorAll('.alert')
// var alerts =  [].slice.call(alertList).map(function (element) {
//   return new bootstrap.Alert(element)
// })

function showAlert(type, message){
 const alert = document.createElement("div");
 alert.className =  `alert alert ${type}`;
 alert.textContent = message;
 firstCardBody.appendChild(alert);

 setTimeout(function(){
   alert.remove();
 }, 2000 );
}


//todolar ekle depo kısmına bellege (data-base gibi kullanıcaz)
//x tıklayınca silecek
//filtreleme işlemi yapıcaz
//tüm taskları temizlemeyi yapıcaz depodan da silecek