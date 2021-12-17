/*
<li class="list-group-item d-flex justify-content-between">
  Todo 1
  <a href = "#" class ="delete-item">
      <i class = "fa fa-remove"></i>
  </a>
</li>
*/

///tüm elementleri seçme //

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");
const todoList = document.querySelector(".list-group");
const firstCartBody = document.querySelectorAll(".card-body")[0];
const secondCartBody = document.querySelectorAll(".card-body")[1];
const filter = document.getElementById("filter");
const clearButton = document.getElementById("clear-todos");
const removeOne = document.querySelectorAll(".fa-remove");
const todoButton = document.querySelector(".todoButton")
const getLocalButton = document.querySelector(".btn-warning");
 

eventListeners();
function eventListeners(){
  form.addEventListener("submit",addTodo);
  clearButton.addEventListener("click", removeTodos);
  
 getLocalButton.addEventListener("click", getTodoFromLocal);
}

function addTodo(e){
  const newTodo = todoInput.value.trim();
 if(todoInput.value === ""){
   addAlert("danger", "Bu alanı doldurunuz lütfen");
 }
 else{ 

  addAlert("success", "Doğru bilgi girişi yapıldı.");
  addTodoToUI(newTodo);
   e.preventDefault();
   
  }
 
  

  
}

function addTodoToUI(newTodo){

var createI = document.createElement("i");
createI.className = "fa fa-remove";

var createA = document.createElement("a");
createA.href= "#";
createA.className= "delete-item";
var text = document.createTextNode(newTodo);

var createLi = document.createElement("li");
createLi.className="list-group-item d-flex justify-content-between";
todoInput.value = "";
createA.appendChild(createI);
createLi.appendChild(text);
createLi.appendChild(createA);
todoList.appendChild(createLi);

localStorage.setItem(`Yapılacaklar Listesi ${Math.floor(Math.random()*1000)}`, createLi.textContent);

}


function addAlert (type , message)
{/* <div class="alert alert-danger" role="alert">
  A simple primary alert—check it out!
</div> */

const addAlert = document.createElement("div");
addAlert.className = `alert alert-${type}`;

addAlert.textContent= message;
firstCartBody.appendChild(addAlert);

setTimeout(function(){
  addAlert.remove();
},1000);

}



function removeTodos(e) {
  todoList.remove(); 
  window.location.reload();
 e.preventDefault(); 
 localStorage.clear();
  
}

for (let i=0 ; i<removeOne.length;i++){
  removeOne[i].addEventListener("click", () => {

      var teksil = document.querySelectorAll(".list-group-item");
      for (let j =0 ; j<teksil.length;j++){
        teksil[j].remove();
      }

    });
  
}  





function getTodoFromLocal(e){

  
  
  var value = localStorage.getItem("Yapılacaklar Listesi 345");
  
  todoList.innerHTML = value;

  e.preventDefault();
  
 
}

