const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const filmList = document.getElementById("films");
const clearFilms = document.getElementById("clear-films");

//UI Objesini Başlatma
var films = [];
var storageFilms = [];
loadData();
eventListeners();

function eventListeners(){
  form.addEventListener("submit",addFilm);
  filmList.addEventListener("click",removeFilm);
  clearFilms.addEventListener("click",clearFilm);
}
function loadData()
{
  storageFilms = JSON.parse(localStorage.getItem("Films"));
  
  if(storageFilms != null)
  {
    storageFilms.forEach(newFilm => {
      newFilm = new Film(newFilm.title,newFilm.director,newFilm.url);
      films.push({newFilm:title,newFilm:director,newFilm:url});
      UI.addFilmToUI(newFilm);
    });
  }

}
function clearFilm(e)
{
  //filmList.innerHTML = ``;
  while(filmList.firstElementChild !== null)
  {
    filmList.firstElementChild.remove();
  }
  films = [];
  LocalStorage.removeStorage('Films');
}
function removeFilm(e)
{
  if(e.target.id == "delete-film")
  {
    e.target.parentNode.parentNode.remove();
    films.splice(e.target.parentNode.parentNode.rowIndex,1);
    LocalStorage.addStorage('Films',films);
  }
}
function addFilm(e){
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === ""){
    UI.showAlert("danger", "Film Eklenmedi!");
  }
  else{
    const newFilm = new Film(title,director,url);
    UI.addFilmToUI(newFilm);
    UI.showAlert("success","Film Eklendi!");
    films.push({title:title,director:director,url:url});
    LocalStorage.addStorage('Films',films);
  }


  UI.clearInputs();

  e.preventDefault();
}

// Silme işlemleri yapılacak