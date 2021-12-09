let value;

//veritiplerini String'e Çevirme

value = String (123);
value = String (3.14);
value = String (true);
value = String (false);
value = String (function(){console.log()});
value = String([1,2,3,4]);

value = (10).toString();
value = (3.14).toString();


//veritiplerini sayılara cevirme

value = Number("123");
value = Number(null);
value = Number(undefined); //NaN
value = Number("Hello World"); //NaN
value = Number(function(){console.log()}); //NaN
value = Number([1,2,3,4]); //NaN

value = Number("3.14");

value = parseFloat("3.15");
value = parseInt("3");


//otamatik cevirme islemi

const a = Number("34") + 53;

console.log(a);
console.log(typeof a);



console.log(value);
console.log(typeof value);
