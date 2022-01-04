const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const newFilm = new Film(title,director,url);
//UI Objesini Başlatma
const ui = new UI();
const strg = new addStorage();


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
    
    ui.addFilmToUI(newFilm);
    ui.showAlert("success", "başarılı giriş yapıldı");
    addToStorage();
 }
 ui.clearInputs(titleElement,directorElement,urlElement);
  e.preventDefault();
}
getStorage();

function addToStorage(){
  let filmler;
  if( getStorage() === null ){
    strg.addStorage("Filmler",JSON.stringify(newFilm));
  }
  else{
    
 filmler = getStorage();
 filmler.push(newFilm);
 strg.addStorage("Filmler",JSON.stringify(filmler)); 
}
return filmler;
}


function getStorage(){
  
  let filmArr ;
  if(filmArr === null){
    filmArr = [];
  }
  else{
   
  filmArr=JSON.parse(localStorage.getItem("Filmler"));
  
  }
return filmArr;
}

