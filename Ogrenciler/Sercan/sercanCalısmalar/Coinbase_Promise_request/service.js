class Request {
async get(url){
      const response=  await fetch(url,{
            method:"GET",
            headers:{"Content-type": "application/json;"},
            headers:{"X-CMC_PRO_API_KEY": "0c2eac58-d782-4e65-a162-02f10104582f"}
     });
     if(!response.ok){
         throw Error("This is Error message");
     }
     const resData = await response.json();
     return resData;
 }


}