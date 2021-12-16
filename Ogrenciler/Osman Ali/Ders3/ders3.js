// function butonOlustur(){
//     for (let i = 0; i<5; i++){
//         const yeniButon = document.createElement("button");
//         deger = document.getElementsByClassName("card-body")[1];
//         yeniButon.id="add-todos";
//         yeniButon.className="btn btn-danger";
//         yeniButon.href="https://benosso.com";
//         yeniButon.target="_blank";
//         const text = document.createTextNode("Eklenen Buton");
//         yeniButon.appendChild(text);
//         deger.appendChild(yeniButon);
//         console.log(deger);
//     }
// }
// function textOlustur(){
//     for (let i = 0; i<5; i++){
//         const yeniInput = document.createElement("input");
//         deger = document.getElementsByClassName("card-body")[0];
//         yeniInput.id="add-todos";
//         yeniInput.className="textTodo";
//         const text = document.createTextNode("Eklenen Text Alanı");
//         yeniInput.appendChild(text);
//         deger.appendChild(yeniInput);
//         yeniInput.preventDefault();
//         console.log(deger);
//     }
// }

// document.addEventListener("keypress",run)
// function run(e){
//     console.log(e.which);
//     console.log(e.key);
// }
// document.addEventListener("keydown",run)
// function run(e){
//     console.log(e.which);
//     console.log(e.key);
// }
// document.addEventListener("keyup",run)
// function run(e){
//     console.log(e.which);
//     console.log(e.key);
// }

// todoInput = document.getElementById("todo");
// header = document.querySelector(".card-header");
// todoInput.addEventListener("keyup",changeText);
// function changeText(e){
//     header.textContent = e.target.value;
// }
// console.log(value);

// const todoInput = document.getElementById("todo");
// const todoFilter = document.getElementById("filter");
// const todoHeader = document.getElementById("tasks-title");
// todoInput.addEventListener("keyup",changeText);
// todoFilter.addEventListener("keyup",changeTextFilter);
// const header = document.querySelector(".card-header");
// function changeText(e){
//     header.textContent = e.target.value;
// }
// function changeTextFilter(e){
//     todoHeader.textContent = e.target.value;
// }
// console.log(todoFilter,todoHeader);
// console.log(value);

const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");

title.addEventListener("click",run);
title.addEventListener("dblclick",run);
title.addEventListener("mousedown",run);
title.addEventListener("mouseup",run);
title.addEventListener("mouseover",run);
title.addEventListener("mouseout",run);

cardBody.addEventListener("mouseover",run);
cardBody.addEventListener("mouseout",run);
cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);

document.addEventListener("DOMContentLoaded",load);
function load(e){
    alert("Hoşgeldiniz Kullanıcı");
}

const filter = document.getElementById("filter");
filter.addEventListener("focus",run);
filter.addEventListener("blur",run);
filter.addEventListener("paste",run);
filter.addEventListener("copy",run);
filter.addEventListener("cut",run);

function run (e){
    console.log(e.type);
}





