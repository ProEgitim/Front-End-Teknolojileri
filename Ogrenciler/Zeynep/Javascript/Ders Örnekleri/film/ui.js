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
UI.prototype.clearInputs = function (element1,element2,element3){
  element1.value = "";
  element2.value = "";
  element3.value = "";
}
UI.prototy.pedisplayMessage = function(message,type){
  const cardBody = document.querySelector(".card-body");
  // Alert divini oluşturma
  const div = document.createElement("div");
  div.className=`alert alert-${type}`;
  div.textContent = message;
  cardBody.appendChild(div);
  setTimeout(function(){
    div.remove();
  },2000);
}