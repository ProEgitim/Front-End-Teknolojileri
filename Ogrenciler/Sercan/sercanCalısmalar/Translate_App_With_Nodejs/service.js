
 class Service{

 async  callData(){
    const res = await fetch("http://localhost:5000/api/lang", {
  
    }
           
    );
    const resData = await res.json();
    
    return resData;
    
    }
    
    async  getAllLang (){
        const response = await fetch('http://localhost:5000/langs/all');
        const resData = await response.json();
        return resData;

    }
}

    

