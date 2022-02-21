// async function test(data){
//   let promise = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//       resolve("Bu bir değerdir.");
//     },5000);
//   });
//   let response = await promise;
//   return response;
// }

// test("Merhaba").then(res => console.log(res));

// // // async function test(data){
// // //   let promise = new Promise((resolve,reject)=>{
// // //     setTimeout(()=>{
// // //       resolve("bu bir testtir");
// // //     },5000)
// // //   })
// // //   let response= await promise;
// // //   return response;
// // // }
// // // test("merhaba").then(res => console.log(res));

// async function getCurrency(url){
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }
// getCurrency("http://api.exchangeratesapi.io/v1/latest?access_key=a48afb973259b17c029cee604aa88987")
// .then(data => console.log(data));

// // // async function getCurrency (url){
// // //   const response = await fetch(url);
// // //   const data = await response.json();
// // //   return data;
// // // }
// // // getCurrency("http://api.exchangeratesapi.io/v1/latest?access_key=a48afb973259b17c029cee604aa88987")
// // // .then(data=> console.log(data))

// GET - POST - PUT - DELETE

//  class Request {
//   async get(url){
//     const res = await fetch(url);
//     if(!res.ok){
//       throw new Error(`Bir hata alındı: ${res.status}`);
//     }
//     const data = await res.json();
//     return data;
//   }
  // async post(url,data){
  //   const res = await fetch(url,{
  //       method: 'POST',
  //       body: JSON.stringify(data),
  //       headers: {"Content-type":"application:json;"}
  //     });
  //   const resData = await res.json();
  //   return resData;
  // }
//   async put(url,data){
//     const res = await fetch(url,{
//         method: 'PUT',
//         body: JSON.stringify(data),
//         headers: {"Content-type":"application:json;"}
//       });
//       const resData = await res.json();
//       return resData; 
//   }
//   async delete(url){
//       const res = await fetch(url,{
//         method: 'DELETE',
//       });
//       return "Veri silme işlemi başarılı";
//   }
//  }
// const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albs")
// .then(album => console.log(album))
// .catch(e=>console.log(`Hata: ${e.message}`));

 //request.post("https://jsonplaceholder.typicode.com/albums",{userId:999,title:"Merhaba"})
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


 


class Request {

//  async get(url){
//    const response = await fetch(url);
//   if(!response.ok){
//      throw Error(`Bir hata alındı ${this.status}`)
//     }
//    const data = await response.json();
//    return data;
//   }
 

  async post(url,data){
    const response = await fetch(url,{
      method: "POST",
      body: JSON.stringify(data),
      headers: {'Content-Type': "application/json"}

    });
   const resData = await response.json();
    return resData;

  }

  // async put(url,data){
  //   const response = await fetch(url,{
  //     method:"PUT",
  //     body: JSON.stringify(data),
  //     headers:{"Content-type":"application/json;"}
  //   })
  //   const resData= await response.json();
  //   return resData;
  // }

  // async delete(url){
  //   const response = await fetch(url,{
  //     method: "DELETE"
  //   });
    
  //   return "veri silme başarılı";

  // }

  }



const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums/xcvxcvxc")
// .then(data=> console.log(data))
// .catch(err=>console.log(`hata: ${err.message}`));
document.getElementById('btn').addEventListener('click',  add =>{
  request.post("http://localhost:3000/posts", {
   title: "Blog1" ,
   content: "BlogContent1" ,
   yazar: "veli1" 
   })

})

//.then(added=> console.log(added))
//.catch(err=> console.log( err));

// request.put("https://jsonplaceholder.typicode.com/albums/1", {userId:1111, title:"Sercan Masar"})
// .then(res=>console.log(res))
// .catch(err=>console.log(err));

//request.delete("https://jsonplaceholder.typicode.com/albums/1")
//.then(message=> console.log(message));
