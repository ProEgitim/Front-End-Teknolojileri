function saveToLocalStorage(newFilm) {
    let filmler = JSON.parse(localStorage.getItem('Filmler'));
    if (filmler === null) {
        filmler = [];
    }
    filmler.push(newFilm);
    localStorage.setItem('Filmler',JSON.stringify(filmler));

}

