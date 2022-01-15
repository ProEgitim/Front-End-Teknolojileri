const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

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
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
    UI.displayMessage("Silme İşlemi Başarılı...","success");
  }
}
function deleteFilm(e){
  if(e.target.id === "delete-film"){
    UI.deleteFilmFromUI(e.target);
    Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    UI.displayMessage("Silme İşlemi Başarılı...","success");
  }
}
function loadAllFilms(){
  let films = Storage.getFilmsFromStorage();
  UI.loadAllFilms(films);
}
function addFilm(e){
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === ""){
    // Hata
    UI.displayMessage("Tüm alanları doldurun...","danger");
  }
  else{
    const newFilm = new Film(title,director,url);
    UI.addFilmToUI(newFilm);
    Storage.addFilmToStorage(newFilm);
    // Başarılı Mesajı
    UI.displayMessage("Film Başarı ile eklendi...","success");
  }
  UI.clearInputs(titleElement,urlElement,directorElement);
  e.preventDefault();
}

// Silme işlemleri yapılacak