function UI(){

}
UI.prototype.addFilmToUI = function(newFilm){
  // <tr>
  //   <td><img src="" class="img-fluid img-thumbnail"></td>
  //   <td></td>
  //   <td></td>
  //   <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  // </tr> 

  const filmList = document.getElementById("films");
  filmList.innerHTML += `
   <tr>
     <td class="w-25"><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
     <td class="w-25">${newFilm.title}</td>
     <td class="w-25">${newFilm.director}</td>
     <td class="w-25"><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
   </tr>`
}