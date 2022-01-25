// function getData(data){
//   return new Promise(function(resolve,reject){
//     setTimeout(function(){
//       if(typeof data === "string"){
//         // Olumlu
//         resolve("Mesajınızı aldık");
//       }
//       else{
//         // Olumsuz
//         reject(new Error("Lütfen string değer girin"));
//       }
//     },5000);
//   });
// }
// getData("Merhaba")
// .then(response => console.log("Gelen Değer: "+ response))
// .catch(err=>console.log(err));
// console.log(getData("Merhaba").resolve);

function addTwo(number){
  return new Promise((resolve,reject)=>{
    setTimeout(function(){
      if(typeof number === "number"){
        // Olumlu
        resolve(number+2);
      }
      else{
        // Olumsuz
        reject(new Error("Lütfen bir sayı girin"));
      }
    },3000);
  })
}

addTwo(10)
.then(response =>{
  console.log(response);
  return response+2;
}).then(res2 => console.log(res2))
.catch(err=>console.log(err));