const filter = document.getElementById("form-search");
const list = document.getElementById("coinList");

eventListeners();

function eventListeners() {
    filter.addEventListener("keyup", filterCoin);
}
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

});

class Request {
    static async get(url) {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'X-CMC_PRO_API_KEY': 'b60a6587-6230-4788-8841-de05872ed177',
                "Content-Type": "application/json"
            },

        });
        const data = await res.json();
        return data;
    }
}
Request.get("coin.json").then(response => callback(response));


const interval = setInterval(function () {
    Request.get("coin.json").then(response => callback(response));
}, 5000);



function callback(e) {
    console.log(e);
    if (e !== null) {
        while (list.firstElementChild !== null) {
            list.firstElementChild.remove();
        }
        e.data.forEach(function (e) {
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
        console.log(errorKey);
    }

}


function filterCoin(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll("#innerId");

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