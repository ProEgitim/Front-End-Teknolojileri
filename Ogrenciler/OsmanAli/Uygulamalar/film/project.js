const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const writeClean = document.querySelectorAll(".form-control");

//UI Objesini Başlatma
const ui = new UI();

// Tüm eventleri yükleme
eventListeners();

function eventListeners(){
  form.addEventListener("submit",addFilm);
}
function addFilm(e){
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === ""){
    ui.showAlert(`Danger`,"Tüm Alanları Doldurun");
  }
  else{
    const newFilm = new Film(title,director,url);
    ui.addFilmToUI(newFilm);
    ui.showAlert(`Success`,"Kayıt Başarıyla Tamamlandı.");
  
  }
  
  e.preventDefault();
}