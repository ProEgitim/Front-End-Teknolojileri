// Window Objesi
// console.log(window);

// const cevap = confirm("Emin misiniz?");
// console.log(cevap);

// const cevap = prompt("2+2=?");
// if(cevap == "4"){
//   console.log("Doğru");
// }
// else{
//   console.log("Yanlış");
// }

// a = window.location.port;
//
// console.log(a);

// if (confirm("Sayfa Yenilensin mi?")){
//   window.location.reload();
// }
// else{
//   console.log("Yenilenmedi");
// }


// let pencereGenisligi = window.outerWidth;
// let pencereYuksekligi = window.outerHeight;

// console.log(pencereGenisligi,pencereYuksekligi);

// pencereGenisligi = window.innerWidth;
// pencereYuksekligi = window.innerHeight;

// console.log(pencereGenisligi,pencereYuksekligi);

// window.scroll(0,300);
// let yKonum = window.scrollY;
// console.log(yKonum);

// Spread Operator
// let sayilar = new Array(20);
// let sayilar2 = new Array(20);
// let numbers = new Array(25);
//
// for(let i=0; i<sayilar.length;i++){
//   sayilar[i]=Math.floor(Math.random()*100+1);
//   sayilar2[i]=Math.floor(Math.random()*100+1);
//   numbers[i]= Math.floor(Math.random()*100+1);
// }
//
// sayilar3 = [...sayilar, ...sayilar2]
// number4= [...numbers, ...sayilar];
// console.log(sayilar);
// console.log(sayilar2);
// console.log(numbers);
// console.log(number4);

// //Scope Kavramı

// // Global Scope
// var value1 = 10;
// let value2 = 20;
// const value3 = 30;

// // Functional Scope
// function Func(){
//   var value1 = 40;
//   let value2 = 50;
//   const value3 = 60;
//   console.log("Function Scope: " + value1,value2,value3);
// }
//
// console.log(value1);
// console.log(value2);
// console.log(value3);
// Func();

// // Block Scope (Döngüler - for, while -- Koşullar - if -- yada herhangi {} blokları)

// if (true){
//   var value1 = 70;
//   let value2 = 80;
//   const value3 = 90;
//   console.log("Block Scope: " + value1,value2,value3);
// }


// Func();
// console.log("Global Scope: " + value1,value2,value3);



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

// value = document.querySelector("li:nth-child(3)");
// value = document.querySelector("li:last-child");
// value = document.querySelectorAll("li:nth-child(even)");

// value.forEach(function(e){
//   e.style.background = "#ce0000";
//   e.style.color = "#fff";
// })

// todoGroup = document.querySelector(".list-group");

// value = todoGroup.children[todoGroup.children.length - 1].textContent = "Deneme";
// value = todoGroup.children[0].nextElementSibling.nextElementSibling;
// value = todoGroup.children[todoGroup.children.length - 1].previousElementSibling;

// const newButton = document.createElement("a");
// value = document.getElementsByClassName("card-body")[1];

// newButton.id = "clear-todos";
// newButton.className = "btn btn-danger";
// newButton.href = "https://www.google.com/";
// newButton.target = "_blank";

// const text = document.createTextNode("Clear");
// newButton.appendChild(text);

// value.appendChild(newButton);

// Element Silme
// value = document.querySelector(".list-group-item");
// value.remove();


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


// // # DOM Eventleri

// const filterInput = document.getElementById("filter");
// const todoForm = document.getElementById("todo-form");

// filterInput.onfocus = function(){
//   console.log("Focus Oldu");
// }

// filterInput.addEventListener("focus",function(e){
//   console.log(e);
//   console.log(e.target.placeholder);
//   e.target.placeholder="Deneme";
// })

// todoForm.addEventListener("submit",submitForm);

// function submitForm(e){
//   console.log("Submit Eventi");
//   e.preventDefault();
// }

// Klavye Eventleri
// keypress

// document.addEventListener("keypress",run);

// function run(e){
//   console.log(e.which);
//   console.log(e.key);
// }

// keydown
// document.addEventListener("keydown",run);

// function run(e){
//   console.log(e.which);
//   console.log(e.key);
// }

// const todoInput = document.getElementById("todo");
// const header = document.querySelector(".card-header");

// todoInput.addEventListener("keyup",changeText);

// function changeText(e){
//   header.textContent = e.target.value;
// }



// const cardBody = document.querySelectorAll(".card-body")[1];
// const title = document.querySelector("#tasks-title");

// Click Eventi
// title.addEventListener("click",run);
// Double Click Eventi
// title.addEventListener("dblclick",run);
// Mouse Down
// title.addEventListener("mousedown",run);
// Mouse Up
// title.addEventListener("mouseup",run);
// Mouse Over
// title.addEventListener("mouseover",run);
// Mouse Out
// title.addEventListener("mouseout",run);

// cardBody.addEventListener("mouseover",run);
// cardBody.addEventListener("mouseout",run);
// Mouse Enter & Mouse Leave
// cardBody.addEventListener("mouseenter",run);
// cardBody.addEventListener("mouseleave",run);

// document.addEventListener("DOMContentLoaded",load);

// function load(e){
//   alert("Sayfa Yüklendi");
// }

// const filter = document.getElementById("filter");

// Input Eventleri
// Focus
// filter.addEventListener("focus",run);
// Blur
// filter.addEventListener("blur",run);

// Paste
// filter.addEventListener("paste",run);
// Copy
// filter.addEventListener("copy",run);
// Cut
// filter.addEventListener("cut",run);



// function run(e){
//   console.log(e.type);
// }
// console.log(value);
// console.log(typeof value)


// -------------------------------------
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
