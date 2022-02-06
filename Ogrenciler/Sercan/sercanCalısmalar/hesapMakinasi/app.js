const input = document.querySelector(".calculator-input");
const operator = document.querySelectorAll(".operator");
const number = document.querySelector(".number");
const calculatorKeys = document.querySelector(".calculator-keys");

let firstValue = "";
let secondValue= "";


calculatorKeys.addEventListener("click", function getKeys(e){  
    let getValue = parseInt(e.target.value);
    input.value += getValue;
    console.log(getValue)
      
    switch(getValue){ 
        
        case "+": 
        case "-":
        case "/": 
        case "*" :
        case "=":
         calculate();
        break;
        case "ac" : clear();
        break;    
    } 
   
})


function clear (){
    input.value = "";
}

