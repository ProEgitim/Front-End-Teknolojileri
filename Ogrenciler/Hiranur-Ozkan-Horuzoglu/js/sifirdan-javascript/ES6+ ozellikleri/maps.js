//Mapler - Key(Anahtar) - Value(Deger)
// let mayMap = new Map(); // olusturma

// console.log(typeof mayMap);//object referans

// const key1 = "Mustafa";
// const key2 = {a:10,b:20};
// const key3 = () => 2;
// //set
// mayMap.set(key1,"string deger");
// mayMap.set(key2,"object literal deger");
// mayMap.set(key3,"function deger");

// //get

// console.log(mayMap.get(key1));
// console.log(mayMap.get(key2));
// console.log(mayMap.get(key3));
// console.log(mayMap);

// //Map Boyutu

// console.log(mayMap.size);

// const cities = new Map();

// cities.set("Ankara",5);
// cities.set("Istanbul",15);
// cities.set("izmir",4);

//For Each

// cities.forEach(function (value,key) {
//     console.log(key,value);
// })


//For Of

// for(let [key,value] of cities){ ///destucting yapisi
//     console.log(key,value);
// }


//mAP kEYS
// for(let key of cities){
//     console.log(key);
// }

//Map Values

// for(let value of cities.values()){
//     console.log(value);
// }

//Arraylerden Map Olusturma

// const array = [["key1","value1"],["key2","value2]];
// const lastMap = new Map(array);
// console.log(lastMap);

//Maplerden Arrap Olusturma

const cities = new Map();

cities.set("Ankara",5);
cities.set("Istanbul",15);
cities.set("izmir",4);

const array = Array.from(cities);
//[["Ankara",5],["Istanbul",15].["izmir",4]]
console.log(array);





