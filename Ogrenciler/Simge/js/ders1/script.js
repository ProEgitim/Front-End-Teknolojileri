// var firstNumber=20;
// var secondNumber=20;

// console.log(firstNumber+secondNumber);




// var firstNumber="20";
// var secondNumber="20";

// console.log(firstNumber+secondNumber);


// var a = null;
// console.log(a);
// console.log(typeof a);


// // object

// var user={name:"Varol", age: 25};
// console.log(user);
// console.log(user.age);

// // array:diziler

// var users = ["varol", "sercan", 20];
// console.log(users);
// console.log(typeof users);
// console.log(users[1]);


// var merhaba= function() {
//     console.log("merhaba");
//     console.log(typeof merhaba);

// }






// const firstName = "Varol";
// const lastName = "Maksutoğlu";
// const department = "bilişim"
// const salary = "3750"



// value = firstName + lastName;
// value = firstName + "" + lastName;
// value = firstName.length;
// value = firstName.toLocaleUpperCase();
// value = firstName.indexOf(a);
// value = firstName.includes(a);
// value = firstName.concat("", lastName, "Javascript").toLowerCase();



// value =

//   "İsim: " +
//   firstName +
//   "/nSoyisim: " +
// lastName +
// "/nDepartman: " +
// department +
// "n/Maaş: " +
// salary;

// // Template Literal


// value = 'İsim: ${firstName} /nSoyisim: ${lastName} /nDepartman: ${department} /nMaaş: ${salary}';

// console.log(value);
// console.log(typeof value);






// let value ;
// const userName= "varol maksutoglu";
// const department = "bilişim";
// const salary = "3750";

// value =

// "<ul>" +
// "<li>" +
// userName +
// "</li>" +
// "<li>" +
// department +
// "</li>" +
// "<li>" +
// salary +
// "</li>" +
// "</ul>" ;

// value =
// <ul>
//     <li>${userName}</li>
//     <li>${department}</li>
//     <li>${salary}</li>

//     </ul>
//     ;
//     document.body.innerHTML = value;



//     // array özellikleri

//     let value;
//     const numbers = [45, 78, 34, 79, 23, 5];
//     const langs = ["phyton", "C++", "Javascript"];

//     value =numbers.length;
//     value =numbers[3];
//     value =numbers[numbers.length -1];
//     numbers.push (200);

//     value = numbers ;

//     value = numbers.indexOf(23);
//     value = numbers.includes(6);

//     numbers.pop();
//     numbers.shift();

//     value = numbers ;
    
//     value = numbers.sort();
    
//     value = numbers.sort(function (x,y) {
//          return x-y ; // küçükten büyüğe sıralama
//     });
    
//     value = numbers.sort(function (x,y) {
//         return y-x ; // büyükten küçüğe sıralama
//    });
   
//    console.log(value);
//    console.log(typeof value);




// //    obje özellikleri

// let value;

// const user = {
//     name: "sercan masar",
//     age:23,
//     email:"sercan@gmail.com",
//     langs: ["türkçe", "ingilizce", "çince"],
//     address: {
//         city:"istanbul",
//         street:"dereboyu",

//     },
//   work: function (){
//       console.log ("çalısıyor");

//   },

// };

// value = user.email;
// value = user.address.city;

// value = user.work ();

// console.log(value);
// console.log(typeof value);


// zaman ögesi 


// let value;
// const now = new Date();
// const date1 = new Date ("9-19-1993 06:15:00");

// value = date1;

// console.log(value);
// console.log(typeof value);



let value;
const now = new Date();

// value = now.getMonth();
// value = now.getDay();



value = now.toDateString();
value = now.toTimeString();



console.log(value);
console.log(typeof value);






