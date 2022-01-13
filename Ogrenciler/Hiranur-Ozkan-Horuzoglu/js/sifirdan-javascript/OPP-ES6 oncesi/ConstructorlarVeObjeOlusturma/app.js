//console.log(this);

// const emp1 = {
//     name:"Mustafa",
//     age:25,
//     showInfos:function9{console.log("Bilguler gosteriliyir");}
// };
// const emp2 = {
//     name:"Ahmet",
//     age:22
// }

// console.log(emp1);



function Employee (name,age,salary) { //Yapici Fonksiyon - Constructor
    this.name = name;
    this.age = age;
    this.salary = salary;

    //console.log(this);

    this.showInfos = function () {
        console.log(this.name,this.age,this.salary);
    }
}

const emp1 = new Employee("Mustafa",27,4000);
const emp2 = new Employee("Hiranur",23,10000);

emp1.showInfos();
emp2.showInfos();
//console.log(emp2);































