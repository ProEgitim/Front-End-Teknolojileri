class UI{
static addFilmToUI(newFilm) {
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
   </tr>`;
};

static clearInputs (element1, element2, element3) {
  element1.value = "";
  element2.value = "";
  element3.value = "";
};

static showAlert(type, message) {
  const alert = document.createElement("div");
  alert.className = `mt-3 alert alert-${type}`;
  alert.textContent = message;
  form.appendChild(alert);

  setTimeout(function () {
    alert.remove();
  }, 2000);
};
}