addButton = document.querySelector("#addButton")
addButton.addEventListener("click", addItemTrigger);

function addItem(nodeText) {

    var liElement = document.createElement("li");
    liElement.className = "list-group-item d-flex justify-content-between";

    var text = document.createTextNode(nodeText);
    liElement.appendChild(text);

    var aElement = document.createElement("a")

    aElement.className = "delete-item";
    aElement.href = "#"
    // aElement.onclick = "removeItemSingleTrigger(this)";
    aElement.addEventListener("click", removeItemSingleTrigger);


    liElement.appendChild(aElement)

    var iElement = document.createElement("i");
    iElement.className = "fa fa-remove";

    aElement.appendChild(iElement);

    var uElement = document.querySelector(".list-group");
    uElement.appendChild(liElement);
}


function addItemTrigger(e) {
    var addInput = document.querySelector("#todo");
    var addInputValue = addInput.value;
    e.preventDefault();

    var savedArray = JSON.parse(localStorage.getItem("todos"));
    if (savedArray) {
        savedArray.push(addInputValue);
    } else {
        savedArray = [addInputValue];
    }

    localStorage.setItem("todos", JSON.stringify(savedArray));


    addItem(addInputValue);

    addInput.value = ''
}

var readTodos = JSON.parse(localStorage.getItem("todos"));

if (readTodos) {
    readTodos.forEach(todo => {

        addItem(todo);
    });
}


function removeItemSingleTrigger(e) {
    var liElement = e.target.closest("li");
    var readTodos = JSON.parse(localStorage.getItem("todos"));

    const index = readTodos.indexOf(liElement.textContent);
    if (index > -1) {
        readTodos.splice(index, 1);
    }
    localStorage.setItem("todos", JSON.stringify(readTodos));

    liElement.remove();
}

const removeAllButton = document.querySelector("#clear-todos")
removeAllButton.addEventListener("click", removeItemAllTrigger);

function removeItemAllTrigger(e) {
    var a = document.querySelectorAll(".list-group-item");

    a.forEach(todo => {
        console.log(todo);
        todo.remove();
        localStorage.clear();

    });

}


// console.log(value);

// const liElement = document.createElement("li");
// value = document.getElementsByClassName("list-group")[0];
//
// liElement.className = "list-group-item d-flex justify-content-between";
//
// const text = document.createTextNode("Todo 5");
// liElement.appendChild(text);
//
// value.appendChild(liElement);
//
//
// const aElement = document.createElement("a");
// aElement.className = "delete-item";
// aElement.href = "#";
//
// liElement.appendChild(aElement);
//
//
// const iElement = document.createElement("i");
// iElement.className = "fa fa-remove";
//
// aElement.appendChild(iElement);
//
//
// console.log (value);
// console.log (typeof value);