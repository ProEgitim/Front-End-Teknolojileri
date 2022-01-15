const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const removeFilms = document.querySelector(".btn btn-danger");
const clearFilms = document.getElementById("clear-films");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];

// //UI Objesini Başlatma
// const ui = new UI();

// //Storage Objesi
// const storage = new Storage();

//Tüm eventleri yükleme
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded",loadAllFilms);
  secondCardBody.addEventListener("click",deleteFilm);
  clearFilms.addEventListener("click",clearAllFilms);
}
function addFilm() {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;
  if (title === "" || director === "" || url === "") {
    UI.displayMessage("Lütfen tüm alanları doldurun !", "danger");
  }
  else {
    const newFilm = new Film(title, director, url);
    UI.addFilmToUI(newFilm);
    Storage.addFilmToStorage(newFilm);
    UI.displayMessage("Kayıt başarıyla tamamlandı.", "success");
  }
  UI.clearInputs({ title: title, director: director, url: url });
  e.preventDefault();
}
function clearAllFilms() {
  if(confirm("Emin misiniz?")){
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
    UI.displayMessage("Silme işlemi başarılı", "success");

  }
  
}
function deleteFilm(e) {
  if(e.target.id === "delete-film"){
    UI.deleteFilmFromUI(e.target);
    Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    UI.displayMessage("Silme işlemi başarılı", "success");
  }
}
function loadAllFilms() {
  let films = Storage.getFilmsFromStorage();
  UI.loadAllFilms(films);
}
