//Kalitim - Inheritance
function Person(name,age) {
    this.name = name;
    this.age = age;

}
Person.prototype.showInfos = function(){
    console.log("Isim: " + this.name + " Yas: " + this.age);

}

// const person = new Person("Mustafa",23);
// console.log(person);

function Employee(name,age,salary){
    //this.name = name;
    //this.age = age;
    Person.call(this,name,age);
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function(){
    console.log("EMPLOYEE...");
}
//overriding iptal etme
Employee.prototype.showInfos = function(){
    console.log("Isim: " + this.name + " Yas: " + this.age + "Maas: " + this.salary);
}
const emp = new Employee("Mustafa",23,4334);

//console.log(emp);

emp.showInfos();
emp.toString();





































