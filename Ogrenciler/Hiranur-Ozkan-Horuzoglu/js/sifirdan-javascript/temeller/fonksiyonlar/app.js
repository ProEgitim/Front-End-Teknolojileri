//Fonksiyon Tanımlama

// function merhaba() {
//     console.log("Merhaba");
// }


//  function merhaba(name = "Bilgi yok", age = "Bilgi Yok") {
// //     if (typeof name === "undefined") name = "Bilgi Yok";
// //     if (typeof age === "undefined") age = "Bilgi Yok";  //hiçbirşey yazılmadan fonksiyon cagırılırsa bilgi yok yazdırır bir yolu daha var

//     console.log(`Name: ${name} \nAge: ${age}`);
// }
// merhaba("Hiranur", 22 ); //Fonksiyon Çagrısı --(Function Call) - fonksiyonu birden fazla cagırabiliyoruz
// merhaba("Cihad", 30 );
// merhaba("Gizem");
// merhaba();


// //-------reeturn;
// function square(x) {
//     return x*x;
//     console.log("Naber");  //Hiçbir zaman çalıştırılmaz return le sonlandırılıyor.
// }

// function cube(x) {
//     return x*x*x;
// }

// let a = cube(square(12));

// console.log(a);


// function merhaba() {
//     return "Merhaba";
// }

// console.log(merhaba());

//-------Function Expression

// const merhaba = function (name) {
//     console.log("Merhaba " + name);
// };

// merhaba("Murat");

//Immediately Invoked Function Expression  (IIFE)-olarak da geçiyor

// (function(name){
//     console.log("Merhaba: " + name);  
// })("Hiranur"); //site ilk açıldıgında çalışır örn:Bismillah

const database = {
    host: "localhost",
    add: function() {
        console.log("Eklendi. ");
    },
    get: function() {
        console.log("Elde Edildi. ");
    },
    update: function(id) {
        console.log(`Id: ${id} Güncellendi. `)
    },
    delete:function(id) {
        console.log(`Id: ${id} Silindi`)
    }
}

console.log(database.host);

database.add();
database.delete(10);
database.update(3);
