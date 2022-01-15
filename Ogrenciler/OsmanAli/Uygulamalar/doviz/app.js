const TLTutar = document.getElementById("TL");
const secim = document.getElementById("paralar");
const sonuc = document.getElementById("toplam");

secim.addEventListener('click', islem)

function islem(e) {
    if (secim.innerText=="USD"){
        usdCevir();
        if (secim.innerText=="EURO"){
            euroCevir();
            if (secim.innerText=="POUND"){
                poundCevir();
            }
        }
    }

    
}
function usdCevir() {
    let UsdKur =  
}
function euroCevir() {
    
}
function poundCevir() {
    
}