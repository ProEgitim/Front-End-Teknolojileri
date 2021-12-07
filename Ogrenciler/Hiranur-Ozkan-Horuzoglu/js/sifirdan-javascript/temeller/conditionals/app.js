
//Kaeşılaştırm aOperatörleri

// == eşit eşit öperatörü

//=== deger ve tiplerini karşılaştırıyor 2 deger tipi number gibi

//!=  eşit degilmidir öperatörü

//!==

//>  büyüktür operatörü

//< kücüktür operatörü

//>= büyükk veya esit demek

//<= kücük veya esit operatörü

// console.log(2==2); //iki ikiye eşit mi
// console.log("js"=="java");
// console.log(2 == "2"); //stringe cevirdigi için booleen true verir

// console.log(2 === "2"); //5 satırda acıklaması var ver 3 satıra göre daha dogru sonuc alıyoruz daha saglam

// console.log(2 != 4); // bu true sonucunu verir cünkü birbirlerine eşit degiller
// console.log(2 != 2); // buda false sonucunu verir.


// console.log(2 > 4); //false
// console.log(4 > 2); // true

// console.log(4 < 2); // false
// console.log(2 < 4); // true

// console.log(2 >= 4);//false
// console.log(4 >= 2);//true

// console.log(2 <= 4);//true
// console.log(4 <= 2);//false


//Mantıksal Baglaçlar (1den cok kosulu kontrol ettigimiz zaman kullanıyoruz)


//Not operatörü (!) false sa trueya truesa false degerine dönüştürüyor.

//console.log(!(2 == 2)); //true sonucunu false cevirdi (!) not operatörü

//AND operatörü (iki sonucda dogruysa true döner ama bir tanesi bile false deger se eger false döner)

// console.log(2 ==  2) && ("Hira" == "Hira");

// console.log(2 ==  4) && ("Hira" == "Hira"); //false

//OR operatörü (bir tanesinin true cıkması yeterli true sonuc alınır )

//console.log((4 == 2) || ("Ahmet == Ahmet")); // eger ikiside yanlıs false sa sonuc false olur


// KOSUL durumları 

// if (kosul) {
//     // if block
// }

const error = false; // eror true olursa if kosulunun içine girer

// if (error == true) {
//     console.log("Hata Oluştu..")
// }
// console.log("Deneme...")

if (error == true) {
    console.log("Hata Oluştu..")
}
else{
    console.log("Hata Oluşmadı.")
}

//-----------

const process = "1";

if (process == "1") {
    console.log("İşlem 1.")
}
else if(process === "2"){ // else if " ya da eger "demek
    console.log("İşlem 2..")
}
else if(process === "3"){ 
    console.log("İşlem 3...")
}
else if(process === "4"){ 
    console.log("İşlem 4....")
}
else{
    console.log("İşlem gerçekleşemedi.")
}

//------------------

const number = 120; 

// if (number === 100) {
//     console.log("Sayı 100 eşit...")
// }
// else{
//     console.log("Sayı 100 eşit değil...")
// }

//TERNARY OPERATOR

// console.log(number === 100 ? "Sayı 100" : "Sayı 100 değil");

// if (number === 100) console.log("Sayı 100");
// else console.log("Sayı 100 degil.");   //bu sekilde de yazılıyor süslü parantez kullanmadan. -Koşullu durumlarımız


//SWİTCH-CASE YAPISI

const numbers = 2;

switch (numbers) {
    case 1:
        console.log("İşlem 1")
        break; // switch-case cık anlamına geliyor
    case 2:
       console.log("İşlem 2")
         break;
    case 3:
        console.log("İşlem 3")
        break;
    default:
        console.log("Geçersiz İşlem") //default da break kullanmıyoruz çünkü son işlem oldugu için döngüden cıkıyor zaten
}