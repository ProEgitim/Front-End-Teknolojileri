
const button = document.getElementById("button");
let years = document.getElementById("years");
console.log(years.innerText);

button.addEventListener("click", calculate);

// function calculate (){
    years.innerText = catAge * 15
    let catAge = [2];
    console.log(years);

// }
// function calculate_age(number) {
//     let ageCalculate = Date.now() - number.getTime();
//     let age = new Date(ageCalculate);
//     return Math.abs(age.getUTCFullYear() - 1970);
// }
//
// console.log(calculate_age(new Date(1982, 11, 4)));
//
// console.log(calculate_age(new Date(1962, 1, 1)));
