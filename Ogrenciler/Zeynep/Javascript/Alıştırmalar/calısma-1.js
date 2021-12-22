//
//
// value = document.getElementById("list");
//
// console.log(value);
// console.log(typeof value);
//
//
// value = document.getElementsByClassName("item1")[0].getAttribute("itemId");
//
// console.log(value);
// console.log(typeof value);

// value = document.getElementsByTagName("div")[0].getAttribute("btn");
//
// console.log(value);
// console.log(typeof value);

// value = document.querySelectorAll(".row").length;

// value = document.querySelector("#widget")
//
// value.style.border = "5px solid yellow";
// value.style.backgroundColor = "green";
// value.style.textAlign = "center";






// value.forEach(function (e){
//     e.style.textDecorationColor = "#dc6868";
//
//     console.log(value);
//     console.log(typeof value);
// })

const ulElement = document.querySelector(".list-group");

const liElement = document.createElement("li");
liElement.className = "item";


const aElement = document.createElement("a");
aElement.className = "item-text";
aElement.textContent = "item5";

ulElement.appendChild(liElement);
liElement.appendChild(aElement);

console.log(aElement);
console.log(liElement);