const number = Math.floor(Math.random() * 100 + 1);
console.log(number);
if (number % 2 == 0) {
    console.log("Çift");
}
else {
    console.log("Tek");
}

function hesaplama() {
    a = Math.floor(Math.random() * 10 + 1);
    b = Math.floor(Math.random() * 10 + 1);
    console.log("Alanımız :" + a * b);
    console.log("Çevremiz :" + 2 * (a + b));
}
hesaplama();