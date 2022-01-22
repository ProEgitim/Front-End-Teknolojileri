const filter = document.getElementById("form-search");

eventListeners();
coinList();

function eventListeners() {
    filter.addEventListener("keyup", filterCoin);
}


var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

});


function coinList() {
    const xhr = new XMLHttpRequest();
    //xhr.open("GET", "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"); //--real data
    xhr.open("GET", "coin.json");  //--mock(sahte) data
    xhr.setRequestHeader('X-CMC_PRO_API_KEY', 'b60a6587-6230-4788-8841-de05872ed177');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
        let list = document.getElementById("coinList");
        if (xhr.status == 200) {
            const parsedData = JSON.parse(xhr.responseText);
            //console.log(parsedData);

            parsedData.data.forEach(function (e) {
                list.innerHTML += `
                <tr id="innerId" class="innerId">
                    <th>${e.cmc_rank}</th>
                    <th>
                    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/${e.id}.png" class="image-money">
                    ${e.name}</th>
                    <th>${formatter.format(e.quote.USD.price)}</th>
                    <th class="${(e.quote.USD.percent_change_24h < 0 ? 'low':'high')}">%${e.quote.USD.percent_change_24h.toFixed(2)}</th>
                    <th class="${(e.quote.USD.percent_change_7d < 0 ? 'low':'high')}">% ${e.quote.USD.percent_change_7d.toFixed(2)}</th>
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

function filterCoin(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll("#innerId");
    //console.log(listItems);
    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue) === -1) {
            // Bulamadı
            listItem.setAttribute("style", "display:none !important");
        } else {
            listItem.setAttribute("style", "display:table-row");
        }
    })
}

// let i = 0;
// let refreshInterval = setInterval(function () {
//     coinList();
//     i++;
//     let yenile = document.getElementById("innerId");
//     yenile.forEach(function() {
//         yenile.remove();
//     });
    
//     if (i == 3) {
//         clearInterval(refreshInterval);
//     }
//     console.log(i);
// }, 10000);