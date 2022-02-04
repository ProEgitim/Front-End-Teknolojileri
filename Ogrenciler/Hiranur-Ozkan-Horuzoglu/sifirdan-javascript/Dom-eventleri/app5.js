//html ozgu bir ozellik
//Event Capturing(olay yakalama) ve Bubling Olaylari(olay kabarciklanmasi)

//EVENT BUBLING 
document.querySelector(".container").addEventListener("click",function () {
    console.log("Div Container");
});
document.querySelector(".card.row").addEventListener("click",function () {
    console.log("Card row");
});
document.querySelectorAll(".card-body")[1].addEventListener("click",function () {
    console.log("Card Body");
});

//EVENT CAPTURING VEYA DELEGATION

// const cardBody = document.querySelectorAll(".card-body")[1];

// cardBody.addEventListener("click",run);

// function run(e) {
//     if(e.target.className === "fa fa-remove"){
//         console.log("Silme Islemi");
//     }
//     if(e.target.id === "filter"){
//         console.log("Filtreleme islemi");
//     }
//     if(e.target.id === "clear-todos"){
//         console.log("Tum tasklari silme islemi");
//     }
//     //console.log(e.target);
// }