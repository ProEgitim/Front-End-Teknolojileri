// function test(data) {
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             resolve("Bu bir degerdir. ");
//         },5000);
//     });
//     let response = promise;
//     return response;
// }
// test("merhaba").then(res => console.log(res));


// async function test(data) { //asenkron calıstırıyor (async)
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             resolve("Bu bir degerdir. ");
//         },5000);
//     });
//     let response = await promise;
//     return response;
// }
// test("merhaba").then(res => console.log(res));

// async function getCurrency(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }
// getCurrency("http://api.exchangeratesapi.io/v1/lates?access_key=a48afb973259b17c029cee604aa88987")
// .then(data => console.log(data));


class Request {
    async get(url){
      const res = await fetch(url);
      if(!res.ok){
        throw new Error(`Bir hata alındı: ${res.status}`);
      }
      const data = await res.json();
      return data;
    }
    async post(url,data){
      const res = await fetch(url,{
          method: 'POST',
          body: JSON.stringify(data),
          headers: {"Content-type":"application:json;"}
        });
      const resData = await res.json();
      return resData;
    }
    async put(url,data){
      const res = await fetch(url,{
          method: 'PUT',
          body: JSON.stringify(data),
          headers: {"Content-type":"application:json;"}
        });
        const resData = await res.json();
        return resData; 
    }
    async delete(url){
        const res = await fetch(url,{
          method: 'DELETE',
        });
        return "Veri silme işlemi başarılı";
    }
  }
  const request = new Request();
  
  request.get("https://jsonplaceholder.typicode.com/albums")
  .then(album => console.log(album))
  .catch(e=>console.log(`Hata: ${e.message}`));
  
  // request.post("https://jsonplaceholder.typicode.com/albums",{userId:999,title:"Merhaba"})
  // .then(newAlbum => console.log(newAlbum));
  
  // request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:777,title:"Selam"})
  // .then(newAlbum => console.log(newAlbum));
  
  // request.delete("https://jsonplaceholder.typicode.com/albums/1")
  // .then(message => console.log(message));
  
  // function promiseHandle(promise) {  // Farklı bir kullanım
  //   return promise
  //           .then(data => [null, data])
  //           .catch(err => [err]);
  // }
  
  // async function asyncFunc(param1, param2) {
  //     const [err, data] = await promiseHandle(expensiveFunction(param1, param2));
  //     // This just to show, that in this way we can control what is going on..
  //     if (err || !data) {
  //         if (err) return Promise.reject(`Error but not data..`);
  //         return Promise.reject(`Error but not data..`);
  //     }
  //     return Promise.resolve(data);
  // }
