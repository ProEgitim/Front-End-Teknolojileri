//Dökümanımız
//console.log(this);

//Coinler için oluşturduğumuz GET classımız
class Request {
    async get(url) {
        const api = await fetch(url,{
            method: 'GET' ,
            headers: { "X-CMC_PRO_API_KEY ": "0f6ba690-7d63-4cb7-9dc1-56e28df9a304" }
        });
        if (!api.ok) {
            throw new Error(`Bağlantı sağlanamadı: ${api.status}`);
        }
       else {
            var datam = await api.jason();
           coinListele();
       }
    }
}

const request = new Request();
request.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest")
    .then(datam => console.log(datam))
    .catch(e => console.log(`Hata: ${e.message}`));

function coinListele () {
    datam.data.forEach(function (e) {
        var logo = `<img class="coin-logo" src="https://s2.coinmarketcap.com/static/img/coins/64x64/${e.id}.png" witdh="24px" height="24px"</img>`;
        var grafik = `<img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${e.id}.svg" witdh="32px" height="64px" ></img>`;
        datam.innerHTML += `
       <tr>
                <th scope="row">${e.id}</th>
                <td> ${logo} ${e.symbol}</td>
                <td>${e.name}</td>
                <td>${e.quote.USD.price}$</td>
                <td>${e.quote.USD.percent_change_1h}</td>
                <td>${e.quote.USD.percent_change_24h}</td>
                <td>${e.quote.USD.percent_change_7d}</td>
                <td>${grafik}</td>
       </tr>
        `;
    });

    return datam;
}

//Her 15sn içinde bağlantımızı yeniler.
setInterval(function () {
    window.location.reload(false);
}, 15000);