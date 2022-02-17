// async function test(data) {
//     //Promise return new Promise async demek promise dondurur
//     // return new Promise ((resolve,reject) =>{
//     //     resolve(data);
//     // })

//     let promise = new Promise((resolve,reject) =>{
//         setTimeout( () => {
//             resolve("Bu bir degerdir. ");
//         },5000)
//     });
//     let response = await promise;//5 saniye bekleyecek await sadece async kullanabiliyoruz
//     return response;
// }
// test("MERHABA").then(response => console.log(response))

//console.log(test("Merhaba"))

// async function testData(data) {
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(typeof data === "string") {
//                 resolve(data);
//             }
//             else{
//                 reject(new Error("Lutfen string bir deger girin "));
//             }
//         },5000);
//     });
//     const response = await promise;

//     return response;
// }

// testData(23)
// .then(data => console.log(data))
// .catch(err => console.error(err))

async function getCurrency(url) {
    const response = await fetch(url); //Response Object

    const data = await response.json() //Json Object

    return data;



}
getCurrency("http://api.exchangeratesapi.io/v1/latest?access_key=a48afb973259b17c029cee604aa88987")
.then(ahmet => console.log(ahmet))









