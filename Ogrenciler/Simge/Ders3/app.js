// let value;

// value = document.all;

// // for (let i = 0; i< value.length; i++){
// //   console.log(value[i]);
// // }

// value = document.body;
// value = document.head;
// value = document.location;
// value = document.URL;
// value = document.scripts[0];
// value = document.links;
// value = document.links[0].getAttribute("class");
// value = document.links[0].className;
// value = document.links[document.links.length-1].classList;
// value = document.links[document.links.length-1].id;

// // ID'ye göre element seçimi
// value = document.getElementById("clear-todos").getAttribute("class");
// // Class'a göre element seçimi
// value = document.getElementsByClassName("card-title")[0].getAttribute("id");
// // Tag'e göre element seçimi
// value = document.getElementsByTagName("div");
// // Css Selector'leri ile seçim yapmak
// value = document.querySelector(".list-group-item");
// value = document.querySelector("#tasks-title");
// value = document.querySelector("div");

// value = document.querySelector("#tasks-title");

// value.style.border = "5px solid green";
// value.className = "btn btn-primary";
// value.textContent="Görevler";

// value = document.querySelector(".list-group-item");


// console.log(value);
// console.log(typeof value)




// links= document.links
// for (let i=0; i<links.length; i++;){
//     links[1].href = "/yeni_link"
// }

// console.log (links);



// value = document.querySelector("li:nth-child(3)");
// value = document.querySelector("li:last-child");
// value = document.querySelector("li:nth-child(even)");

// value.forEach(function(e){
//     e.style.background = "#ce0000";
//     e.style.color = "#fff";
// })



// toDoGroup = document.querySelector(".list-group");

// value = toDoGroup.children[toDoGroup.children.length -1].textContent ="deneme"
// value = toDoGroup.children[0].nextElementSibling.nextElementSibling;

// console.log (value);



// const newButton = document.createElement("a");
// value = document.getElementsByClassName("card-body")[1];

// newButton.id = "clear-todos";
// newButton.className = "btn btn-danger";
// newButton.href = "https://www.google.com/";
// newButton.target = "_blank";

// const text = document.createTextNode("Clear");
// newButton.appendChild(text);

// console.log (value);



// const liste = document.querySelector (".list-group")
// const listeolustur = document.createElement ("li");
// listeolusturli.className = "list-group-item d-flex justify-content-between
// "
// const listeolustur = document.createElement ("a");
// listeolustur.href = "#";
// listeolustur.className = "delete-item"
// const listeolustur = document.createElement ("i");
// listeolusturi.className ="fa fa-delete";
// const text = document.createTextNode("ToDo5");


// listeolustur.appendChild(listeolusturi);
// listeolusturli.appendChild(listeolustura);
// liste.appendChild(text);
// liste.appendChild(listeolusturli);











// const liElement = document.createElement("li");
// value = document.getElementsByClassName("list-group")[0];

// liElement.className = "list-group-item d-flex justify-content-between";

// const text = document.createTextNode("Todo 5");
// liElement.appendChild(text);

// value.appendChild(liElement);


// const aElement = document.createElement("a");
// aElement.className = "delete-item";
// aElement.href = "#";

// liElement.appendChild(aElement);


// const iElement = document.createElement("i");
// iElement.className = "fa fa-remove";

// aElement.appendChild(iElement);


// console.log (value);
// console.log (typeof value);




// Element Silme

// value = document.querySelector(".list-group-item");
// value.remove();
// console.log(value);


// Element Değiştirme
// value = document.querySelectorAll(".card-body")[1];
// const newElement = document.createElement("h3");
// newElement.className = "card-title";
// newElement.id = "tasks-title";
// newElement.textContent = "Yeni Todolar";
// const oldElement = document.querySelector("#tasks-title");
// value.replaceChild(newElement, oldElement);


// Atribute Değiştirme-Ekleme Silme

// const todoInput = document.getElementById("todo");

// value = todoInput;
// value = todoInput.classList;

// todoInput.classList.add("yeniClass");
// todoInput.classList.remove("form-control");

// value = todoInput.getAttribute("placeholder");
// todoInput.setAttribute("placeholder","Naber")
// value = todoInput.getAttribute("placeholder");
// todoInput.removeAttribute("placeholder");
// value = todoInput.getAttribute("placeholder");








// DOM EVENTLERİ



// const todoHeader = document.getElementById("tasks-title");
// const todoFilter = document.querySelector("#filter");


// todoFilter.addEventListener("keyup",changeTextFilter);



// function changeTextFilter(e){
//     todoHeader.textContent = e.target.value;
// }


// console.log(todoFilter,todoHeader);


// LOCAL STORAGE 
// SETITEM

// localStorage.setItem("hareket1","yukarı");
// localStorage.setItem("hareket2","aşağı");



// // GET ITEM

// const value = localStorage.getItem("hareket");
// console.log(value);

// // CLEAR LOCAL STORAGE
// localStorage.clear();
// localStorage.setItem("hareket1","yukarı");
// console.log(localStorage.getItem("abc"));


// localStorage.setItem("hareket1","yukarı");
// if (localStorage.getItem("hareket1")===null){
//     console.log("sorguladıgınız veri bulunamıyor");
// }
// else{
//     console.log("sorguladıgınız veri bulundu");
// }


// // LOCAL STORAGE ARRAY KAYDETME

// const todos = ["Todo 1","Todo 2","Todo 3"];
// localStorage.setItem("todolar",JSON.stringify(todos));

// const val = JSON.parse(localStorage.getItem("todolar"));
// console.log(val);



