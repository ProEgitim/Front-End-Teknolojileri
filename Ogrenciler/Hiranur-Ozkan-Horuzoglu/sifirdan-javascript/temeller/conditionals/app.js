//Kaeşılaştırm aOperatörleri

// == eşit eşit öperatörü

//=== deger ve tiplerini karşılaştırıyor 2 deger tipi number gibi

//!=  eşit degilmidir öperatörü

//!==

//>  büyüktür operatörü

//< kücüktür operatörü

//>= büyükk veya esit demek

//<= kücük veya esit operatörü

console.log(2==2);
console.log("js"=="java");
console.log(2 == "2"); //stringe cevirdigi için booleen true verir

console.log(2=== "2"); //5 satırda acıklaması var ver 3 satıra göre dha dogru sonuc alıyoruz daha saglam

console.log(2 != 4); // bu true sonucunu verir cünkü birbirlerine eşit degiller
console.log(2 != 2); // buda false sonucunu verir.



console.log(2 > 4); //false
console.log(4 > 2); // true

console.log(4 < 2); // false
console.log(2 < 4); // true

console.log(2 >= 4);//false
console.log(4 >= 2);//true

console.log(2 <= 4);//true
console.log(4 <= 2);//false



//Mantıksal Baglaçlar (1den cok kosulu kontrol ettigimiz zaman kullanıyoruz)


//Not operatörü (!) false sa trueya truesa false degerine dönüştürüyor.

console.log(!(2 == 2)); //true sonucunu false cevirdi not operatörü

//AND operatörü (iki sonucda dogruysa true döner ama bir tanesi bile false deger se eger false döner)

console.log(2 ==  2) && ("Hira" == "Hira");


