
setTimeout(function() {
    console.log("selam");
}, 5000);

//SET INTERVAL-surekli calistiriliyor
let i = 0;
let value = setInterval(function () {
    i++
    console.log("Sayi: ",i);
},1000);

//CLEAR INTERVAL
document.getElementById("btn").addEventListener("click",function () {
    clearInterval(value); //durduruyor
})

