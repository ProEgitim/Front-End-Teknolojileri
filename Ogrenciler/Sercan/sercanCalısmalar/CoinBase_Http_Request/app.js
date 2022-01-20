document.addEventListener("DOMContentLoaded",bring);

function bring (){
  const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY="+"0c2eac58-d782-4e65-a162-02f10104582f");
 // xhr.onload =function (){
    
    
      let response = JSON.parse(localStorage.getItem("Coins"));
      console.log(response);
     // localStorage.setItem("Coins", JSON.stringify(response.data));
      response.forEach(el => {
        document.getElementById("coin-list").innerHTML+=
     `
     <tr >
            <th scope="row">${el.cmc_rank}</th>
            <td><img src="https://s2.coinmarketcap.com/static/img/coins/64x64/${el.id}.png" alt="Girl in a jacket" width="35" height="35">${el.name}</td>
            <td>$${el.quote.USD.price }</td>
            <td class="el.quote.USD.percent_change_7d = -Infinity ? text-danger : text-success">${el.quote.USD.percent_change_7d}%</td>
            <td>${el.quote.USD.percent_change_24h}%</td>
            <td>$${el.quote.USD.market_cap}</td>
            <td>$${el.quote.USD.volume_24h}</td>
          </tr>
     `
      });
     
   
 // }
 // xhr.send();
}


