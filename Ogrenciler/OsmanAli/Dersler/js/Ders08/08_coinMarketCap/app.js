//Apiden verilerimizi çekelim
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest");
xhr.setRequestHeader("X-CMC_PRO_API_KEY", "0f6ba690-7d63-4cb7-9dc1-56e28df9a304");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onload = function () {
  let list = document.getElementById("coins");
  if (this.status) {
    //Bağlantıyı kontrol edelim. bağlantı varsa verileri response değişkenine atalım. 
    var response = JSON.parse(this.responseText);
    //Verileri ve uzunluğunu konsola yazdıralım.
    console.log(response);
    console.log("Gelen Data Adedi :" + response.data.length);
    //Verilerimizi otomatik tablo oluşturarak tabloya doldurup ekrana basalım.
    response.data.forEach(function (e) {
    //Logo ve grafik içeriklerini alabilmek için url ile değişkenlerimizi oluşturalım.
      var logo = `<img class="coin-logo" src="https://s2.coinmarketcap.com/static/img/coins/64x64/${e.id}.png" witdh="24px" height="24px"</img>`;
      var grafik = `<img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${e.id}.svg" witdh="32px" height="64px" ></img>`; 
      list.innerHTML += `
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
  }
  else {
    document.write("Bir hata oluştu.");
  }
}
//Datayı geri gönderelim.
xhr.send();

//Sayfayı 15 saniyede bir yenileyelim.
setInterval(function () {
  window.location.reload(false);
}, 15000);