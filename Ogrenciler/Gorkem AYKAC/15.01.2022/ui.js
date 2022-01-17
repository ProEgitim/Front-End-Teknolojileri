class UI{
  static addFilmToUI(newFilm){  
    const filmList = document.getElementById("films");
    filmList.innerHTML += `
     <tr>
       <td class="w-25"><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
       <td class="w-25">${newFilm.title}</td>
       <td class="w-25">${newFilm.director}</td>
       <td class="w-25"><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
     </tr>`
  }
  
 static showAlert(type, message){
    const alert = document.createElement("div");
    alert.className = `mt-3 alert alert-${type}`;
    alert.textContent = message;
    form.appendChild(alert);
  
    setTimeout(function(){
      form.removeChild(form.lastChild);
    }, 2000);
  }
  
  static clearInputs(){
    titleElement.value = "";
    directorElement.value = "";
    urlElement.value = "";
  }
}
