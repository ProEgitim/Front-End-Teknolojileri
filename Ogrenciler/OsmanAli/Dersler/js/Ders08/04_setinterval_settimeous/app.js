// Set Timeout
setTimeout(() => {
    console.log("Selam");
}, 3000);

// Set İnterval
let i = 0 ;
let value = setInterval(function(){
    i++;
    console.log("Sayı:",i);
} ,1000);

// Clear İnterval
document.getElementById("btn").addEventListener("click",function () {
    clearInterval(value);
});