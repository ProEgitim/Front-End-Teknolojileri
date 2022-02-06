//Tum element secme

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners()

function eventListeners() {//tum event listenerlar
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);

}

function clearAllTodos(e) {
    if(confirm("Tumunu silmek istediginize emin misiniz ? ")){
        //arayuzden todolari silme
        //todoList.innerHTML = ""; //yavas bir yontem

        while (todoList.firstElementChild != null) {
            todoList.removeChild(todoList.firstElementChild);
        }
       localStorage.removeItem("todos");
        
    }
}

function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue)=== -1){
            //bulamadi
            listItem.setAttribute("style","display: none !important");
        }
        else{
            listItem.setAttribute("style","display : block");
        }


    });

}



function deleteTodo(e) {
    if (e.target.className === 'fa fa-remove') {
        e.target.parentElement.parentElement.remove();//parentine li ye ulasiyoruz bir ust elemen
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","Todo basariyla silindi...");
    }
}

function deleteTodoFromStorage(deletetodo) {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo,index) {
        if(todo === deletetodo){
            todos.splice(index,1);//arreyden degeri silme
        }

    });

    localStorage.setItem("todos",JSON.stringify(todos));
}


function loadAllTodosUI() { //sayfa yenilensede silinmiyor
    let todos = getTodosFromStorage();
    todos.forEach(function (todo) {
        adTodoToUI(todo);
    })



}


function addTodo(e) {
    const newTodo = todoInput.value.trim();
    if(newTodo === ""){
        /*<div class="alert alert-info" role="alert">
            This is a info alert—check it out!
        </div>*/
        showAlert("danger","Lutfen bir todo girin...");
    }else{
        adTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success","Todo basariyla eklendi...");
    }
  


    e.preventDefault();
}

function getTodosFromStorage() { // storageden todolari alma
    let todos;

    if(localStorage.getItem("todos")=== null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}


function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();

    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}



function showAlert(type,message) {

    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);

    //setTimeout metodu belli bir sure kalsin ve silinsin alert

    setTimeout(function() {
        alert.remove();
    }, 1000);

}


function adTodoToUI(newTodo){ // string degerini list item olarak UIya ekleyecek
/*
    <li class="list-group-item d-flex justify-content-between">
            Todo 1
        <a href = "#" class ="delete-item">
            <i class = "fa fa-remove"></i>
        </a>
    </li>
*/

    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    listItem.className = "list-group-item d-flex justify-content-between";

    //Text Node ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //todoliste list item ekleme
    todoList.appendChild(listItem);
    todoInput.value = ""; //bir onceki yazilani silme


    console.log(listItem);


}

