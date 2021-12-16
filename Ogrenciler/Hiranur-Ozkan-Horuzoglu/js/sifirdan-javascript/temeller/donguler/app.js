//DÖNGÜLER BELLİ KOŞULLARDA KENDİ BLOKLARINI SÜREKLİ ÇALIŞTIRAN YAPILARDIR.

//-----------While Döngüsü

// let i = 0;

// while (i <10) { //bir kosul vermezsek true olarak sonsuz donguye girr
//     console.log(i);
//     i += 1; // i++;
// }
//---------------------
// let i = 10;

// while (i > 0) {
//     console.log(i);
//     i--;
// }
//-----------------

// let i = 10;

// while (i > 0) {
//     console.log(i);
//     i-= 2;
// }
//------Break and Continue

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
//     i++;
// }
//--------------

// let i = 0;

// while (i < 10) { // 3 ve 5 atlayarak 0-9 arası sayı yazdordo 
    
//     if (i == 3 || i == 5) {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

//-------D0-While Döngüsü

// let i = 0;
// do { //ilk kosul degil do döngüsüne bakılıyor
//     console.log(i);
//     i++;
// } while (i > 10);


// const langs = ["Java", "Python","C#"];

// let index = 0;

// while (index < langs.length) {

//     console.log(langs[index]);
//     index++;
// }

// for (let index = 0; index < langs.length; index++) { // for döngüsüylede yapılabilir

//     console.log(langs[index]);
    
// }

// langs.forEach(function(langs,index) {
//     console.log(langs,index);
// });

// const users = [
//     {name: "Cihad" , age: 30},
//     {name: "Hiranur" , age:22},
//     {name: "Rüzgar" , age: 1}
// ];

// const names = users.map(function(user){ //isimlerini yazdırdık
//     return user.name;
// });
// const ages = users.map(function(user){ // yaşlarını yazdırdık
//     return user.age;
// })
// console.log(names);
// console.log(ages);


//--------for-in döngüsü

const user ={
    name: "Mustafa",
    age :  22 
};

for (let key in user){
    console.log(key,user[key]);
}
