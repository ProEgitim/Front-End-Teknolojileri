// function getTextFile(){
//   fetch("exmp.txt")
//   .then(response => response.text())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
// }
// getTextFile();

// function getJsonFile(){
//   fetch("exmp.json")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
// }
// getJsonFile();

// function getApi(){
//   fetch("http://api.exchangeratesapi.io/v1/latest?access_key=a48afb973259b17c029cee604aa88987")
//   .then(response => response.json())
//   .then(data => console.log(data.rates.TRY))
//   .catch(err => console.log(err));
// }
// getApi();

// Get - Post - Put - Delete

class Request {
  get(url){
    return new Promise((resolve, reject)=>{
      fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    })
  }

  post(url,data){
    return new Promise((resolve, reject)=>{
      fetch(url,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {"Content-type":"application:json;"}
      })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    })
  }
  put(url,data){
    return new Promise((resolve, reject)=>{
      fetch(url,{
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {"Content-type":"application:json;"}
      })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    })
  }
  delete(url){
    return new Promise((resolve, reject)=>{
      fetch(url,{
        method: 'DELETE',
      })
      .then(response => resolve("Veri Silme Başarılı"))
      .catch(err => reject(err));
    })
  }
}
const request = new Request();

request.get("exmp.json")
.then(album => console.log(album))
.catch(err => console.log(err));

request.post("https://jsonplaceholder.typicode.com/albums",{userId:999,title:"Merhaba"})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.log(err));

// request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:777,title:"Selam"})
// .then(newAlbum => console.log(newAlbum))
// .catch(err => console.log(err));

// request.delete("https://jsonplaceholder.typicode.com/albums/1")
// .then(message => console.log(message))
// .catch(err => console.log(err));