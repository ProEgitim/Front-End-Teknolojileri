class Service {
   async get(url)
   {
    const response =await fetch(url) 
    let resData = response.json();
     return resData;

}
}
