
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", getAllData);

function getAllData(){
    const params = 'start=1&limit=5000&convert=USD';
    const xhr = new XMLHttpRequest();
    // xhr.open("GET","https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest/", true);
    xhr.open("GET","https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?" + params, true);
    xhr.setRequestHeader('X-CMC_PRO_API_KEY', '614233b2-eb8d-4675-a42a-d3f52ec3c13f');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.setRequestHeader('Accepts', 'application/json');
    xhr.onload = function(){
        // if(this.status){
            const response = JSON.parse(this.responseText);
            console.log(response);
        // }
    }
    xhr.send();
}















// function allData(){
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET","data.json",true);
//     xhr.onload = function(){
//         let list = document.getElementById("tableBody");
//         if(this.status == 200){
//             const parsedData = JSON.parse(this.responseText);
//             parsedData.forEach(function(e){
//                 list.innerHTML += `
//         <tr>
//           <th>${e.Name}</th>
//           <th>${e.Price}</th>
//           <th>${e.salary}</th>
//           <th>${e.24h %}</th>
//         </tr>
//         `;
//             });
//         }
//         else{
//             console.log("Hata oluştu.")
//         }
//     }
//     xhr.send();
// }
