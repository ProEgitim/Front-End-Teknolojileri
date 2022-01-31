let coinArr;
const request = new Request();
request.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest")
  .then(resData => {
    resData.data.forEach(el => {
      document.getElementById("coin-list").innerHTML +=
        `
<tr >
      <th scope="row">${el.cmc_rank}</th>
      <td class="findCoin"><img class="me-2" src="https://s2.coinmarketcap.com/static/img/coins/64x64/${el.id}.png" alt="" width="25" height="25">${el.name}</td>
      <td>${el.quote.USD.price.toLocaleString('en-US', {style:'currency',currency:'USD'})}</td>
      <td class=" ${el.quote.USD.percent_change_7d <0 ? 'text-danger': 'text-success'}">${el.quote.USD.percent_change_7d.toFixed(4)}%</td>
      <td class=" ${el.quote.USD.percent_change_24h <0 ? 'text-danger': 'text-success'}">${el.quote.USD.percent_change_24h.toFixed(4)}%</td>
      <td>${el.quote.USD.market_cap.toLocaleString('en-US', {style:'currency',currency:'USD'})}</td>
      <td>${el.quote.USD.volume_24h.toLocaleString('en-US', {style:'currency',currency:'USD'})}</td>
      <td><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${el.id}.svg" class="${el.quote.USD.percent_change_7d <0 ? 'graph-red': 'graph-green'}"  loading="lazy" alt="" ></td>
</tr>
`
    });
  });


  request.getTrending("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest")
  .then(response => callback(response.data))
  .catch(err=> console.log(err));

  function callback(response){
   let resData= response.splice(50,3);
    console.log(resData)
    resData.forEach((res,index)=>{
      
      document.querySelector(".trending-list").innerHTML+= `
      <tr>
                <th scope="row">${index+1}</th>
                <td><img class="me-2" src="https://s2.coinmarketcap.com/static/img/coins/64x64/${res.id}.png" alt="" width="25" height="25">${res.name}</td>
                <td class= "${res.quote.USD.volume_change_24h < 0 ? 'text-danger':'text-success'}">${res.quote.USD.volume_change_24h }%</td>            
       </tr>
      
      `
    });

    let dataTwo = response.splice(60,3);
    dataTwo.forEach((elem,index)=>{
      document.querySelector(".trending-list-two").innerHTML+=`
      <tr>
      <th scope="row">${index+1}</th>
                <td><img class="me-2" src="https://s2.coinmarketcap.com/static/img/coins/64x64/${elem.id}.png" alt="" width="25" height="25">${elem.name}</td>
                <td class= "${elem.quote.USD.volume_change_24h < 0 ? 'text-danger':'text-success'}">${elem.quote.USD.volume_change_24h }%</td>            
       </tr>

      `
    });

    let dataThree = response.splice(70,3);
    dataThree.forEach((ele,index)=>{
      document.querySelector(".trending-list-three").innerHTML+=`
      <tr>
      <th scope="row">${index+1}</th>
                <td><img class="me-2" src="https://s2.coinmarketcap.com/static/img/coins/64x64/${ele.id}.png" alt="" width="25" height="25">${ele.name}</td>
                <td class= "${ele.quote.USD.volume_change_24h < 0 ? 'text-danger':'text-success'}">${ele.quote.USD.volume_change_24h }%</td>            
       </tr>

      `
    })

    
    
  }

