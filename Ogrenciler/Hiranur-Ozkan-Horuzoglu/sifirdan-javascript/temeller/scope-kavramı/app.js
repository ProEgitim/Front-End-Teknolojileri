

/*
SCOPE kavramı tüm programlama dillerinde bulunur. 
Scope kavramı bize şunu söyler; bir değişkenin nerelerde var olabildigini söyler
bir değişken fonksiyon içine tanımlanmıssa dışarda varolur mu bir blok içinde if blogu 
içinde tanımlanmıssa dışarıda var olurmu bunu anlatır kabaca
 */

//Scope Kavramı //scope kelime anlamı kapsam

//-Global scope  --- global dedigimizde direk yazılan jsler

let value1 = 10;
let value2 = 20;
let value3 = 30;


console.log(value1,value2,value3);

//-Function scope --- function içerisinde olur

    // function func(){
    //     let value1 = 40;
    //     let value2 = 50;
    //     let value3 = 60;
    //     console.log(value1,value2,value3);
    // }
    // func();
//-Blok scope    --- if blokları içinde olur

if (true) {
    //var value1 = 40;
    let value2 = 50;
    const value3 = 60;
    //value3 = 5;
    
    console.log(value1,value2,value3);
}