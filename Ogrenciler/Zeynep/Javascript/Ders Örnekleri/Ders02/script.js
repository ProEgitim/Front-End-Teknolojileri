// Karşılaştırma Operatörleri

// == Eşittir
// === Hem Türü Hem Değeri Eşit
// != Eşit Değildir
// !== Hem Türü Hem Değeri Eşit Değildir
// > Büyüktür
// < Küçüktür
// >= Büyük Eşit
// <= Küçük Eşit

// console.log(2 == 2);
// console.log("js" == "java");

// console.log(2 == "2");
// console.log(2 === "2");

// console.log(4>2);

// console.log(2!=2);


// And operatörü

// console.log((2 == 2) && ("Sercan"=="Görkem"));

// Or operatörü

// console.log((2 == 2) || ("Sercan"=="Görkem"));

// Koşullar

// if

// const error = false;
// // if (!error){
// //   console.log("Hata Oluştu");
// // }

// if (error){
//   console.log("Hata Oluştu");
// }
// else{
//   console.log("Hata Oluşmadı");
// }


// const process = "3";

// if (process === "1"){
//   console.log("İşlem 1");
// }
// else if (process === "2"){
//   console.log("İşlem 2");
// }
// else if (process === "3"){
//   console.log("İşlem 3");
// }
// else if (process === "4"){
//   console.log("İşlem 4");
// }
// else {
//   console.log("Geçersiz İşlem");
// }

// Switch Case

// const process = 4;

// switch (process){
//   case 1:
//     console.log("İşlem 1");
//     break;
//   case 2:
//     console.log("İşlem 2");
//     break;
//   case 3:
//     console.log("İşlem 3");
//     break;
//   default:
//     console.log("Geçersiz İşlem");
// }

// Fonksiyonlar

// function merhaba(){
//   console.log("Merhaba");
// }

// merhaba();
// merhaba();
// merhaba();
// merhaba();

// function user(name, age){
//   console.log(`İsim: ${name} \nYaş: ${age}`);
// }

// user("Varol",36);
// user("Sercan",31);

// function user(name = "Bilgi Yok", age = "Bilgi Yok"){
//   console.log(`İsim: ${name} \nYaş: ${age}`);
// }

// user("Varol",36);
// user();

// function square(x){
//   return x*x;
// }
// let a = square(2)+1;
// console.log(a);

// const square = function (x){
//   return x*x;
// }
// let a = square(2);
// console.log(a);

// const database = {
//   host: "localhost",
//   add: function(){
//     console.log("Eklendi");
//   },
//   get: function(){
//     console.log("Veri Alındı");
//   },
//   update: function(id) {
//     console.log(`ID: ${id} güncellendi`)
//   },
//   delete: function(id){
//     console.log(`ID: ${id} silindi`)
//   }
// }

// console.log(database.host);
// database.add();
// database.delete(10);

// Döngüler
// While Döngüsü

// let i=0;
// while(i<10){
//   console.log("Deneme")
//   // i++; // i=i+1;
//   i+=2 // i=i+2;
// }

// let i = 0;

// while (i < 10){
//   if (i == 3 || i == 5){
//     i++;
//     continue
//   }
//   console.log(i);
//   i++;
// }

// Do While Döngüsü

// let i = 0;
// do {
//   console.log(i);
//   i++;
// }while(i<10);

// const langs = ["Python", "C++", "Javascript"];

// let i = 0;

// // do{
// //   console.log(langs[i]);
// //   i++;
// // }while(i < langs.length);
// while(i < langs.length){
//   console.log(langs[i]);
//   i++;
// }


// For dönüsü

// const langs = ["Python", "C++", "Javascript"];

// // for(let i=0; i < langs.length; i++){
// //   console.log(langs[i]);
// // }
// langs.forEach(function(lang,i){
//   console.log(lang,i);
// });

// const users = [
//   {name:"Varol",age:36},
//   {name:"Sercan",age:31},
//   {name:"Simge",age:18}
// ];

// const names = users.map(function(user){
//   return user.name;  // names = ["Varol","Sercan","Simge"]
// });

// names.map(function(a){
//   console.log(a);
// });


// Window Objesi
// console.log(window);

// const cevap = confirm("Emin misiniz?");
// console.log(cevap);

// const cevap = prompt("2+2=?");
// if(cevap == "4"){
//   console.log("Doğru");
// }
// else{
//   console.log("Yanlış");
// }

// a = window.location.port;

// console.log(a);

// if (confirm("Sayfa Yenilensin mi?")){
//   window.location.reload();
// }
// else{
//   console.log("Yenilenmedi");
// }


// let pencereGenisligi = window.outerWidth;
// let pencereYuksekligi = window.outerHeight;

// console.log(pencereGenisligi,pencereYuksekligi);

// pencereGenisligi = window.innerWidth;
// pencereYuksekligi = window.innerHeight;

// console.log(pencereGenisligi,pencereYuksekligi);

// window.scroll(0,300);
// let yKonum = window.scrollY;
// console.log(yKonum);

// Spread Operator
// let sayilar = new Array(20);
// let sayilar2 = new Array(20);

// for(let i=0; i<sayilar.length;i++){
//   sayilar[i]=Math.floor(Math.random()*100+1);
//   sayilar2[i]=Math.floor(Math.random()*100+1);
// }

// sayilar3 = [...sayilar, ...sayilar2]

// console.log(sayilar);
// console.log(sayilar2);
// console.log(sayilar3);

// //Scope Kavramı

// // Global Scope
// var value1 = 10;
// let value2 = 20;
// const value3 = 30;

// // Function Scope
// function Funk(){
//   var value1 = 40;
//   let value2 = 50;
//   const value3 = 60;
//   console.log("Function Scope: " + value1,value2,value3);
// }

// // Block Scope (Döngüler - for, while -- Koşullar - if -- yada herhangi {} blokları)

// if (true){
//   var value1 = 70;
//   let value2 = 80;
//   const value3 = 90;
//   console.log("Block Scope: " + value1,value2,value3);
// }


// Funk();
// console.log("Global Scope: " + value1,value2,value3);
