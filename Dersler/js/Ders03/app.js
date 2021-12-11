let value;

value = document.all;

// for (let i = 0; i< value.length; i++){
//   console.log(value[i]);
// }

value = document.body;
value = document.head;
value = document.location;
value = document.URL;
value = document.scripts[0];
value = document.links;
value = document.links[0].getAttribute("class");
value = document.links[0].className;
value = document.links[document.links.length-1].classList;
value = document.links[document.links.length-1].id;

// ID'ye göre element seçimi
value = document.getElementById("clear-todos").getAttribute("class");
// Class'a göre element seçimi
value = document.getElementsByClassName("card-title")[0].getAttribute("id");
// Tag'e göre element seçimi
value = document.getElementsByTagName("div");
// Css Selector'leri ile seçim yapmak
value = document.querySelector(".list-group-item");
value = document.querySelector("#tasks-title");
value = document.querySelector("div");

value = document.querySelector("#tasks-title");

value.style.border = "5px solid green";
value.className = "btn btn-primary";
value.textContent="Görevler";

value = document.querySelector(".list-group-item");


console.log(value);
console.log(typeof value)