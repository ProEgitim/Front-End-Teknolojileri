// let number1, number2;

// let arr = [100,200,300,400];

// // number1 = arr[0];
// // number2 = arr[1];

// [number1, number2] = arr;

// console.log(number1,number2);

// const numbers = {
//   a:10,
//   b:20,
//   c:30,
//   d:40,
//   e:50
// }

// const {a:n1,b:n2,e:n3} = numbers;

// console.log(n1,n2,n3);

// const getNames = () => ["Sercan","Bugra","Simge"];
// const [name1,name2,name3] = getNames();
// console.log(name1,name2,name3);

// const person = {
//   name : "Varol Maksutoglu",
//   year : 1985,
//   salary : 4250,
//   showInfos: () => console.log("Bilgiler gösteriliyor...")
// }

// const {name:isim,year:yil,salary:maas,showInfos:bilgileriGoster} = person;

// console.log(isim, yil, maas);

// bilgileriGoster();

let arr = [100,200,300,400];

[number1, number2,...kalanlar] = arr;

console.log(number1,number2);
console.log(kalanlar);