// karşılaştırma operatörleri//

//== eşittir

// === hem tütü hem değeri eşit

// != eşit değildir.

// !== hem türü hem değeri işit değildir.

/*console.log(2==2);

console.log("js" == "java");

console.log(2 == "2");

console.log(2 === "2");

console.log( 4>2);


console.log(2 != 2 );*/

console.log((2 == 2) && ("sercan" == "görkem" ));


console.log((2 == 2) || ("sercan" == "görkem" ));

const error = false;


// Koşullar ///

/*if (error == true){
    console.log("Hata Oluştu");
}*/



/*if (error){
    console.log("Hata Oluştu");
}else{
    console.log("hata oluşmadı");
};*/

/*const process = "4";

if(process ==="1"){
    console.log("İşlem 1");
}
else if(process ==="2"){
    console.log("İşlem 2");
}
else if(process ==="3"){
    console.log("İşlem 3");
}
else if(process ==="4"){
    console.log("İşlem 4");
}
else{
    console.log("İşlem geçersiz");
}*/

/*const process = 3;
switch (process) {
    case 1:
        console.log("işlem 1");
        break;
    case 2:
        console.log("işlem 2");
        break;
    case 3:
        console.log("işlem 3");
         break;

    default:
        console.log("geçersiz işlem");
        
}*/


const ad = "sercan";

if(ad == "sercan"){
    console.log("dogru islem");
}

else if (ad == "ahmet"){
    console.log("yardımcı müd.");
}
else{
console.log("lütfen doğru kullanıcı girin!");
};

switch (ad) {
    case "sercan":
        console.log("doğru Kullanıcı");
        break;
    case "ahmet":
        console.log("yardımcı müd.");
        break;

    default:
        console.log("lütfen doğru kullanıcı girin!");
};


///// fonksiyonlar ///

/*function user (name,age){
    console.log(`İsim ${name} \n Yas ${age}`);
}

user("varol", 36);
user ("sercan",31);*/

/*function user (name="bilgi yok",age= "Bilgi yok"){
    console.log(`İsim ${name} \n Yas ${age}`);
}

user("varol", 36);
user ();//değer olamdığı için bilgi yok yazar.*/


/*function sequare(x){
    return x*x;
}

let a = sequare(2);
console.log(a);*/

/*const sequare =function (x){
    return x*x;
}

let a = sequare(2);
console.log(a);*/


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
        console.log(`ID : ${id}silindi`);
    }

}

console.log(database.host);
database.add();
database.delete(10);*/

/*var cevre;
var alan;
function hesapla (a,b){
 console.log("çevre:" + 2*(a+b));
 console.log("alan" + a*b);
}
var a = Math.floor(Math.random()*10+1);
var b = Math.floor(Math.random()*10+1);
console.log(a,b);
hesapla(a,b);*/


//////// döngüler ////
/*let i=10
while(i>0){
    console.log("deneme");
    i--;
}*/


/*let i=0;
while(i<10){
    if(i==3 || i==5){
        i++;
        continue
    }
    console.log(i);
    i++;
}*/

//// do while döngüsü ///

/*let i = 0;

do{
    console.log(i);
    i++;
} while(i<10);*/


/*const langs = ["Pyton", "C++","Javascript"];
let i =0;
do{
    console.log(langs[i]);
    i++;
}while(i<langs.length);*/

/*const langs = ["Pyton", "C++","Javascript"];

for(let i =0 ;i<langs.length; i++){
    console.log(langs[i]);
}*/

/*langs.forEach(function(lang,i){
    console.log(lang,i);
});*/

/*const users = [
    {name: "varol",age:36},
    {name: "simge",age:21},
    {name: "sercan",age:31},
];

const names = users.map(function(user){
    return user.name;
})

names.map(function(name){
    console.log(name);
});*/

/*const cevap =confirm("eminmisiniz");

console.log(cevap);*/



/*const cevap =prompt("2+2=?");
if(cevap == "4"){
    console.log("dogru");
}else{
    console.log("yanlış");
}

console.log(cevap);*/





