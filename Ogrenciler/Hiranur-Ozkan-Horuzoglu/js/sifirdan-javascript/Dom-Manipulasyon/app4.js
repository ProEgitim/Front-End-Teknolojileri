//Yeni element olusturma

//<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

const newLink = document.createElement("a"); // a elemntini tanımladık (<a> bu sekilde</a>);

//const cardBody = document.getElementsByClassName("card-body")[1];

//a etiketine id,class,href verip degiştirdigim yer
newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href =  "https://www.google.com.tr";
newLink.target = "_blank";

/*--textContent'le----içine text ekleyip ya da degiştirebiliyoruz.
AMA bu cocuklrı fazla olan bir div için yana bir elemnt için herşeyi sil
sadece benim yazdıgım kalsın demek oluyor diger "a,href,div,span...." gibi
herşey siliniyor ve yazdıgımız kalıyor sadece bu önemli
orn: 
card-body.textContent= "slscksdclsjdlshd"; 
*/
//TextNode

// const text = document.createTextNode("naber"); //bu sekilde ekleniyor
// cardBody.appendChild(text); //sona eklemek istendiginde son cocuk seciliyor
 
newLink.appendChild(document.createTextNode("Diger sayfaya git"));
//cardBody.appendChild(newLink); //card-body içerisine link ekledik " a"


//console.log(cardBody);
//console.log(newLink);

//------------------------------------------------------------------------------------------

//DİNAMİK ELEMENT SİLME


const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

//remove() metodu;

// todos[1].remove();
// todos[2].remove();

//removechild()metodu  

//todoList.removeChild(todoList.lastElementChild); //son cocuk silindi
todoList.removeChild(todos[3]); //son cocuk silindi

// console.log(todos);
// console.log(todoList);

//------------------------------------------------------------------------------------------

//REPLACE---- ELEMNTLERİ BİRBİRLERİYLE DEGİŞTİRME

// <h5 class="card-title" id = "tasks-title">Todolar</h5>

const cardBody = document.querySelectorAll(".card-body")[1];

const newElement = document.createElement("h3"); //card-body h3 eklemek

newElement.id = "tasks-title";
newElement.className = "card-title";
newElement.textContent = "Yeni Todolar Ekleee";

//Eski elemenet

const oldElement = document.querySelector("#tasks-title");
cardBody.replaceChild(newElement,oldElement); //eklemek yeni element , eski element

console.log(newElement);


//------------------------------------------------------------------------------------------
//DİNAMİK ATTRİBUTE -DEĞİŞTİRME-SİLME-EKLEME

const todoInput = document.getElementById("todo");
let element;

element = todoInput;
element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","naber"); //placeholder todo ekle yerine naber yaptık
todoInput.setAttribute("title","input");// title input yaptık
todoInput.removeAttribute("name"); //name sildim

element = todoInput;
//element = todoInput.hasAttribute("name")---içinde arıyor true false dönüyor---

console.log(element);