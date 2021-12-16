//---------------Window Objeleri---------------------

// let value;

// value = document;
// value = document.all;
// value = document.all.length;
// value = document.all[0];
// value = document.all[6];
// value = document.all[document.all.length-1];

// const elements = document.all; //html collection dönüyor  -for dönğüsüyle gezebiliriz

// console.log(elements);

    // for (let i = 0; i < elements.length; i++) {
    //      console.log(elements[i]);
    // }
    // elements.forEach(function(elements) {
    //     console.log(elements); ---foreach gezinmek istiyorsak ilk önce array cevirmeliyiz
    // });

//array cevrilmiş hali

    // const collections = Array.from(document.all);
    // collections.forEach(function(collection){
    //     console.log(collection);
    // });

    // value = document.all[8];
    // value = document.body;
    // value = document.head;
    // value = document.location;
    // value = document.location.hostname;
    // value = document.location.port;

    // value = document.URL;
    // value = document.characterSet; //UTF-8


//-----SCRIPTLER-------------

// value = document.scripts;
// value = document.scripts.length;
// value = document.scripts[0];


// //-----Links

// value = document.links;
// value = document.links[0];
// value = document.links[document.links.length-1];
// value = document.links[document.links.length-1].getAttribute("class"); //.className de yazabiliriz
// value = document.links[document.links.length-1].getAttribute("href");
// value = document.links[document.links.length-1].className;
// value = document.links[document.links.length-1].classList;


// //------Formlar

// value = document.forms;
// value = document.forms.length;
// value = document.forms[0];
// value = document.forms["form"];
// value = document.forms[0].id;
// value = document.forms[0].getAttribute("id");
// value = document.forms[0].name;
// value = document.forms[0].getAttribute("name");

// value = document.forms[0].method; //default olarak "get"

// console.log(value);



//--------Elementleri Id göre seçme


let element;

element = document.getElementById("todo-form"); //ıd seçimi
element = document.getElementById("tasks-title");


//Elementi Classa göre secme


element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("card-header");


//Elementi Tag'e göre seçme

element = document.getElementsByTagName("div"); //div'leri li'leri ul'leri seçebiliyoruz class ismi vermeden


// Query Selector - Scc Selector ---tek bir element döner (Sayfadaki ilk buldugu elementi secer ilk classı yada id alır) 

element = document.querySelector("#todo-form"); //#id
element = document.querySelector("#tasks-title");

element = document.querySelector(".list-group-item"); //.class

element = document.querySelector("li");
element = document.querySelector("div");

//-QuerySelectorAll  --(Tüm Elementleri seç)

element = document.querySelectorAll(".list-group-item"); //Node lİST

// element.forEach(function(el){
//     console.log(el);
// });





//console.log(element);
