document.getElementById("ajax").addEventListener("click",getAllEmployees);
function getAllEmployees(){
  // const xhr = new XMLHttpRequest();
  // xhr.open("GET","employees.json",true);
  // xhr.onload = function(){
  //   let list = document.getElementById("employees");
  //   if(this.status == 200){
  //     const parsedData = JSON.parse(this.responseText);
  //     parsedData.forEach(function(e){
  //       list.innerHTML += `
  //       <tr>
  //         <th>${e.name}</th>
  //         <th>${e.department}</th>
  //         <th>${e.salary}</th>
  //       </tr>
  //       `;
  //     });
  //   }
  //   else{
  //     console.log("Hata oluştu.")
  //   }
  // }
  // xhr.send();


// xhr.open("GET","employees.json", true);
// xhr.onload = function(){
//   let list = document.getElementById("employees");
//   if(this.status === 200){
//     const parseData= JSON.parse(this.responseText);
   
//     parseData.forEach(e => {
//       list.innerHTML+=`
//       <tr>
//               <th scope="col">${e.name}</th>
//               <th scope="col">${e.department}</th>
//               <th scope="col">${e.salary}</th>
//      </tr>
//       `
//     });
  
//   }
//   else{
//     console.log("hata oluştu")
//   }
// }

// xhr.send();
/////////////////////////////// post isteği atıldı ama json dosyasına post atılamadığından url api olması gerekiyor
const xhr = new XMLHttpRequest();
 const data = {name:"Ali Veli", department:"Software", salary:4500};
 xhr.open("POST","https://jsonplaceholder.typicode.com/albums",true );
 xhr.setRequestHeader("Content-Type", "application/json");
 xhr.onload= function(){
   if(xhr.status){
    console.log(xhr.responseText);  b
   }
   else{console.log("hata oluştu")};
  
 }
 xhr.send(JSON.stringify(data));
 
 }

 


