// function list() {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET","https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest");
//     xhr.onload = () => {
//         console.log(xhr.status);
//         const response = JSON.parse(xhr.responseText);
//         console.log(`Response`, response);

//     }
//     xhr.setRequestHeader('X-CMC_PRO_API_KEY','b60a6587-6230-4788-8841-de05872ed177');
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.send();
// }

// list();

const filter = document.getElementById("form-search");


eventListeners();

function eventListeners() {
    filter.addEventListener("keyup",filterCoin);
}


var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
  });


function coinList() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "coin.json");
    xhr.onload = function () {
        let list = document.getElementById("coinList");
        if (xhr.status == 200) {
            const parsedData = JSON.parse(xhr.responseText);
            console.log(parsedData);

            parsedData.data.forEach(function (e) {
                list.innerHTML += `
                <tr id="innerId">
                    <th>${e.cmc_rank}</th>
                    <th>
                    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/${e.id}.png" class="image-money">
                    ${e.name}</th>
                    <th>${formatter.format(e.quote.USD.price)}</th>
                    <th class="${(e.quote.USD.percent_change_24h < 0 ? 'low':'high')}">%${e.quote.USD.percent_change_24h}</th>
                    <th class="${(e.quote.USD.percent_change_7d < 0 ? 'low':'high')}">% ${e.quote.USD.percent_change_7d}</th>
                    <th>${formatter.format(e.quote.USD.market_cap)}</th>
                    <th>${formatter.format(e.quote.USD.volume_24h)}</th>
                    <th>${formatter.format(e.circulating_supply)} ${e.symbol}</th>
                    <th class="${e.quote.USD.percent_change_7d < 0 ? 'grafikRed' : 'grafikGreen'}">
                    <img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${e.id}.svg">
                    </th>
                </tr>
                `;
            });
        } else {
            console.log("Hata Olustu");
        }
    }
    xhr.send();
}



function filterCoin(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelector(".coinList");
    console.log(listItems);
    listItems.forEach(function(listItem){
      const text = listItem.textContent.toLowerCase();
      if (text.indexOf(filterValue) === -1){
        // Bulamadı
        listItem.setAttribute("style","display:none !important");
      }
      else {
        listItem.setAttribute("style","display:block");
      }
    })
  }



coinList();