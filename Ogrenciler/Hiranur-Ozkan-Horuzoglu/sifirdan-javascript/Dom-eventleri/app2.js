//keyboard eventleri-KeyUp,KeyPress,KeyDown
//Klavye Eventleri

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e) {

    header.textContent = e.target.value; //todoList basligindaki todoyu her degistirdigimde baslikta degisiyor
    console.log(e.target.value);
}

//keypress
//document.addEventListener("keypress",run);//sadece harfler ve sayilar kabul ediliyor

// function run(e) {
//     //console.log(e.which); //HANGI TUSA BASILDIGINI ANLAMAK ICIN (aski tablosundaki degeri)
//     console.log(e.key); //hangi harfe bastigini gosteriyor
//     //console.log("Naber");
// }

//keydown
// document.addEventListener("keydown",run); 
// function run(e) {
//     console.log(e.key); // her tusu yaziyor command-option-space gibi
// }


//keyup

// document.addEventListener("keyup",run);
// function run(e) {
//     console.log(e.key); //tusu biraktiginda olusyor
// }



