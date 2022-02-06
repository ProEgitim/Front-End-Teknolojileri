let value;

const numbers = [43,56,33,23,44,35,5];

//const numbers2 = new Array(43,56,33,23,44,35,5);

const langs = ["Python" , "Java","C++","Javascript"];

const a = ["Merhaba",22,null,undefined,3.14];

//Uzunluk
value = numbers.length;

//Indekslenme
value =numbers[0];
value =numbers[2];
value =numbers[numbers.length -1];

//Herhangi bir indekxteki degeri degiştirme

numbers[2] = 1000;

value = numbers;

//Index Of

value = numbers.indexOf(1000);

//Arrayin sonuna deger ekleme - Push

numbers.push(2000);
value = numbers;

//Arrayin başına deger ekleme - Unshift

numbers.unshift(3000);
value = numbers;

//sonundan deger atma - pop

numbers.pop();

value = numbers;

//başından deger atma - shift

numbers.shift();

value = numbers;

//belli bir kısmını atma - splice

numbers.splice(0,3); //sıfırdan üce kadar at ama 3 dahil degil

value = numbers;

//ters cevirme işlemi - reverse

numbers.reverse();

value = numbers;

//ilk rakama göre sıralıyor- sort
//örnek: 23,35,44,5 bu sırayla yapıyor ilk rakama bakıyor.
value = numbers.sort();

value = numbers.sort(function(x,y){ //küçükten Büyüge
    return x- y;

});


value = numbers.sort(function(x,y){ // Büyükten kücüge
    return y - x;

});



console.log(value);