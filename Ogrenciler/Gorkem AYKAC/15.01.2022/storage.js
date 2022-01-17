class LocalStorage{

static addStorage(key, value){
localStorage.setItem(key, JSON.stringify(value));

}
static removeStorage(key){
    localStorage.removeItem(key);
    
}
}



