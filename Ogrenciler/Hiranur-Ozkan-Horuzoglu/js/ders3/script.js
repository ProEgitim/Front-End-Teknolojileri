//js dinamik olarak içine yerleştiriyoruz....

// let value;

// value = document.all;

// // for (let i = 0; i < value.length; i++) {
// //     console.log(value[i]);  
// // }

// value = document.body;
// value = document.head;
// value = document.location;
// value = document.location.hostname;
// value = document.URL;
// value = document.scripts[1];
// value = document.scripts.length;
// value = document.links;
// value = document.links[0].getAttribute("class");
// value = document.links[0].className;
// value = document.links[document.links.length-1].classList;
// value = document.links[document.links.length-1].id;

//------------
// // ID'ye göre element seçimi
// value = document.getElementById("clear-todos").getAttribute("class");
//-----------------
// // Class'a göre element seçimi
// value = document.getElementsByClassName("card-title")[0].getAttribute("id");
//-------------------------------
// //Tag'e göre element seçimi
// value = document.getElementsByTagName("div");
//-------------------------
// //SCC Selector'leri ile seçim yapma
// value = document.querySelector(".list-group-item");
// value = document.querySelector("#tasks-title");
// value = document.querySelector("div");
// value = document.querySelectorAll("div"); //hepsini aldı ALL

// value = document.querySelector("#tasks-title"); //scc kısmında degişiklik yaptık
// value.style.border = "5px solid green";
// value.className = "btn btn-primary";
// value.textContent = "Görevler";
//-------------------------
// value = document.querySelector(".delete-item"); 
// value.setAttribute("href","https://www.google.com/"); //# degiştir baska bir url gönderdik

// value = document.querySelector("li:nth-child(3)");
// value = document.querySelector("li:last-child");
// value = document.querySelector("li:nth-child(even)");

// value.forEach(function(e) {
//     e.style.background = "#ce0000";
//     e.style.color = "#fff";
// // });

// todoGroup = document.querySelector(".list-group");
// value = todoGroup.children[todoGroup.children.length-1].textContent = "Deneme"; //bosluksuz düz hali sonuncu elemanı secme
// value = todoGroup.children[0].nextElementSibling.nextElementSibling; //todonun kardeşini seçme
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
//--------------------------------------

// const buttonNew= document.querySelector(".list-group");

// const buttonNewLi = document.createElement("li");
// buttonNewLi.className = "list-group-item d-flex justify-content-between";
// const buttonNewA = document.createElement("a");
// buttonNewA.href = "#";
// buttonNewA.className = "delete-item";
// const buttonNewİ = document.createElement("i");
// buttonNewİ.className = "fa fa-remove";
// const text  = document.createTextNode("todo5");

// buttonNewA = appendChild(buttonNewİ);
// buttonNewLi = appendChild(buttonNewA);
// buttonNew = appendChild(buttonNewLi);
// buttonNew.appendChild(text);
// buttonNew.appendChild(buttonNewLi);
//------------------------------

// value = document.querySelectorAll(".list-group-item");
// value.remove(); //silme işlemi
//-----------------------
//Element Değiştirme

// value = document.querySelectorAll(".card-body")[1];

// const newElement = document.createElement("h3");
// newElement.className = "card-title";
// newElement.id = "tasks-title";
// newElement.textContent = "Yeni Todolar";

// const oldElement = document.querySelector("#tasks-title");
// value.replaceChild(newElement, oldElement); //isim degiştirme

//Atribute Değiştirme-Ekleme-Silme

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

//  // ---------- # DOM EVENTLERİ--------------------

// const filterInput = document.getElementById("filter");
// const todoForm = document.getElementById("todo-form");

// filterInput.onfocus = function(){
//     console.log("Focus Oldu");
// }

// filterInput.addEventListener("focus",function(e){
//     console.log(e);
//     console.log(e.target.placeholder);
//     e.target.placeholder = "Deneme";
// })


// todoForm.addEventListener("submit",submitForm);

// function submitForm(e){
//     console.log("Submit Eventi");
//     e.preventDefault(); //sayfanın yenilenmesini engelliyor
// }

//------ Klavye Eventleri---(asli kodları veriyor rakama ve harfe bastıgında)

// document.addEventListener("keypress", run);

// function run(e){
//     console.log(e.which);
//     console.log(e.key);
// }

// document.addEventListener("keydown", run); // bütün tuşları algılıyor(keydown)

// function run(e){
//     console.log(e.which);
//     console.log(e.key);
// }
//-----------------
// todoInput = document.getElementById("todo");
// header = document.querySelector(".card-header");
// todoInput.addEventListener("keyup",changeText);

// function changeText(e) { //liste ismini anlık degiştirdik
//     header.textContent = e.target.value;
// }
//----------2.örnek------------

// const todoName = document.getElementById("filter");
// const header = document.querySelector("#tasks-title");
// todoName.addEventListener("keyup",changeText);

// function changeText(e) {
//     header.textContent = e.target.value;
// }

//--------Click Event----(mouse hareketlerini izleme)--------


const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");

//Click Eventi
//title.addEventListener("click",run);

//Double Clik Eventi
//title.addEventListener("dblclick",run);

//Mouse Down
//title.addEventListener("mousedown",run);

//Mouse Up
//title.addEventListener("mouseup",run);

//Mouse Over
//title.addEventListener("mouseover",run);

//Mouse Out
//title.addEventListener("mouseout",run);

//cardBody.addEventListener("muoseover",run);
//cardBody.addEventListener("muoseout",run);

//Mouse Enter & Mouse Leave
// cardBody.addEventListener("muoseenter",run);
// cardBody.addEventListener("muoseleave",run);

//document.addEventListener("DOMContentLoaded",load);//sayfa yüklendiginde demek (DOMContentLoaded)

// function load(e){
//     alert("Sayfa Yüklendi.");
// }

// const filter  = document.getElementById("filter");

//-------------------Input Eventleri------------------
// //Focus
// filter.addEventListener("focus",run);

// //Blur
// filter.addEventListener("blur",run);

// //Paste
// filter.addEventListener("paste",run);

// //Copy
// filter.addEventListener("copy",run);

// //Cut
// filter.addEventListener("cut",run);



// function run(e) {
//     console.log(e.type);
// }

// console.log(value); //console.log(...value);
// console.log(typeof value);



//-----------------------------------------------------------------------

//Local Storage
// //SetItem

// localStorage.setItem("hareket1","yukarı");
// localStorage.setItem("hareket2","aşagı");

// //GetItem
// const value = localStorage.getItem("hareket");
// console.log(value);
// console.log(typeof value);

//Clear Local Storage
//ÇALIŞMADI---localStorage.removeItem("Hareket");
// localStorage.clear();

// console.log(localStorage.getItem("abc"));
 localStorage.setItem("hareket1","yukarı");

if (localStorage.getItem("hareket")===null) {
    console.log("Sorguladıgınız veri bulunamıyor.")
}
else{
    console.log("Sorguladıgınız veri bulundu.")

}

//Local Storage Array KAydetme

// const todos = ["Todo 1","Todo 2","Todo 3"];
// localStorage.setItem("todolar",JSON.stringify(todos));

// //console.log(typeof localStorage.getItem("todolar"));
// const val = JSON.parse(localStorage.getItem("todolar"));
// console.log(val);
