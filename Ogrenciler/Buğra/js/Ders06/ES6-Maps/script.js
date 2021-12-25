// Mapler - Key(Anahtar) - Value(Değer)
let ilkMap = new Map(); // Oluşturma
console.log(ilkMap);
const key1 = "Varol";
const key2 = {a:10, b:20};
const key3 = () => 5;

// Set 
ilkMap.set(key1,"Strign Değer");
ilkMap.set(key2,"Object Değer");
ilkMap.set(key3,"Function Değer");
// console.log(ilkMap);

// get
// console.log(ilkMap.get(key1));
// console.log(ilkMap.get(key2));
// console.log(ilkMap.get(key3));

const cities = new Map();
cities.set("İstanbul",34);
cities.set("İzmir",35);
cities.set("Giresun",28);

//For Each
// cities.forEach(function(value,key){
//   console.log(key,value);
// })

//For Of
for(let [key,value] of cities){ // Destructing
  console.log(key,value);
}