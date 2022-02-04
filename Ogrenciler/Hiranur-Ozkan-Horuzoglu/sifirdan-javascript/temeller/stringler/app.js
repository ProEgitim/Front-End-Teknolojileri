let value;

const firstName = "Louis";
const lastName = "Armstrong";
const langs = "Java,Python,C++";

//value = firstName + lastName;

value = firstName + " " +lastName;

value = "Mustafa Murat ";
value += "Coskun"; // value = value + "Coskun"

value = firstName.length; //kac karakter oldugu

value = firstName.concat(" ",lastName," ", "Caz"); //concat ekleme yapıyor --firstName + " " + ...

value = firstName.toLowerCase(); //küçültür harfleri
value = firstName.toUpperCase();//büyütür


value = firstName[0];
value = firstName[1];
value = firstName[4];
value = firstName[firstName.length -1]; //her zaman son karakteri alacaktır


//Index of metodu

value = firstName.indexOf("L"); //kacıncı indexde oldugunu söyler
value = firstName.indexOf("o");
value = firstName.indexOf("l"); //aradımız karakter yoksa -1 olarak sonuc döner 


//Char At

value = firstName.charAt(0);
value = firstName.charAt(firstName.length -1);


//Split

value = langs.split(","); //parcalara ayırmak

//Replace

value = langs.replace("Python", "Css"); //string içinden belli bir yeri degiştirmek istersek


//Includes
//sorgulama metodu

value = langs.includes("Java"); //bu string oldugu için true sonucunu döner
value = langs.includes("asdadasdfdsa"); //bu string oldmadıgı için false sonucunu döner


console.log(value);