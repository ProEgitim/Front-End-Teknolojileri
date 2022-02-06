//Karşılaştırma Operatörleri

// == Eşittir
// ===
// != Eşit Değildir
// !== Hem Türü Hem Degeri Eşit Degildir
// < Küçüktür
// > Büyüktür
// <= Kücük eşit
// >= Büyük eşit

// console.log(2 == 2);
// console.log("js" == "java");
// console.log(2 == "2");
// console.log(2 === "2");
// console.log(4 > 2);
// console.log(2 != 2);

// // AND operatörü
// console.log((2 == 2) && ("sercan" == "sercan"));

// OR Operatörü
//console.log((2 == 2) || ("sercan" == "görkem"));

//---------------------Koşullar-----------------
// İF- ELSE YAPISI

//const error = false;
// if(!error){
//     console.log("Hata Oluştu");
// }

// if(!error){
//     console.log("Hata Oluştu");
// }
// else{
//     console.log("Hata Oluşmadı");
// }

// const process = "1";
// if (process === "1") {
//     console.log("İşlem 1")
// }
// else if(process === "2"){
//     console.log("İşlem 2")
// }
// else if(process === "3"){
//     console.log("İşlem 3")
// }
// else if(process === "4"){
//     console.log("İşlem 4")
// }
// else{
//     console.log("GEÇERSİZ İŞLEM");
// }

// SWİTC-CASE YAPISI

// const process = 2;

// switch (process) {
//     case 1:
//         console.log("İşlem 1");
//         break;
//     case 2:
//         console.log("İşlem 2");
//         break;
//     case 3:
//          console.log("İşlem 3");
//          break;
//     case 4:
//         console.log("İşlem 4");
//         break;
//     default:
//         console.log("Geçersiz İşlem ");
// }


////-------Random sayı üreterek tek-cift karşılaştırması--------

// const numbers = Math.floor(Math.random()* 100 + 1);
// console.log(numbers);

// if (numbers %2 == 1) {
    
//     console.log("Tek");
// }
// else if (numbers %2 == 0){
//     console.log("Çift");
// }
// else{
//     console.log("İşlem gecersizdir.")
// }

//--------------------------FONKSİYONLAR----------------------

// function merhaba(){
//     console.log("MERHABA :)");
// }
// merhaba();
//--------------
// function user(name,age){
//     console.log(`İsim: ${name} \nYaş: ${age}`);
// }
// user("Varol",36);
// user("Sercan",31);
//----------------
// function user(name = "Bilgi Yok",age = "Bilgi Yok"){
//     console.log(`İsim: ${name} \nYaş: ${age}`);
// }
// user("Varol",36);
// user(); //varsa deger yoksa user() içinde verdiklerimiz yazar
//------------------
// function square(x){
//     return x*x;
// }
// let a = square(2);
// console.log(a);  //karesini alma reeturn geriye bir deger döndürdük
//-----------------
// const square = function(x) {
//     return x*x;
// }
// let a = square(2);
// console.log(a);  // aynı işlemin farklı yazımı
//-----------------------------------
// const database = {
//     host: "localhost",
//     add: function(){
//         console.log("Eklendi.");
//     },
//     get: function(){
//         console.log("Veri Alındı.");
//     },
//     update: function(id){
//         console.log(`ID: ${id} güncellendi.`);
//     },
//     delete: function(id){
//         console.log(`ID: ${id} silindi.`);
//     }
// }
// console.log(database.host);
// database.add();
// database.delete(10);
//--------alan-çevre-hesaplama--------
// const kisa = Math.floor(Math.random()* 10 + 1);
// const uzun = Math.floor(Math.random()* 10 + 1);

// function dikdortgen(kisa, uzun){ 
//   let  alan = kisa * uzun;
//   let  cevre = (kisa + uzun)*2;
//     console.log(`dikdortgen: \nalan: ${alan} \nçevre: ${cevre}`);
// }
// dikdortgen (kisa,uzun);

//-------------------DÖNGÜLER---------------------------
//----WHİLE DÖNGÜSÜ
// let i = 0;
// while(i < 10){
//     console.log("Deneme");
//     //i++; //i=i+1 demek ++
//     i+=2;  //i=i+2;
//  }
//----------------
// let i = 0;
// while(i < 10){
//     if(i==3 || i==5){
//         i++;  
//         continue // 3 ve 5 gördügünde atla
//     }
//     console.log(i);
//     i++;
// }

//---------DO-WHİLE---------

// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i<=10);

//const langs = ["python" , "C++", "Javascript"];
//let i = 0;
// do{
//     console.log(langs [i]);
//     i++;
// }while(i < langs.length); //length uzunluk //do-while döngüsü

// while(i < langs.length){
    
//     console.log(langs [i]);
//     i++;   //while döngüsünde aynı örnek
// }

//------------FOR DÖNGÜSÜ---------

// const langs = ["python" , "C++", "Javascript"];
// for(let i =0; i < langs.length; i++){
//     console.log(langs [i]);
// }
//-----arrayler için foreach döngüsü-----

// langs.forEach(function(langs,i){
//     console.log(langs,i);
// })


// const users = [
//     {name: "Varol", age:36},
//     {name: "Sercan", age:31},
//     {name: "Simge", age:18}
// ];

// const names =  users.map(function(user){ //map dedigimiz metod içinde dönmemizi sağlıyor
//     return user.name;

// })
// names.map(function(name){
//     console.log(name);
// })
//-----WİNDOW OBJELERİ -----alertler--------
// const cevap = confirm ("Emin misiniz ?");
// console.log(cevap);
//--------------
// const cevap = prompt("2 + 2 = ?");
// if(cevap == "4"){
//     console.log("DOGRU");
// }
// else{
//     console.log("YANLIŞ");
// }
// console.log(cevap);
//----------------
// a = window.location.port;
// //host port görme işlemleri
// console.log(a);
//------------------------
// if(confirm("Sayfa yenilensin mi?")){
//     window.location.reload();
// }
// else{
//     console.log("Yanlış");
// }
//---------------------------

// let pencereGenişligi = window.outerWidth;
// let pencereYüksekligi = window.outerHeight;

// console.log(pencereGenişligi,pencereYüksekligi);

// pencereGenişligi = window.innerWidth;
// pencereYüksekligi = window.innerHeight;

// console.log(pencereGenişligi,pencereYüksekligi);

// yKonum = window.scrollY;
// console.log(yKonum);

//------------------------------------

//1 le 100 arası 20 tane sayı yazdır en kücük ve en büyük sayıyı bul

// const numbers = [] ;

// for(let i=0; i<100; i++){
//     a=Math.floor(Math.random()*100+1);
//     numbers.push(a);
// }
// var max = Math.max(...numbers);
// var min = Math.min(...numbers);

// console.log(numbers);
// console.log(max);
// console.log(min);

//----------------------------------------

// const numbers = [];

// for(let i=0; i<20; i++){
//        a=Math.floor(Math.random()*100+1);
//        numbers.push(a);
// }

// let max = numbers[0];
// let min = numbers[0];

// for(let k = 0; k<numbers.length; k++){
//     if(min > numbers[k]){
//        min = numbers[k];
//     }
//     if (max < numbers[k]) {
//         max = numbers[k];
//     }
// }

// console.log(numbers);
// console.log(max);
// console.log(min);

//----------------------------------------
//Sepread Operatör
// let sayilar = new Array(20);
// let sayilar2 = new Array(20);

// for (let i = 0; i < sayilar.length; i++) {
//     sayilar[i] = Math.floor(Math.random()*100 + 1);
//     sayilar2[i] = Math.floor(Math.random()*100 + 1);
    
// }
// sayilar3 = [...sayilar, ...sayilar2]; //listenin içerisini dagıtıyor ... nokta konulmadıgı zaman NaN geliyor (dizinin dışına dagıtmak)

// console.log(sayilar);
// console.log(sayilar2);
// console.log(sayilar3);

//----------------------------------------

//---------------Scope Kavramı---------------------

//Global Scope
var value1 = 10;
let value2 = 20;
const value3 = 30;

//Function Scope
function Funk() {
    var value1 = 40;
    let value2 = 50;
    const value3 = 60; 
    console.log("Function Scope: " + value1,value2,value3);
}

//Block Scope (Döngüler - for, while -- Koşullar - if -- ya da herhangi {} blokları)

if(true){
    var value1 = 70;
    let value2 = 80;
    const value3 = 90;
    console.log("Block Scope: " + value1,value2,value3);
}


Funk();
console.log("Global Scope: " + value1,value2,value3);
