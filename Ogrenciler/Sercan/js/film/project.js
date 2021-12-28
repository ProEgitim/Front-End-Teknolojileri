const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");

//UI Objesini Başlatma
const ui = new UI();
const strg = new addStorage ();
 const gstrg = new getStorage ();
// Tüm eventleri yükleme
eventListeners();

function eventListeners(){
  form.addEventListener("submit",addFilm);
}
function addFilm(e){
  const title = titleElement.value;
  const director = directorElement.value;
  const url= urlElement.value;


  if (title === "" || director === "" || url === ""){
    ui.showAlert("danger", "hatalı giriş yapıldı");
  }
  else  {
    const newFilm = new Film(title,director,url);
    ui.addFilmToUI(newFilm);
    ui.showAlert("success", "başarılı giriş yapıldı");  
    strg.addStorage("Filmler",JSON.stringify(newFilm));  
 }
 ui.clearInputs(titleElement,directorElement,urlElement);
  e.preventDefault();
}




// Silme işlemleri yapılacak