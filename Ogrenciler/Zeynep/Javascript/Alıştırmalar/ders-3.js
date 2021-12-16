
// function myfunction() {
//     sayilar = [];
//     for (let i=0; i<20; i++){
//         sayi = Math.floor(Math.random() * 100 + 1);
//         sayilar.push(sayi);
//     }
//     console.log(sayilar);
//     return sayilar
// }
// result = myfunction()
//
// let my_max_val = result[0]
// let my_min_val = result[0]
// for (let i=0; i<result.length; i++){
//     if (result[i] > my_max_val) {
//         my_max_val = result[i];
//     }
//     if (result[i] < my_min_val) {
//         my_min_val = result[i];
//     }
// }
// console.log(my_max_val)
// console.log(my_min_val)



// links= document.links
// for (let i=0; i<links.length; i++){
//     links[i].href = "/yeni_link"
// }
// console.log (links);



// value= document.querySelector(".list-group");
// value= document.querySelector(".li:nth-last-child()");
//
// console.log (value);

//
// const newButton = document.createElement("a");
// value = document.getElementsByClassName("card-body")[1];
//
// newButton.id = "clear-todos";
// newButton.className = "btn btn-danger";
// newButton.href = "https://www.google.com";
// newButton.target = "blank";
//
// const text = document.createTextNode("temizle");
// newButton.appendChild(text);
//
// value.appendChild(newButton);
//
// console.log (value);
// console.log (typeof value);


const liElement = document.createElement("li");
value = document.getElementsByClassName("list-group")[0];

liElement.className = "list-group-item d-flex justify-content-between";

const text = document.createTextNode("Todo 5");
liElement.appendChild(text);

value.appendChild(liElement);


const aElement = document.createElement("a");
aElement.className = "delete-item";
aElement.href = "#";

liElement.appendChild(aElement);


const iElement = document.createElement("i");
iElement.className = "fa fa-remove";

aElement.appendChild(iElement);


console.log (value);
console.log (typeof value);



