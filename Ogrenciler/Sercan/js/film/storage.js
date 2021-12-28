function addStorage (){

}

addStorage.prototype.addStorage= function (key,value){
localStorage.setItem(key, JSON.stringify(value));
}

 function getStorage() {
    
}

 getStorage.prototype.getFromStorage = function (newFilm){
     let filmArr;
     if(filmArr ===null){
         filmArr = [];
     }
     else{
     filmArr= JSON.parse(localStorage.getItem("Filmler"));
    
     filmArr.push(newFilm);
    }
    return filmArr;
   }


