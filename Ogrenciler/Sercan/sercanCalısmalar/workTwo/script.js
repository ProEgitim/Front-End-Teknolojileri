let cards = document.querySelectorAll(".cat");
let card = document.querySelector(".cat");
let imgs = document.querySelectorAll(".card-img-top");
let img = document.querySelector(".card-img-top");
let photos = document.querySelector(".parsePhoto")

photos.addEventListener("mouseover" , function littleBig(e){
  let el=  e.target ;
   if(e.target.matches('.card-img-top')){
    el.parentElement.style.background= "black" ;
    el.style.transform = "translate(1.6) !important";
}
});


// cards.forEach(function(card){
// card.addEventListener("mouseout", normalSize);
// });

// function littleBig(e) {
//  img.forEach(function(e){
//     e.classList.add("h-100");
// }); 
// }

