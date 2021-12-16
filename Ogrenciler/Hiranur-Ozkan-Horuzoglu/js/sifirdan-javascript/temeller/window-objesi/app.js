// console.log(this); //(this=window aynı şey) demek üzerinde bulundugumuz obje anlamına geliyor 

//-------------Alert

//alert("merhaba");

//-----------Confirm

// const cevap = confirm("Emin Misiniz? ");
// //console.log(cevap);

// if(cevap){
//     console.log("Silin Gitsin..");
// }
// else{
//     console.log("Silmeyin..");
// }

//-------kısahali------

// if(confirm("Emin Misiniz? ")){
//     console.log("Silin Gitsin..");
// }
// else{
//     console.log("Silmeyin..");
// }

//----------Input

// const cevap = prompt("2 + 2 = ?");

// if (cevap == "4") {
//     console.log("Cevap Doğrudur :)");
// }
// else{
//     console.log("Yanlış Cevap");
// }

let value;

value = window;
value = window.location;
value = window.location.host;
value = window.location.hostname;
value = window.location.port;
value = window.location.href; 
value = window.outerHeight; //pixel uzunluk
value = window.outerWidth; //genişlik

value = window.innerHeight;
value = window.innerWidth;

// if (confirm ("Sayfa YenilensinMi?")) {
//     console.log("Sayfa yenilendi.");
// }
// else{
//     console.log("Sayfa yenilemedi.")
// }

value = window.scrollX;//alt cubugun ne kadar sag tarafa uzaklıgı
value = window.scrollY; // dikeyde ust tarafa mesajesi uzaklıgı

console.log(value);