//1 le 100 arası 20 tane sayı yazdır en kücük ve en büyük sayıyı bul

// const numbers = [] ;

// for(let i=0; i<100; i++){
//     a=Math.floor(Math.random()*100+1);
//     numbers.push(a);
// }
// var max = Math.max(...numbers);
// var min = Math.min(...numbers);

// console.log(numbers);
// console.log(max);
// console.log(min);

//----------------------------------------

// const numbers = [];

// for(let i=0; i<20; i++){
//        a=Math.floor(Math.random()*100+1);
//        numbers.push(a);
// }

// let max = numbers[0];
// let min = numbers[0];

// for(let k = 0; k<numbers.length; k++){
//     if(min > numbers[k]){
//        min = numbers[k];
//     }
//     if (max < numbers[k]) {
//         max = numbers[k];
//     }
// }

// console.log(numbers);
// console.log(max);
// console.log(min);

//----------------------------------------
//Sepread Operatör
// let sayilar = new Array(20);
// let sayilar2 = new Array(20);

// for (let i = 0; i < sayilar.length; i++) {
//     sayilar[i] = Math.floor(Math.random()*100 + 1);
//     sayilar2[i] = Math.floor(Math.random()*100 + 1);
    
// }
// sayilar3 = [...sayilar, ...sayilar2]; //listenin içerisini dagıtıyor ... nokta konulmadıgı zaman NaN geliyor (dizinin dışına dagıtmak)

// console.log(sayilar);
// console.log(sayilar2);
// console.log(sayilar3);

