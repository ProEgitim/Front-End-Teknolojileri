//Sesion Storage - Key ve Value

//Butonları Seçmek
const add = document.getElementById("add");
const del = document.getElementById("delete");
const clear = document.getElementById("clear");

//Input Seçmek
const addkey = document.getElementById("addkey");
const addvalue = document.getElementById("addvalue");
const deletekey = document.getElementById("deletekey");

//Event Dinlemek
add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItem);

//Fonksiyonlar
function addItem(e){
    sessionStorage.setItem(addkey.value,addvalue.value);
}
function deleteItem(e){
    sessionStorage.removeItem(deletekey.value);
}
function clearItem(e){
    sessionStorage.clear();
}