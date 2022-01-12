 function addStorage (){
   
 }

 addStorage.prototype.addStorage= function (key,myArr){
 localStorage.setItem(key, JSON.stringify(myArr));
 }

function getStorage(){
    
}

getStorage.prototype.getFromStorage = function(key){
  let myArr;
    myArr = JSON.parse(localStorage.getItem(key));
   return myArr;
  
}
