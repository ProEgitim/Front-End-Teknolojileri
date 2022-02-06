//bır kere calısıyor-gozukup kayboluyor
setTimeout(function() {
    console.log("selam");
}, 5000);

//SET INTERVAL-surekli calistiriliyor
let i = 0;
let value = setInterval(function () {
    i++
    console.log("Sayi: ",i);
},1000); //ms-milisaniye

//CLEAR INTERVAL
document.getElementById("btn").addEventListener("click",function () {
    clearInterval(value); //durduruyor
})

