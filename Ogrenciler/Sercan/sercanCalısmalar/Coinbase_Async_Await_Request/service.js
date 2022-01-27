class Request {
 get(url){
     return new Promise((resolve,reject)=>{
        fetch(url,{
            method:"GET",
            headers:{"Content-type": "application/json;"},
            headers:{"X-CMC_PRO_API_KEY": "0c2eac58-d782-4e65-a162-02f10104582f"}
        }).then(response=> resolve(response.json()))
        .catch(err=> reject(err));

     })
 }


}