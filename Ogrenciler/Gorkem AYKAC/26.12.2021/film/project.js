const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const filmList = document.getElementById("films");

//UI Objesini Başlatma
const ui = new UI();
const storage = new LocalStorage();
var films = [];
var storageFilms = [];
loadData();
eventListeners();

function eventListeners(){
  form.addEventListener("submit",addFilm);
  filmList.addEventListener("click",removeFilm);
 
}
function loadData()
{
  storageFilms = JSON.parse(localStorage.getItem("Films"));
  
  if(storageFilms != null)
  {
    storageFilms.forEach(newFilm => {
      newFilm = new Film(newFilm.title,newFilm.director,newFilm.url);
      films.push({newFilm:title,newFilm:director,newFilm:url});
      ui.addFilmToUI(newFilm);
    });
  }

}
function removeFilm(e)
{
  if(e.target.id == "delete-film")
  {
    e.target.parentNode.parentNode.remove();
    films.splice(e.target.parentNode.parentNode.rowIndex,1);
    storage.addStorage('Films',films);
  }
}
function addFilm(e){
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === ""){
    ui.showAlert("danger", "Film Eklenmedi!");
  }
  else{
    const newFilm = new Film(title,director,url);
    ui.addFilmToUI(newFilm);
    ui.showAlert("success","Film Eklendi!");
    ui.clearInputs();
    films.push({title:title,director:director,url:url});
    storage.addStorage('Films',films);
  }



  e.preventDefault();
}

// Silme işlemleri yapılacak