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
    }

    

}