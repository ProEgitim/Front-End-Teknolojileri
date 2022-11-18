// Variables:Değişkenler

// number = sayısal ifadeler

// var firstNumber = 20;
// var secondNumber = 20;
// console.log(firstNumber + secondNumber);

// Stringler

// var userName = "Sercan";
// console.log(userName);
// console.log(typeof userName);

// Boolean

// var a = true;
// console.log(a);

// null
// var a = null;
// console.log(a);
// console.log(typeof a);

//Object
// var user = { name: "Varol Maksutoglu", age: 36 };
// console.log(user);
// console.log(typeof user);
// console.log(user.name);
// console.log(user.age);

// Array: Diziler
// var users = ["varol", "sercan", 10];
// console.log(users);
// console.log(typeof users);
// console.log(users[1]);

// var date = new Date();
// console.log(date);
// console.log(typeof date);

// var merhaba = function () {
//     console.log("Merhaba");
// };
// console.log(merhaba);
// console.log(typeof merhaba);

// var a = 10;
// var b = a;
// console.log(a, b);
// a = 20;
// console.log(a, b);

// var a = [1, 2, 3];
// var b = a;
// a.push(4);
// console.log(b);

//scope
// var a = 10;
// let b = 20;
// const c = 30;

// {
//     const d = "merhaba";
//     console.log(d);
// }
// console.log(d);

// Tip dönüştürme

// let value;

// // String'e dönüştürme
// var value = String(123);
// var value = 3.14;
// value = String(false);
// value = String(function () {
//     console.log(value);
// });
// value = String([1, 2, 3, 4]);
// value = (10).toString();

// // Number'a dönüştürme

// value = Number("123");
// console.log(value);
// console.log(typeof value);

// value = Number("Merhaba");
// value = Number(function () {
//     console.log("Deneme");
// });
// value = Number([1, 2, 3]);
// value = parseFloat("3.14");
// console.log(value);
// console.log(typeof value);

// // Otomatik tip dönüşümü
// value = 34 + "5";
// value = 34 + Number("5");
// console.log(value);
// console.log(typeof value);

// Operatörler
// const a = 10;
// const b = 4;
// let s;

// s = a + b;
// s = a - b;
// s = a * b;
// s = a / b;
// s = a % b;

// s = Math.PI;
// s = Math.round(a / b);
// s = Math.ceil(a / b);
// s = Math.floor(a / b);
// s = Math.sqrt(16);
// s = Math.pow(4, 3);
// s = Math.random();
// s = Math.floor(Math.random() * 20 + 1);

// console.log(s);

// String Metodları

// let value;
// const firstName = "Varol";
// const lastName = "Maksutoglu";
// const department = "Bilişim";
// const salary = "3750";

// value = firstName + lastName;
// console.log(value);
// value = firstName + " " + lastName;
// console.log(value);

// value = firstName;
// value += " " + lastName; //value = value + " " + lastName;
// value = firstName.length;
// value = firstName.toLocaleUpperCase();
// value = firstName[0];
// value = firstName[firstName.length - 1];
// value = firstName.indexOf("t");
// console.log(value);

// value = lastName.indexOf("u");
// value = lastName.includes("e");
// value = firstName.concat(" ", lastName, " Javasript").toLowerCase();
// value =
//     "İsim: " +
//     firstName +
//     "\nSoyisim: " +
//     lastName +
//     "\nDepartman: " +
//     department +
//     "\nMaaş: " +
//     salary;
// // Tempalte Literal

// value = `İsim: ${firstName}\nSoyisim: ${lastName}\nDepartman: ${department}\nMaaş: ${salary}`;
// console.log(value);

// let value;
// const userName = "Varol Maksutoglu";
// const department = "Bilişim";
// const salary = "3750";
// value =
//     "<ul>" +
//     "<li>" +
//     userName +
//     "</li>" +
//     "<li>" +
//     department +
//     "</li>" +
//     "<li>" +
//     salary +
//     "</li>" +
//     "</ul>";
// value = `
// <ul>
// <li>${userName}</li>
// <li>${department}</li>
// <li>${salary}</li>
// </ul>
// `;
// document.body.innerHTML = value;

// Array Özellikleri
// let value;
// const numbers = [45, 78, 34, 79, 23, 5];
// const langs = ["Python", "C++", "Javascript"];

// value = numbers.length;
// value = numbers[3];
// value = numbers[numbers.length - 1];
// numbers.push(200);

// value = numbers;

// value = numbers.indexOf(23);
// value = numbers.includes(6);

// numbers.pop();
// numbers.shift();

// value = numbers;
// console.log(value);
// value = numbers.sort();

// value = numbers.sort(function (x, y) {
//     return x - y; // Küçükten Büyüğe Sıralama
// });

// value = numbers.sort(function (x, y) {
//     return y - x; // Büyükten Küçüğe Sıralama
// });

// console.log(value);
// console.log(typeof value);

// Obje Özellikleri
let value;
const user = {
    name: "Sercan Masar",
    age: 23,
    email: "sercan@gmail.com",
    langs: ["Türkçe", "İngilizce", "Çince"],
    address: {
        city: "İstanbul",
        street: "Dereboyu",
    },
    work: function () {
        console.log("Çalışıyor");
    },
};

// value = user.email;
value = user.address.city;

// value = user.work();

console.log(value);
console.log(typeof value);

// Zaman Objesi

// let value;
// let now = new Date();

// value = now.getMonth();
// value = now.getDay();

// value = now;
// value = now.toDateString();

// value = now.toTimeString();

// console.log(value);
// console.log(typeof value);
