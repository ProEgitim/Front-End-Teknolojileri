// const object = new Object(); // Object Literal
// const object2 = new Object();
// object.name = "Hira";
// console.log(object);

// function Employee(name,age) {
//     this.name = name;
//     this.age = age;
//     this.showInfos = function(){
//         console.log("Bilgiler Gosteriliyor...");
//     }
//     this.toString = function(){
//         console.log("Bu bir Employee Objesidir...");
//     }
// }
// const emp1 = new Employee("Mustafa",23);
// console.log(emp1);

// console.log(emp1.toString());

function Employee(name,age) {
    this.name = name;
    this.age = age;
   
}
Employee.prototype.showInfos = function () { 
    //bu sekilde tanimlayip baska bolumlerde cagirabiliriz
    console.log("Isim: " + this.name + " Yas: " + this.age);

}

const emp1 = new Employee("Mustafa",23);
const emp2 = new Employee("Hira",20);

emp2.showInfos();

console.log(emp1);
console.log(emp2);








