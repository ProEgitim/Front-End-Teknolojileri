//Tüm Elementleri Seçme
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
function addTodo(e){
  const newTodo = todoInput.value.trim();
  if(newTodo === ""){
    showAlert("danger","Lütfen bir todo giriniz.");
  }
  else {
    addTodoToUI(newTodo);
    showAlert("success","Görev başarıyla eklendi.");
  }
  e.preventDefault();
}
function addTodoToUI(newTodo){
  
   const list = document.createElement("li");
   list.className = "list-group-item d-flex justify-content-between";
   const a = document.createElement("a");
   a.href = "#";
   a.href.className = "delete-item";
   const text = document.createTextNode(newTodo);
   const i = document.createElement("i");
   i.className = "fa fa-remove";
   if (a.appendChild(i)){
     if (list.appendChild(text)){
       if (list.appendChild(a)){
         if(todoList.appendChild(list)){
          alert("Görev Eklendi.");
           todoInput.value = "";
           //console.write("Görev Düzgünce Eklendi :)");
         }
         else {
          alert("Görev Eklenemedi.");
         }

       }

     }
   }

  function showAlert(type,message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message ;
    firstCardBody.appendChild(alert);

    setTimeout(function(){
      alert.remove();
    },2000);
  }
}
/*
<li class="list-group-item d-flex justify-content-between">
  Todo 1
  <a href = "#" class ="delete-item">
      <i class = "fa fa-remove"></i>
  </a>
</li>
*/