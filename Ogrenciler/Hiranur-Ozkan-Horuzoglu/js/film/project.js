const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");

//UI Objesini Başlatma
const ui = new UI();
saveToLocalStorage();
getToLocalStorage();

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
    ui.displayMessage("Tüm alanları doldurun...","danger");
  }
  else{
    const newFilm = new Film(title,director,url);
    ui.addFilmToUI(newFilm);
    // Başarılı Mesajı
    ui.displayMessage("Film Başarı ile eklendi...","success");
    saveToLocalStorage(newFilm);
  }
  ui.clearInputs(titleElement,urlElement,directorElement);
  e.preventDefault();
  
}

// function adimiSoyle(isim) {
//   console.log(" beni çağıran " + isim);
// }
// adimiSoyle("Hiranur");

//filmleri object array olarak local eklicez
//bos girildiyse hata eklenicek duzgun girildiyse basarili mesaji vericek (alert)
// film silme islemi hem arayuz hem storagedan silme
//tum film temizleme yapicaz key ucursak olur hem storage hem uida