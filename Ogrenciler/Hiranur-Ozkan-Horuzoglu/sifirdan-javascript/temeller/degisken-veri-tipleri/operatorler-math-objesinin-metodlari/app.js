let value;

const value1 = 10;
const value2 = 4;

// aritmatik operatör

//value = value1 + value2; //toplama
//value = value1 - value2; //cıkarma
//value = value1 * value2; //carpma
//value = value1 / value2; //bolme
//value = value1 % value2; //kalan


//math objesi

value = Math.PI; // PI sayısı
value = Math.E; //dogal logaritmanın kat sayısı
value = Math.round(3.6); //sayıları yuvarlar
value = Math.round(2.3); 
value = Math.round(3.5); 
value = Math.ceil(3.1); //butun ondalıklı degerlerimizi bi üst integer yuvarlıyor 
value = Math.ceil(3.7);

value = Math.floor(3.1); //butun ondalıklı degerlerimizi bi alt integer yuvarlıyor 
value = Math.floor(3.7);

value = Math.sqrt(16); // karakök alma
value = Math.sqrt(31);

value = Math.abs(-10); //mutlak deger

value = Math.pow(8,3); // kuvvet hesaplama 8in 3.kuvvetini alma
value = Math.pow(4,2);

value = Math.max(10,-1,100,45); //en yüksek degeri dönme --içlerindeki en yüksek deger
value = Math.min(10,-1,100,45); // en düsşük degeri dönme  --içlerindeki en kücük deger

value = Math.random(); // rastgale sayı üreticek o dahil ancak 1 dahil degil arasında sayı dönüyor
value =Math.floor(Math.random() * 50 +1); //0 50 arasında deger dön assa yuvarla



console.log(value);
