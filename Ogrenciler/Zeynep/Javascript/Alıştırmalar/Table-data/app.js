let button = document.getElementById("button");
button.addEventListener("click", allData);



function allData(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","data.json",true);
    xhr.onload = function(){
        let list = document.getElementById("tableBody");
        if(this.status == 200){
            const parsedData = JSON.parse(this.responseText);
            parsedData.forEach(function(e){
                list.innerHTML += `
        <tr>
          <th>${e.Name}</th>
          <th>${e.Price}</th>
          <th>${e.salary}</th>
          <th>${e.24h %}</th>
        </tr>
        `;
            });
        }
        else{
            console.log("Hata oluştu.")
        }
    }
    xhr.send();
}

// const rp = require('request-promise');
// const requestOptions = {
//     method: 'GET',
//     uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
//     qs: {
//         'start': '1',
//         'limit': '5000',
//         'convert': 'USD'
//     },
//     headers: {
//         '614233b2-eb8d-4675-a42a-d3f52ec3c13f': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'
//     },
//     json: true,
//     gzip: true
// };
//
// rp(requestOptions).then(response => {
//     console.log('API call response:', response);
// }).catch((err) => {
//     console.log('API call error:', err.message);
// });
