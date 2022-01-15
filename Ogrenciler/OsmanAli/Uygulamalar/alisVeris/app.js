//TÜM İTEMLERİ SEÇELİM
const alert = document.querySelector('.alert');
const form = document.querySelector('.alisverisForm');
const bakkal = document.getElementById('bakkal');
const submitBtn = document.querySelector('.submitBtn');
const container = document.querySelector('.bakkal-container');
const list = document.querySelector('.bakkal-list');
const clearBtn = document.querySelector('.clear-btn');
//AYARLARI DÜZENLEYELİM
let editElement;
let editFlag = false;
let editID = "";
//OLAYLARI DİNLEYELİM
form.addEventListener('submit', addItem)
clearBtn.addEventListener('click', clearItems)
window.addEventListener('DOMContentLoaded', setupItems);
//TÜM FONKSYONLAR
function addItem(e){
    e.preventDefault();
    const value = bakkal.value;
    const id = new Date().getTime().toString();
    if(value && !editFlag){
        createListItem(id, value);
        displayAlert("Kayıt başarıyla eklendi", "success");
        container.classList.add("show-container");
        addToLocalStorage(id, value);
        setBackToDefault();
    }
    else if(value && editFlag){
        editElement.innerHTML = value;
        displayAlert("Kayıt Güncellendi", "success");
        editLocalStorage(editID,value);
        setBackToDefault();

    }
    else{
        displayAlert("Lütfen bir değer girin", "danger");
    }
}
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
}
setTimeout(function(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
},1000)
//YEREL DİSKE VERİLERİMİZİ EKLEYELİM, SİLELİM VE DÜZENLEYELİM
function clearItems () {
    const items = document.querySelectorAll('.bakkal-item');
    if(items.length>0){
       items.forEach(function(item){
           list.removeChild(item);
       });
    }
    container.classList.remove("show-container");
    displayAlert("Liste Temizlendi", "danger");
    setBackToDefault();
    localStorage.removeItem('list');
}
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length===0){
        container.classList.remove("show-container");
    }
    displayAlert("Kayıt Silindi.", "danger");
    setBackToDefault();
    removeFromLocalStorage(id);
}
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    bakkal.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";
}
function setBackToDefault() {
    bakkal.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}
function addToLocalStorage(id, value) {
    const bakkal = {id:id,value:value};
    let items = getLocalStorage();
    items.push(bakkal);
    localStorage.setItem('list',JSON.stringify(items));
}
function removeFromLocalStorage(id){
    let items = getLocalStorage();
    items = items.filter(function(item) {
        if (item.id !== id){
            return item;
        }
    });
    localStorage.setItem('list',JSON.stringify(items));
}
function editLocalStorage(id,value) {
    let items = getLocalStorage();
    items = items.map(function(item) {
        if(item.id === id){
            item.value = value;
        }
        return item;
    });
    localStorage.setItem('list',JSON.stringify(items));
}
function getLocalStorage() {
    return localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[];
}
function setupItems () {
    let items = getLocalStorage();
    if(items.length>0){
    items.forEach(function(item) {
    createListItem(item.id,item.value)
})
container.classList.add('show-container');
    }
}
function createListItem(id,value) {
    const element = document.createElement('article');
        element.classList.add('bakkal-item');
        //const attr = document.createAttribute('data-id');
        //attr.value = id;
        element.setAttribute("id","data-id");
        element.innerHTML += ` <p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">
                <i class="fa fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
                <i class="fa fa-trash"></i>
            </button>
        </div>`;
        const deleteBtn = document.querySelector('.delete-btn');
        const editBtn = document.querySelector('.edit-btn');
        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);
        list.appendChild(element);
}