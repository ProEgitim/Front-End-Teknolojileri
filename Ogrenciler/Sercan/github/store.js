//local storage


class Store{
    constructor(){
        
    }
    add(userName){
       
    localStorage.setItem("Github", JSON.stringify(userName));   
      
    
    }

    get(key){
     let myArr;
    myArr= JSON.parse(localStorage.getItem(key));
    return myArr;
    
    }

    delete(){
        localStorage.clear();
    }

}



