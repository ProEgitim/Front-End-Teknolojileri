// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.showInfos = function () {
//     console.log("Isim: " + this.name + "Yas: " + this.age);

// }
// function Employee(name,age,salary) {
//     Person.call(this,name,age);
//     this.salary = salary;

// }
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.toString = function () {
//     console.log("Employee");

// }
// Employee.prototype.showInfos = function () {
//     console.log("Isim: " + this.name + "Yas: " + this.age + "Maas: " + this.salary);
// }
// const emp = new Employee("Mustafa",23,4500);

class Person{ //Superclass, Baseclass
    constructor(name,age){
        this.name = name;
        this.age = age;

    }
    showInfos(){
        console.log("Isim: " + this.name + "Yas: " + this.age);
    }
}
class Employye extends Person{ //DerivedClass, Subclass,Childclass
    constructor(name,age,salary){
        // this.name= name;
        // this.age = age;
        super(name,age); //bir ust sinifin ozelliklerini almak
        // super.showInfos();
        this.salary = salary;
    }
    showInfos(){ // Overriding
        console.log("Isim: " + this.name + " Yas: " + this.age + " Maas: " + this.salary);
    }
    toString() // Overriding
    {
    console.log("Employee");
    }
    raiseSalary(amount){ // ekstra
        this.salary += amount;
    }
}
const emp = new Employye("mustafa",23,5000);
// console.log(emp);
emp.showInfos();
emp.toString();