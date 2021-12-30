let cards = document.querySelectorAll(".cat");
let card = document.querySelector(".cat");
let imgs = document.querySelectorAll(".card-img-top");
let img = document.querySelector(".card-img-top");
cards.forEach(function(card){
card.addEventListener("mouseover" , function littleBig(img){
   for(let imgs in img) {
    img.classList.add("h-100"); 
}
});
});
cards.forEach(function(card){
card.addEventListener("mouseout", normalSize);
});

// function littleBig(e) {
//  img.forEach(function(e){
//     e.classList.add("h-100");
// }); 
// }

function normalSize(e) {
    img.forEach(function(e){
       e.classList.remove("h-100");
   }); 
   }
   