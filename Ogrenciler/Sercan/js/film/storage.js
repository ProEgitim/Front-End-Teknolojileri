function addStorage (){

}

addStorage.prototype.addStorage= function (key,value){
localStorage.setItem(key, JSON.stringify(value));
}



