function LocalStorage (){

}

LocalStorage.prototype.addStorage = function(key, value){
localStorage.setItem(key, JSON.stringify(value));

}
LocalStorage.prototype.removeStorage = function(key){
    localStorage.removeItem(key);
    
    }

// function getStorage() {
    
// }

// getStorage.prototype.getFromStorage = function (key){
//     JSON.parse(localStorage.getItem(key));
//    }
