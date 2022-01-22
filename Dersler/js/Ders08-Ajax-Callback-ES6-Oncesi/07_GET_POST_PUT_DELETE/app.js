class Request{
  constructor(){
    this.xhr = new XMLHttpRequest();
  }
  get(url,callback){
    this.xhr.open("GET",url);
    this.xhr.onload = () => {
      if (this.xhr.status === 200){
        callback(null,this.xhr.responseText);
      }
      else {
        callback("Get: Bir hata oluştu",null);
      }
    }
    this.xhr.send();
  }
  post(url,data,callback){
    this.xhr.open("POST",url);
    this.xhr.setRequestHeader("Content-Type", "application/json");
    this.xhr.onload = () => {
      if(this.xhr.status === 201){
        // Başarılı
        callback(null,this.xhr.responseText);
      }
      else{
        callback("Post: Bir hata oluştu.",null);
      }
    }
    this.xhr.send(JSON.stringify(data));
  }
  put(url,data,callback){
    this.xhr.open("PUT",url);
    this.xhr.setRequestHeader("Content-Type", "application/json");
    this.xhr.onload = () => {
      if(this.xhr.status === 200){
        // Başarılı
        callback(null,this.xhr.responseText);
      }
      else{
        callback("Put: Bir hata oluştu.",null);
      }
    }
    this.xhr.send(JSON.stringify(data));
  }
  delete(url,callback){
    this.xhr.open("DELETE",url);
    this.xhr.onload = () => {
      if(this.xhr.status === 200){
        // Başarılı
        callback(null,"Veri silindi");
      }
      else{
        callback("Delete: Bir hata oluştu.",null);
      }
    }
    this.xhr.send();
  }
}
const request = new Request();
// request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//   if(err === null){
//     // Başarılı
//     console.log(response);
//   }
//   else {
//     // Hata
//     console.log(err);
//   }
// });
// request.post("https://jsonplaceholder.typicode.com/albums",{userId:144,title:"Zeki Müren"},function(err,album){
//   if(err === null){
//     // Başarılı
//     console.log(album);
//   }
//   else {
//     // Hata
//     console.log(err);
//   }
// });
// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:153,title:"Tarkan"},function(err,album){
//   if(err === null){
//     // Başarılı
//     console.log(album);
//   }
//   else {
//     // Hata
//     console.log(err);
//   }
// });
request.delete("https://jsonplaceholder.typicode.com/albums/12",function(err,album){
  if(err === null){
    // Başarılı
    console.log(album);
  }
  else {
    // Hata
    console.log(err);
  }
});