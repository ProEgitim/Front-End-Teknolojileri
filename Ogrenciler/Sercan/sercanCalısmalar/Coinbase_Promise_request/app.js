


let coinArr;
const request= new Request();
let data =request.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest")
.then(resData=> {
  resData.data.forEach(el=> {
    document.getElementById("coin-list").innerHTML+=
`
<tr >
      <th scope="row">${el.cmc_rank}</th>
      <td class="findCoin"><img class="me-2" src="https://s2.coinmarketcap.com/static/img/coins/64x64/${el.id}.png" alt="" width="25" height="25">${el.name}</td>
      <td>${el.quote.USD.price.toLocaleString('en-US', {style:'currency',currency:'USD'})}</td>
      <td class=" ${el.quote.USD.percent_change_7d <0 ? 'text-danger': 'text-success'}">${el.quote.USD.percent_change_7d.toFixed(4)}%</td>
      <td class=" ${el.quote.USD.percent_change_24h <0 ? 'text-danger': 'text-success'}">${el.quote.USD.percent_change_24h.toFixed(4)}%</td>
      <td>${el.quote.USD.market_cap.toLocaleString('en-US', {style:'currency',currency:'USD'})}</td>
      <td>${el.quote.USD.volume_24h.toLocaleString('en-US', {style:'currency',currency:'USD'})}</td>
      <td><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${el.id}.svg" class="h7vnx2-0 bCltOL" loading="lazy" alt="" ></td>
</tr>
`
  });
});

document.getElementById("search").addEventListener("keyup", search);

function search(e){
  let element = document.querySelectorAll(".findCoin");
  let val= e.target.value.trim();
  element.forEach(el=>{
    if (val == el.textContent.split(" ")){
      console.log(el.textContent);
    }
  })
  
 
}
  




 

  




