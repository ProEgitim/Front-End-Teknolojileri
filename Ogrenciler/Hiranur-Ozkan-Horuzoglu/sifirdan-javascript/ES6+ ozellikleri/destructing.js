//arraylerin ve objelerin icinden deger alma

// let number1, number2 ;
// arr=[100,200,300,400];

// // number1 = arr[0];
// // number2 = arr[1];


// //destructing
// [number1,number2] = arr;
// const [number1,number2] = arr;

// console.log(number1,number2);

// const numbers = {
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50,
// };

// const{number1,b,number3}=numbers;//numbers icinde tanimladiklarini cagirmalisin
// //const {a:number1,b:number2,c:number3} = numbers; // yada bu sekilde atayarak
// console.log(number1,b,number3);


//Function Destructing

// const getLangs = () => ["Python", "Java","C++"];
// const [langs1,langs2,langs3] = getLangs();
// console.log(langs1,langs2,langs3);

//Obje

const person = {
    name:"Mustafa Murat",
    year: 1993,
    salary: 300000,
    showInfos : ()=> console.log("Bilgiler Gosteriliyor...")
};

const { name:isim,year:yil,salary:maas,showInfos:bilgileriGoster} = person;
console.log(isim,yil,maas);
bilgileriGoster()
