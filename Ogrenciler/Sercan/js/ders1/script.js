//////////////////////////////////////////////

/*var firstNumber = 20;
firstNumber = "varol";
console.log(firstNumber);


var userName = "Sercan";
console.log(userName);

 firstNumber = 20;
var secondNumber = 30;
console.log(firstNumber + secondNumber);


///////////////////////////////////////////////

var userName = "Sercan";
console.log(userName);

/////////////////////////////////////////////

//boolean///

var a = false;


////////////////////////////////////////

/// null //

var a = null;
console.log(typeof a);


// Object

var user = {
    name:"sercan",
    age: "31"

};
console.log(user);
console.log(typeof user);
console.log(user.name);
console.log(user.age);

//////////////////////////////////////////

//// Array : Diziler//

var users = ["varol","sercan",10];
console.log(users);
console.log(users[1]);


///////////////////////////////////////////////

var date =new Date();
console.log(date);


/////////////////////////////

var merhaba = function(){
    console.log(merhaba);
}
console.log(merhaba());

///////////////////////////



// TİP DÖNÜŞTÜRME //

let value;

value = String(123);
value = String(3.14);
value = String(false);
value = String(function(){console.log("Deneme")});
value = String([1,2,3,4]);
value = (10).toString();

value = Number("123");
value = Number("Sercan");// hata verir NaN(not a number).

value = parseFloat("3,14");
console.log(value);
console.log(typeof value);



/// Opertörler ///

const a = 10;
const b = 4 ;
let s;

s= a+b;
s = a-b;
s = a*b;
s= a/b;
s= a % b;
s = Math.PI;
s= Math.round(a/b);
s = Math.floor(a/b);
s = Math.sqrt(16);
s = Math.pow(4,3);
s = Math.random();
s = Math.floor(Math.random()*20+1);

console.log(s);

/// ////////////////////////////


////// String Methods /////*/

/*let value;

const firstName= "Sercan";
const lastName = "Masar";
const department = "Bilişim";
const salary = "3750";



value = firstName +" "+ lastName;
value = value + " "+ lastName; 
value = firstName.length;
value = firstName.toLocaleLowerCase;

value = firstName[firstName.length - 1];

value = firstName.indexOf("a");
value = firstName.includes("a");

value = firstName.concat(" ", lastName, "JavaScript " ).toLowerCase();

value = "İsim: " + firstName + "\nSoyad: "+lastName+ "\nDepartman: " + department + "\nMaas: " + salary ;

/// TEmplate literal//

value = `İsim: ${firstName} \nSoyisim: ${lastName} \nDepartman: ${department} \nMaas: ${salary}`;

console.log(value);*/

/*let value;
const userName= "Sercan";
const department = "Bilişim";
const salary = "3750";

value = "<ul>" +
        "<li>" + userName+ "</li>"+
        "<li>" + department+ "</li>"+
        "<li>" + salary+ "</li>"+
        "</ul>" ;

value = `
        <ul>
        <li>Kullanıcı Adı:${userName}</li>
        <li>Departman:${department}</li>
        <li>Maas:${salary}</li>
        </ul>
        `;




 document.body.innerHTML = value;   */

 ////Array Özellikleri//

 /*let value;
 const numbers = [45,78,34,79,23,5];
 const langs = ["Pyton","C++","Javascript"];

 value = numbers.length;
 value = numbers[3];
 value = numbers [numbers.length-1];
numbers.push(200);
value= numbers;

value = numbers.indexOf(23);
value = numbers.includes(6);

numbers.pop();
numbers.shift();


value = numbers;

value = numbers.sort();

value = numbers.sort(function(x,y){return x-y;})
 console.log(value);//küçükten büyüğe sıralama*/

 ///// obje kavramı ///


/*const user = {
 name: "Sercan Masar",
 age: 23,
 email: "sercan@gmail.com",
 langs: ["Türkçe","İngilizce", "Çince"],
 adress:{
     city: "İstanbul",
     street:"Dereboyu",
 },
 work: function(){
     console.log("çalışıyor");
 },


};

value = user.email;
value =user.adress.city;
value= user.work();

console.log(value);*/

/// Zaman Objesi //

let value;

const now = new Date();


value =now.getMonth();
value =now.getDay();

value = now;

value = now.toTimeString();
console.log(value);
