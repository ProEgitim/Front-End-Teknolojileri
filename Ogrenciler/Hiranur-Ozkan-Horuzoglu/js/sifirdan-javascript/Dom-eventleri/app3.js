//mouse Eventleri
const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");

//Click eventi-tiklandiginda

// title.addEventListener("click",run);
//Double Click
//title.addEventListener("dblclick",run); - cift tiklandigi zaman


//Mouse down
// title.addEventListener("mousedown",run);
//Mouse Up
// title.addEventListener("mouseup",run);

// ///Mouse Over
// title.addEventListener("mouseover",run);
// //Mouse Out
// title.addEventListener("mouseout",run);


//cardBody.addEventListener("mouseover",run);

//Mouse enter ve mouse leave
cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);



function run(e) {
    console.log(e.type);
}