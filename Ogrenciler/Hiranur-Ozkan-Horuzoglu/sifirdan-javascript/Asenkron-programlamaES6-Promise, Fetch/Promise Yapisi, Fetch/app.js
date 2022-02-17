// function getDAta(data) { // promise objesi donduren function
//     return new Promise(function (resolve,reject) {
//         setTimeout (function () {

//             if(typeof data === "string"){
//                 //olumlu 
//                 resolve(data);
//             }
//             else{
//                 //olumsuz
//                 reject (new Error("Lutfen string bir deger girin"));
//             }

//         },5000);
//     });
// }

// //reject-.catch-err
// // resolve-.then-response


// getDAta(23).then(function (response) {
//     console.log("Gelen Deger " + response);
// }).catch(function (err) {
//     console.error(err); // console.log yerine console.error yazarsak kirmizi hata verir
// });


// function getDAta(data) { // promise objesi donduren function
//     return new Promise(function (resolve,reject) {
//         setTimeout (function () {

//             if(typeof data === "string"){
//                 //olumlu 
//                 resolve(data);
//             }
//             else{
//                 //olumsuz
//                 reject (new Error("Lutfen string bir deger girin"));
//             }

//         },5000);
//     });
// }

// getDAta(23)
// .then( response =>  console.log("Gelen Deger " + response))
// .catch( err =>  console.error(err));


function addTwo(number) {
    return new Promise((resolve,reject) => {
        if (typeof number === "number") {
            resolve(number + 2);
        }
        else{
            reject(new Error("Lutfen bir sayi giriniz. "));
        }
    },3000);
}
addTwo("MERHABA")
.then(response =>{
    console.log(response)
    return response + 2;
}).then(response2 => console.log(response2))
.catch(err => console.error(err));

//promise lerden 1 tane catch kullaniliyor - hata
// birden cok then kullanilabilir - promise chain return leyerek birden fazl akullanilir