class Storage {
    get(val)
    {
      
      if(localStorage.getItem('lastSearch')=== null){
          localStorage.setItem('lastSearch' , JSON.stringify([val]) );
      }
      else{
       let arr = JSON.parse(localStorage.getItem('lastSearch'))
       arr.push(val);
       localStorage.setItem('lastSearch' , JSON.stringify(arr) );

      }
///////////////////////////////////////////////////////////////////////
      if(sessionStorage.getItem('lastSearch')=== null){
        sessionStorage.setItem('lastSearch' , JSON.stringify([val]) );
    }
    else{
     let arr = JSON.parse(sessionStorage.getItem('lastSearch'))
     arr.push(val);
     sessionStorage.setItem('lastSearch' , JSON.stringify(arr) );

    }
    }
}