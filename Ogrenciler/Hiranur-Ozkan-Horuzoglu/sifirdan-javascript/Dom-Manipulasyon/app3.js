let value;


const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");



value = todoList;
value = todo;
value = cardrow;


//Child Notes -Text dahil-(satır atlamalarıda sayıyor)

value = todoList.childNodes;
value = todoList.childNodes[0]; 

//Children -Element -

value = todoList.children;
value = todoList.children[todoList.children.length-1];
value = todoList.children[2].textContent = "Değişti";


value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "Burası da degişti."; //cardrow torununu bulmuş olduk


value = todoList;
value = todoList.firstElementChild; //ilk cocugu
value = todoList.lastElementChild;  //son cocugu
value = todoList.children.length; //kaç cocugu oldugu 4 element cocugu
value = todoList.childElementCount; // kac cocugu oldugu 4 element cocugu

value = cardrow;
value = cardrow.parentElement; //cardrow ebeveyni
value = cardrow.parentElement.parentElement; //parentElement bir üst elamana cıkıyor


//Element Kardeşşleri Bulma

value = todo;
value = todo.previousElementSibling; //bir önceki kardese git
value = todo.nextElementSibling; //bir sonraki kardese git
value = todo.nextElementSibling.nextElementSibling;

value = todo.previousElementSibling.previousElementSibling; //todo 1 bir üstinde kardes olmadı için null deger döner


console.log(value);