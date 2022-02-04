//Syntactic Sugar

function Employee(name,age,salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}
Employee.prototype.showInfos = function () {
    console.log("Isim:" + this.name + "Yas:" + this.age + "Maas:" + this.salary );

}
const emp = new Employee("Mustafa",24,4000);

console.log(emp);

class Employee{
    constructor(name,age,salary){
        this.name = name;
    this.age = age;
    this.salary = salary;
    }
    showInfos(){
        console.log("Isim:" + this.name + "Yas:" + this.age + "Maas:" + this.salary );
    }
}
const emp = new Employee("Mustafa",23,5000);

console.log(emp);