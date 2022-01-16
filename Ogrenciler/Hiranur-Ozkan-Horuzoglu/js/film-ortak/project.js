const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const deleteAll = document.getElementById("clear-films");
const films = document.getElementById("films");
const cardBody = document.getElementsByClassName("card-body")[1];

// //UI Objesini Başlatma
// const ui = new UI();

// // Tüm eventleri yükleme
// eventListeners();


function eventListeners() {
  form.addEventListener("submit", addFilm);
  deleteAll.addEventListener("click", clear);
  cardBody.addEventListener("click", deletefilm);
  document.addEventListener("DOMContentLoaded", allFilmsUpdateUI);
}

function addFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    // Hata
    UI.displayMessage("Tüm alanları doldurun...", "danger");
  } else {
    const newFilm = new Film(title, director, url);
    UI.addFilmToUI(newFilm);
    // Başarılı Mesajı
    UI.displayMessage("Film Başarı ile eklendi...", "success");
    saveToLocalStorage(newFilm);
  }
  UI.clearInputs(titleElement, urlElement, directorElement);
  e.preventDefault();

}

function clear() {
  while (films.firstElementChild != null) {
    films.removeChild(films.firstElementChild); // Daha hızlı
  }
  localStorage.removeItem("Filmler");
}

function deletefilm(e) {
  if (e.target.className === "btn btn-danger") {
    e.target.parentElement.parentElement.remove();
    deleteFromStorage(e.target.parentElement.parentElement.getElementsByClassName("w-25")[1].textContent);

  }
}

function allFilmsUpdateUI() {
  let films = getLocalStorage();
  films.forEach(function (film) {
    UI.addFilmToUI(film);
    }

  )
}

//filmleri object array olarak local eklicez
//bos girildiyse hata eklenicek duzgun girildiyse basarili mesaji vericek (alert)
// film silme islemi hem arayuz hem storagedan silme
//tum film temizleme yapicaz key ucursak olur hem storage hem uida