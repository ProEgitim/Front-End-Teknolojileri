

var cards = document.querySelectorAll(".card");
var card = document.querySelector(".card");
cards.forEach((card) =>{
    card.addEventListener("mouseleave", light);
    card.addEventListener("mouseover", dark);
    
    function dark(e){
        card.classList.add("bg-secondary");
        card.classList.remove("bg-dark");
        
    }
    function light(e){
        card.classList.remove("bg-secondary");
        card.classList.add("bg-dark");
        
    }



});

var lists = document.querySelectorAll(".list-group-item");
var list = document.querySelector(".list-group-item");

lists.forEach((list) =>{

    list.addEventListener("mouseover", ()=>{
        list.classList.remove("bg-dark");
        list.classList.add("bg-secondary");


    });

    list.addEventListener("mouseleave", ()=>{
        list.classList.add("bg-dark");
        list.classList.remove("bg-secondary");


    });





});