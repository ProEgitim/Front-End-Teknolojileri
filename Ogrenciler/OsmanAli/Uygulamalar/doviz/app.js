kurlar = new Array('http://www.tcmb.gov.tr/kurlar/today.xml');
dolarAlis = kurlar;
dolarSatis = kurlar;

const TLTutar = document.getElementById("TL");
const secim = document.getElementById("paralar");
const sonuc = document.getElementById("toplam");

secim.addEventListener('click', islem)

function islem(e) {
    if (secim.innerText=="USD"){
        usdCevir();
        if (secim.innerText=="EURO"){
            euroCevir();
        }
    }

    
}
function usdCevir() {
    let UsdKur = dolarSatis;  
    sonuc = UsdKur;
}
function euroCevir() {
    let EuroKur = euroSatis;
    sonuc = EuroKur;
}