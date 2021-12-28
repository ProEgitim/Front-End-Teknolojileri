function saveToLocalStorage(newFilm) {
    
    // if (localStorage.getItem("filmler") === null) {
    //     localStorage.setItem("filmler", JSON.stringify([film]));
    // } else {
    //     // daha önce eklenmiş
    //     let film = JSON.parse(localStorage.getItem("film"));
    //     film.push(filmler);
    //     localStorage.setItem("filmler", JSON.stringify(filmler));
    // }
    //console.log(newFilm);
}
saveToLocalStorage.prototype.saveToLocalStorage = function(key,value){
    localStorage.setItem(key, JSON.stringify(value));
}

function getToLocalStorage(){

}
getToLocalStorage.prototype.getToLocalStorage = function(newFilm){
    let filmArr;
    if (filmArr === null) {
        filmArr = [];
    } else{
        filmArr = JSON.parse (localStorage.getItem('Filmler'));
        filmArr.push(newFilm);
    }
    return filmArr;
}