// sesion storage - key ve value


// BUTONLARI SECMEK

const add = document.getElementById("add")
const del = document.getElementById("delete")
const clear = document.getElementById("clear")



// INPUTLARI SECMEK

const addkey = document.getElementById("addkey")
const addvalue = document.getElementById("addvalue")
const deletekey = document.getElementById("deletekey")

// EVENT DİNLEMEK

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);

// FONKSİYONLAR

function addItem(e){
    sessionStorage.setItem(addkey.value,addvalue.value)
}
function deleteItem(e){
    sessionStorage.removeItem(deletekey.value)
}
function clearItems(e){
    sessionStorage.clear();
}