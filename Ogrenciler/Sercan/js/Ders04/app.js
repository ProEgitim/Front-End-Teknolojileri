
/////butonları seçmek//
const add = document.getElementById("add");
const del =  document.getElementById("delete");
const clear =  document.getElementById("clear");

//// ınputları seçmek //
const addkey = document.getElementById("addkey");
const addvalue =  document.getElementById("addvalue");
const deletekey =  document.getElementById("deletekey");
///event dinlemek
add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);

//fonksiyonlar
function addItem(e){
    sessionStorage.setItem(addkey.value,addvalue.value);
}

function deleteItem(e){
sessionStorage.removeItem(deletekey.value);
}

function clearItems(e){
    sessionStorage.clear();
}

