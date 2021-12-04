//-NUMBER:sayısal ifadeler-(16)   -
//-STRİNGLER:yazılar-(23)         -
//-BOOLEAN: true-false-(30)       -
//-NULL-(36)                      -
//-OBJECT-(43)                    -
//--ARRAY: diziler-(52)           -
//-TİP DÖNÜŞTÜRME-(91)            -
//-OPERATÖRLER-(120)              -
//-STRİNG METODLARI-(143)         -
//-ARRAY ÖZELLİKLERİ-(200)        -
//-OBJE ÖZELLİKLERİ-(233)         -
//-ZAMAN OBJESİ-(246)             -
//--------------------------------
//VARİBLES:değişkenler

// NUMBER:sayısal ifadeler ( )

// var firstNumber = 20; 
// var secondNumber = 30;
// console.log(firstNumber + secondNumber ); iki number degişkeni toplar.

//--------------------------------
//STRİNGLER:yazılar (" ") stringde bir karakter dizisidir

// var userName = "Hiranur";  
// console.log(userName);


//--------------------------------
//BOOLEAN: true-false (1 0)

// var a = true;
// console.log(a);

//--------------------------------
//NULL

// var a = null;
// console.log(a);
// console.log(typeof a); (typeof : veri tipini soruyor /string/number/boolean/null)

//--------------------------------
//OBJECT

// var user ={name: "Hiranur Horuzoğlu" , age: 22 };
// console.log(user);
// console.log(typeof user);
// console.log(user.name);
// console.log(user.age);

//--------------------------------
//ARRAY: diziler

// var users = ["varol","sercan",10];
// console.log(users);
// console.log(typeof users);
// console.log(users[1]);

//---------------(ÖRNEKLER)-----------------
//var date = new Date();
//console.log(date);
//console.log(typeof date);

// var merhaba = function(){
//    console.log("Merhaba");
// };
// console.log(merhaba);
// console.log(typeof merhaba);

// var a = 10;
// var b = a;
// console.log(a,b);
// a=20;
// console.log(a,b);

// var a= [1,2,3];
// var b = a;
// a.push(4); //ekleme yapıyoruz
// console.log(b);

//var a = 10; //scop farkı var var-let arasında
//let b = 20; //veri dışına yazdırmıyor
//const c = 30; //sabit deger
//{
//    var d = "merhaba";
//   console.log(d);
//}
//console.log(d);

//--------------------------------
//TİP DÖNÜŞTÜRME
//let value;
//string'e dönüştürme
//value = String(123);
//value = String(3.14);
//value = String(false);
//value = String(function() {
  //  console.log("Deneme");
//});
//value = String([1,2,3,4]);
//value = (10).toString(); 

//number'e dönüştürme
//value = Number("123");
//value = Number("Merhaba");
//value = Number(function() {
//    console.log("Deneme");
//});
//value = Number([1,2,3]);
//value = parseFloat("3.12");

//otomatik tip dönüşümü
//value = 34 + "5";  // çıktı -345-
//value = 34 + Number("5"); // çıktı -39-

//console.log(value);
//console.log(typeof value);

//--------------------------------
//OPERATÖRLER

//const a = 10;
//const b = 4;
//let s;

//s = a + b; //toplama
//s = a - b; //cıkarma
//s = a * b; // çarpma
//s = a / b; // bölme
//s = a % b; //mod bölümden kalan

//s = Math.PI; // pı sayısı
//s = Math.round(a / b); //yukarı yuvarlama
//s = Math.floor(a / b); //assa yuvarlama
//s = Math.sqrt(16); //karekök alma
//s = Math.pow(4,2); // kuvvet alma
//s = Math.random(); // 0-1 arası rondom yeni bir sayı
//s = Math.floor(Math.random()* 20 + 1);// 0-20 arası random kusuratsız

//console.log(s);

//--------------------------------
//STRİNG METODLARI

//let value;
//const firstName = "Hiranur";
//const lastName = "Horuzoğlu";
//const department = "Bilişim";
//const salary = "5000";

//value = firstName + lastName;
//value = firstName + " " + lastName;
//value = firstName;
//value += " " + lastName; //value = value + " " + lastName;
//value = firstName.length; //karakter uzunlugu
//value = firstName.toLocaleUpperCase(); // karakter büyüttü
//value = firstName[5];
//value = firstName[firstName.length - 1]; // son karaktere ulaşma
//value = firstName.indexOf("a"); // a harfi kacıncı sırada
//value = firstName.includes("n"); // blooen deger döndürüyor
//value = firstName.concat(" ",lastName, " Javascript").toUpperCase(); //concat ekleme yapıyor

//value = "İsim: " +firstName +" \nSoyisim: " + lastName + " \nDepartman: " + department + " \nMaaş: " + salary; // alt alta uzun hali
//------------template literal
//value = `İsim: ${firstName}\nSoyisim: ${lastName}\nDepartman: ${department}\nMaaş: ${salary}`; // altalta kısa hali --template literal

//console.log(value);
//console.log(typeof value);
//document.write(value);

//let value;
//const userName = "Hiranur Horuzoğlu";
//const department = "Bilişim";
//const salary = "5000";

//value = "<ul>" +
//        "<li>" + 
//        userName + 
//        "</li>" +
//        "<li>" + 
//        department + 
//        "</li>" +
//        "<li>" + 
//        salary + 
//        "</li>" +
//    "</ul>";
//value = `
//<ul>
//<li>${userName}</li>
//<li>${department}</li>
//<li>${salary}</li>
//</ul>
//`;
//document.body.innerHTML = value; // chrome ekranına yazdırdık
//console.log(value);
//console.log(typeof value);


//---------------------
//ARRAY ÖZELLİKLERİ

// let value;
// const numbers = [45,78,34,79,23,5];
// const langs = ["Python" , "C++","Javascript"];

// value = numbers.length;
// value = numbers[3];
// value = numbers[numbers.length - 1];
// numbers.push(200);

// value = numbers;

// value = numbers.indexOf(23);
// value = numbers.includes(6);

// numbers.pop(); //sondaki elemanı atar
// numbers.shift(); //bastaki elemanı atar

// value = numbers;

// value = numbers.sort(); //alfabetik sıralama yapıyor
// value = numbers.sort(function (x,y) {
//     return x-y; // kücükten büyüye sıralama
// }); 
// value = numbers.sort(function (x,y) {
//     return y-x; // büyükten kücüge sıralama
// }); 

// console.log(value);
// console.log(typeof value);

//------------------------------
//OBJE ÖZELLİKLERİ
// let value;
// const user = {
//     name: "Sercan Masar",
//     age: 23,
//     email: "sercan@gmail.com",
//     langs: ["Türkçe","İngilizce","Çince"],
//     address: {
//         city: "İstanbul",
//         street: "Dereboyu"
//     },
//     work: function(){
//         console.log("Çalışıyor..")
//     } 
// };
// value = user;
// value = user.address.city;

// value = user.work();


// console.log(value);
// console.log(typeof value);


//-----------------------------------
//ZAMAN OBJESİ

// let value;
// const now = new Date();
// const date1 = new Date("9-19-1993 06:15:00");
// value = date1;
// value = now.getFullYear();
// value = now.getMonth();
// value = now.getDay();
// value = now.getHours();
// value = now.getMinutes();
// value = now.getSeconds();
// value = now.getMilliseconds();

// value = now;
// value = now.toDateString();
// value = now.toTimeString();

// console.log(value);
// console.log(typeof value);

