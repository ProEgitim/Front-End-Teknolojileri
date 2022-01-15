const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const clearAll = document.getElementById("clear-films");
const filmList = document.getElementById("films");
const deleteFilm = document.querySelectorAll("#delete-film");
//UI Objesini Başlatma


// Tüm eventleri yükleme
eventListeners();

function eventListeners(){
  form.addEventListener("submit",addFilm);
  filmList.addEventListener("click", removeFilm);
}

function addFilm(e){
  const title = titleElement.value;
  const director = directorElement.value;
  const url= urlElement.value;
  if (title === "" || director === "" || url === ""){
    UI.showAlert("danger", "hatalı giriş yapıldı");
  }
  else  {
    const newFilm = new Film(title,director,url);
    UI.addFilmToUI(newFilm);  
    UI.showAlert("success", "başarılı giriş yapıldı");
     addToStorage(newFilm);
    
 }
 UI.clearInputs(titleElement,directorElement,urlElement);
  e.preventDefault();
}

function addToStorage(newFilm){
  let filmler = GetStorage.getFromStorage("Filmler");
  if( filmler === null ){
    filmler=[];
  }
 
 filmler.push(newFilm);
 AddStorage.addStorage("Filmler", filmler);
}

document.addEventListener("DOMContentLoaded", addAlltoUI =>{
  let films;
  films= GetStorage.getFromStorage("Filmler");
  if(films=== null){
    films = [];
  }
  films.forEach((film) => {
    UI.addFilmToUI(film);
  });
  
})

clearAll.addEventListener("click", clearFilms=>{
  localStorage.clear();
  window.location.reload();
});

function removeFilm(e){
if (e.target.id = "delete-film"){
 let removedItem;
 removedItem  = e.target.parentElement.parentElement;
 removedItem.remove();
  removeFilmStorage(removedItem);  
 
}

}

function removeFilmStorage(removedItem){
  let films = GetStorage.getFromStorage("Filmler");  
  let index = films.indexOf(removedItem);
  console.log(index);
  console.log(removedItem);
  //let filmss= remove(films,removedItem);
  ///////////
  // for (var removedItem of films) {
  //  return films.splice(removedItem,1);s
  // }
    films.splice(index,1);
 

    AddStorage.addStorage("Filmler", films); 
   
}

