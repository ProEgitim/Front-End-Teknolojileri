const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

//UI Objesini Başlatma
const ui = new UI();

//Storage Objesi
const storage = new Storage();

// Tüm eventleri yükleme
eventListeners();

function eventListeners(){
  form.addEventListener("submit",addFilm);
  document.addEventListener("DOMContentLoaded",loadAllFilms);
  cardbody.addEventListener("click",deleteFilm);
  clear.addEventListener("click",clearAllFilms);
}
function clearAllFilms(){
  if(confirm("Emin misiniz?")){
    ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
    ui.displayMessage("Silme İşlemi Başarılı...","success");
  }
}
function deleteFilm(e){
  if(e.target.id === "delete-film"){
    ui.deleteFilmFromUI(e.target);
    storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    ui.displayMessage("Silme İşlemi Başarılı...","success");
  }
}
function loadAllFilms(){
  let films = storage.getFilmsFromStorage();
  ui.loadAllFilms(films);
}
function addFilm(e){
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === ""){
    // Hata
    ui.displayMessage("Tüm alanları doldurun...","danger");
  }
  else{
    const newFilm = new Film(title,director,url);
    ui.addFilmToUI(newFilm);
    storage.addFilmToStorage(newFilm);
    // Başarılı Mesajı
    ui.displayMessage("Film Başarı ile eklendi...","success");
  }
  ui.clearInputs(titleElement,urlElement,directorElement);
  e.preventDefault();
}

// Silme işlemleri yapılacak