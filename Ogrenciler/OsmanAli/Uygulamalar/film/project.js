const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");

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
    // Hata
  }
  else{
    const newFilm = new Film(title,director,url);
    ui.addFilmToUI(newFilm);
    // Başarılı Mesajı
  }



  e.preventDefault();
}

// Silme işlemleri yapılacak