// function getData(data) {
//     return new Promise(function (resolve,reject) {
//         setTimeout(function () {
//             if (typeof data === "string") {
//                 //olumlu
//                 resolve(data);
//             }
//             else{
//                 //olumsuz
//                 reject(new Error("Lutfen string değer girin."));
//             }
//         },5000);
//     });
// }
// getData("Merhaba")
// .then(response => console.log("Gelen deger: " + response)) //resolve degerı alır(.then)
// .catch(err => console.log(err)); //reject degerı alır (.catch)
// console.log(getData("Merhaba").resolve);//data bekleme


function addTwo(number) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof number === "number") {
                //olumlu
                resolve(number + 2);
            } else {
                //olumsuz
                reject(new Error("Lutfen bir sayı girin."));
            }
        }, 3000);
    })
}
addTwo(10)
.then(response =>{
    console.log(response);
    return response + 2;
}).then(res2 => console.log(res2))
.catch (err => console.log(err));