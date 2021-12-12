/*const number = Math.floor(Math.random() * 100 + 1);
console.log(number);
if (number % 2 == 0) {
    console.log("Çift");
}
else {
    console.log("Tek");
}*/

/*const database = {
    host: "localhost",
    add : function(){
        console.log("eklendi");
    },
    get : function(){
        console.log("veri alındı");
    },
    update: function(id){
        console.log(`ID : ${id} güncellendi`);
    },
    delete: function(id){
        console.log(`ID : ${id} silindi`);
    }

}*/


/*function hesaplama() {
    a = Math.floor(Math.random() * 10 + 1);
    b = Math.floor(Math.random() * 10 + 1);
    console.log("Alanımız :" + a * b);
    console.log("Çevremiz :" + 2 * (a + b));
}
hesaplama(a,b);*/

/*var çevre;
var alan;
function hesaplama() {
    çevre = (a + b) * 2 ;
    alan  = a * b ;
    return çevre, alan;
}*/

/*let i=10;
while(i>0){
    console.log("Deneme")
    i--;
}*/

/*let i = 0 ;
while (i < 10){
    if (i==3 || i==5){
        i++;
        continue // bir sonraki döngüye devam eder. 10 kadar 3 ve 5 i atlayarak yazar.
        break // 3 ü gördüğü an döngüyü keser.
    }
    console.log(i);
    i++;
} */

/* let i = 0 ;
do {
    console.log(i);
    i++;
} while (i<10); */

/* const langs = ["Python", "C++", "JavaScript"];
let i = 0;
do{
    console.log(langs[i]);
    i++;
}while(i<langs.length); */

/* const langs = ["Python", "C++", "JavaScript"];
for (let i = 0; i<langs.length; i++){
    console.log(langs[i])
} */

/* const users = [
    {
        name: "Osman Ali",
        age: 35
    },
    {
        name: "Simge",
        age: 35
    },
    {
        name: "Sercan",
        age: 35
    }
];
const names = users.map(function (user) {
    return user.name;
});
names.map(function (name) {
    console.log(name);
}); */ 

//console.log(window);

/* const cevap = prompt("2+2=?");
console.log(cevap) */

/* const cevap = confirm ("Emin Misin ?");
console.log(cevap); */

/* a = window.location.part;
console.log(a); */

/* if (confirm ("Sayfa Yenilensin mi?")){
    window.location.reload();
}else{
    console.log("Yenilenmedi")
} */ 

/* let pencereGenisligi = window.outerWidth;
let pencereYuksekligi= window.outerHeight;
console.log(pencereGenisligi + "X" +pencereYuksekligi);
pencereGenisligi = window.innerWidth;
pencereYuksekligi= window.innerHeight;
console.log(pencereGenisligi + "X" +pencereYuksekligi); */

// let sayiArr = new Array(20);
// for (i = 0; i <= 20; i++){
//     sayiArr[i] = Math.floor(Math.random()*100);
// }
// console.log(sayiArr);
// console.log("En Büyük Sayı :" + Math.max(...sayiArr));
// console.log("En Küçük Sayı :" + Math.min(...sayiArr));
// console.log(...sayiArr)

// let sayiBuyuk =  sayiArr[0];
// let sayiKucuk =  sayiArr[0];
// for (let s = 0; s < sayiArr.length; s++){
//     if (sayiArr[s] > sayiBuyuk){
//         sayiBuyuk = sayiArr[s];
//     }
//     if (sayiArr[s] < sayiKucuk){
//         sayiKucuk = sayiArr[s];
//     }
// }
// console.log("En Küçük Sayı : " + sayiKucuk);
// console.log("En Büyük Sayı : " + sayiBuyuk);

let value;
value = this.document.all;
for (let i = 0; i < value.length; i++){
    console.log(value[i]);
}

