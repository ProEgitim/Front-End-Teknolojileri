document.addEventListener("DOMContentLoaded",bring);

function bring (){
  const xhr = new XMLHttpRequest();
  console.log(xhr);
 //xhr.open("GET", "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY="+"0c2eac58-d782-4e65-a162-02f10104582f");
 // xhr.onload =function (){
    
    
      let response = JSON.parse(localStorage.getItem("Coins"));
      console.log(response);
     // localStorage.setItem("Coins", JSON.stringify(response.data));
      response.forEach(el => {
        document.getElementById("coin-list").innerHTML+=
     `
      <tr >
            <th scope="row">${el.cmc_rank}</th>
            <td ><img class="me-2" src="https://s2.coinmarketcap.com/static/img/coins/64x64/${el.id}.png" alt="" width="25" height="25">${el.name}</td>
            <td>${el.quote.USD.price.toLocaleString('en-US', {style:'currency',currency:'USD'})}</td>
            <td class=" ${el.quote.USD.percent_change_7d <0 ? 'text-danger': 'text-success'}">${el.quote.USD.percent_change_7d.toFixed(4)}%</td>
            <td class=" ${el.quote.USD.percent_change_24h <0 ? 'text-danger': 'text-success'}">${el.quote.USD.percent_change_24h.toFixed(4)}%</td>
            <td>${el.quote.USD.market_cap.toLocaleString('en-US', {style:'currency',currency:'USD'})}</td>
            <td>${el.quote.USD.volume_24h.toLocaleString('en-US', {style:'currency',currency:'USD'})}</td>
            <td><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${el.id}.svg" class="h7vnx2-0 bCltOL" loading="lazy" alt="" ></td>
      </tr>
     `
        
      });
     
   
 // }
 // xhr.send();
}


