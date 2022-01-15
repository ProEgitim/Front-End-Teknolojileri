function saveToLocalStorage(newFilm) {
    let filmler = JSON.parse(localStorage.getItem('Filmler'));
    if (filmler === null) {
        filmler = [];
    }
    filmler.push(newFilm);
    localStorage.setItem('Filmler', JSON.stringify(filmler));

}

function getLocalStorage() {
    let film;
    film = JSON.parse(localStorage.getItem("Filmler"));
    return film;
}

function deleteFromStorage(deletefilm) {
    let films = getLocalStorage();
    films.forEach(function (film, index) {
        if (film.title === deletefilm) {
            films.splice(index, 1);
        }
    });
    localStorage.setItem("Filmler", JSON.stringify(films));
}
//   function deleteTodoFromStorage(deleteTodo){
//     let todos = getTodosFromStorage();
//     todos.forEach(function(todo,index){
//       if(todo === deleteTodo){
//         todos.splice(index,1);
//       }
//     });
//     localStorage.setItem("todos",JSON.stringify(todos));
//   }