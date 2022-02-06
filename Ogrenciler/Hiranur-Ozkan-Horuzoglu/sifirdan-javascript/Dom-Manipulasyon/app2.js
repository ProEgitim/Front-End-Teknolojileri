const element = document.querySelector("#clear-todos");

//element özellikleri

console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.classList[1]);
console.log(element.textContent);
console.log(element.innerHTML);
console.log(element.href);
console.log(element.style);


//--Style ve Element özelliklerini değiştirme

element.className = "btn btn-primary";
element.style.color = "#000";
element.style.marginLeft = "10px";
element.href = "https://www.google.com/";
element.target = "_blank";
element.textContent = "Silin"; //text js değiştirmiş oldum
element.innerHTML = "<span style = 'color:green'> SİLİN </span>"


const elements = document.querySelectorAll(".list-group-item"); //Node List
console.log(elements);

let element2 = document.querySelector("li:last-child");
element2 = document.querySelectorAll("li:nth-child(2)");
element2 = document.querySelectorAll("li:nth-child(3)");
element2 = document.querySelectorAll("li:nth-child(4)");
element2 = document.querySelectorAll("li:nth-child(odd)"); //tek cocukları cagırdık 1-3-5 gibi
element2 = document.querySelectorAll("li:nth-child(even)"); //çift cocukları cagırdık 2-4-6 gibi


element2.forEach(function(el){
    el.style.background = "#ccc";
    el.style.color = "red";
});



// elements.forEach(function (el) {
//     el.style.color = "red";
//     el.style.background = "#eee";

// })

console.log(element2);
//console.log(element);