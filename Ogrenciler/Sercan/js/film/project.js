const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const clearAll = document.getElementById("clear-films");
const filmList = document.getElementById("films");
const deleteFilm = document.querySelectorAll("#delete-film");
//UI Objesini Başlatma
const ui = new UI();
const strg = new addStorage();
const Storage = new getStorage();

// Tüm eventleri yükleme
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  filmList.addEventListener("click", removeFilm);
}

function addFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;
  if (title === "" || director === "" || url === "") {
    ui.showAlert("danger", "hatalı giriş yapıldı");
  } else {
    const newFilm = new Film(title, director, url);
    ui.addFilmToUI(newFilm);
    ui.showAlert("success", "başarılı giriş yapıldı");
    addToStorage(newFilm);
  }
  ui.clearInputs(titleElement, directorElement, urlElement);
  e.preventDefault();
}

function addToStorage(newFilm) {
  let filmler = Storage.getFromStorage("Filmler");
  if (filmler === null) {
    filmler = [];
  }

  filmler.push(newFilm);
  strg.addStorage("Filmler", filmler);
}

document.addEventListener("DOMContentLoaded", (addAlltoUI) => {
  let films;
  films = Storage.getFromStorage("Filmler");
  if (films === null) {
    films = [];
  }
  films.forEach((film) => {
    ui.addFilmToUI(film);
  });
});

clearAll.addEventListener("click", (clearFilms) => {
  localStorage.clear();
  window.location.reload();
});

function removeFilm(e) {
  if ((e.target.id = "delete-film")) {
    let removedItem;
    removedItem = e.target.parentElement.parentElement;
    removedItem.remove();
    removeFilmStorage(removedItem);
  }
}

function removeFilmStorage(removedItem) {
  let films = Storage.getFromStorage("Filmler");
  const index = films.indexOf(removedItem);
  films.splice(index, 1);
  strg.addStorage("Filmler", films);
}
