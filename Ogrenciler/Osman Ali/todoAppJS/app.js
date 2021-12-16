//Tüm Elementleri Seçme
// const form = document.getElementById("todo-form");
// const todoInput = document.getElementById("todo");
// const todoList = document.querySelector(".list-group");
// const firstCardBody = document.querySelectorAll(".card-body")[0];
// const secondCardBody = document.querySelectorAll(".card-body")[1];
// const filter = document.getElementById("filter");
// const clearButton = document.getElementById("clear-todos");
// eventListeners();
// function eventListeners() {
//   form.addEventListener("submit", addTodo);
// }
// function addTodo(e) {
//   const newTodo = todoInput.value.trim();
//   if (newTodo === "") {
//     showAlert("danger", "Lütfen bir todo giriniz.");
//   }
//   else {
    
//     showAlert("success", "Görev başarıyla eklendi.");
//   }
  
// }
// addTodoToUI(newTodo);
// e.preventDefault();
// /* Todo'yu ilk önce listeye sonra stroge kısmına kaydedip 
// daha sonra hem listeden hem de stroge sildirme işlemi yapacağız.*/

// function addTodoToUI(newTodo) {

//   const list = document.createElement("li");
//   list.className = "list-group-item d-flex justify-content-between";
//   const a = document.createElement("a");
//   a.href = "#";
//   a.href.className = "delete-item";
//   const text = document.createTextNode(newTodo);
//   const i = document.createElement("i");
//   i.className = "fa fa-remove";
//   if (a.appendChild(i)) {
//     if (list.appendChild(text)) {
//       if (list.appendChild(a)) {
//         if (todoList.appendChild(list)) {
//           alert("Görev Hem Listeye Hem Stroge Eklendi.");
//           //todoInput.value = "";
//           //console.write("Görev Düzgünce Eklendi :)");
//         }
//         else {
//           alert("Görev Hiçbir Yere Eklenemedi.");
//         }

//       }

//     }
//   }
// }

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
}

function addTodo(e){
  const newTodo = todoInput.value.trim();
  if(newTodo === ""){
    showAlert("danger","Lütfen bir todo giriniz.");
  }
  else{
    addTodoToUI(newTodo);
    showAlert("success","Todo başarılı bir şekilde eklendi.");
  }
  e.preventDefault();
}

function Sil() {
  localStorage.clear();
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
  localStorage.setItem(Math.random(),listItem.textContent);
  todoInput.value = "";
}

function showAlert(type, message){
  const alert = document.createElement("div");
  alert.className = `mt-3 alert alert-${type}`;
  alert.textContent = message;
  firstCardBody.appendChild(alert);

  setTimeout(function(){
    alert.remove();
  }, 2000);
}

/* Todo'yu ilk önce listeye sonra stroge kısmına kaydedip 
daha sonra hem listeden hem de stroge sildirme işlemi yapacağız.*/


// Local Storage
// SetItem

// localStorage.setItem("hareket1","yukarı");
// localStorage.setItem("hareket2","aşağı");

// GetItem
// const value = localStorage.getItem("hareket");
// console.log(value);
// console.log(typeof value);

// Clear Local Storage
// localStorage.clear();

// localStorage.setItem("hareket1","yukarı");

// console.log(localStorage.getItem("abc"));

// localStorage.setItem("hareket1","yukarı");

// if (localStorage.getItem("hareket1")===null){
//   console.log("Sorguladınız veri bulunamıyor");
// }
// else{
//   console.log("Sorguladınız veri bulundu");
// }

// Local Storage Array Kaydetme

// const todos = ["Todo 1","Todo 2","Todo 3"];

// localStorage.setItem("todolar",JSON.stringify(todos));

// const val = JSON.parse(localStorage.getItem("todolar"));
// console.log(val);