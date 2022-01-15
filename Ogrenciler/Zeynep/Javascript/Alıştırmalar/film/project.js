const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const firstCardBody = document.querySelectorAll(".card-body") [0];
const inputClean = document.querySelectorAll(".form-control");
//UI Objesini Başlatma
const ui = new UI();

// Tüm eventleri yükleme
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);

}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        ui.showAlert("danger", "Tüm alanları doldurun.");
    } else {
        const newFilm = new Film(title, director, url);
        ui.addFilmToUI(newFilm);
       ui.showAlert("success", "Kayıt başarılı");

    }


    e.preventDefault();
}

// Silme işlemleri yapılacak