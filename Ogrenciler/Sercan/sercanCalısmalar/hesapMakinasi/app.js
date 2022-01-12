const input = document.querySelector(".calculator-input");
const operator = document.querySelectorAll(".operator");
const number = document.querySelector(".number");
const calculatorKeys = document.querySelector(".calculator-keys");
let firstValue = "";
let secondValue= "";


calculatorKeys.addEventListener("click", function getKeys(e){  
    let getValue= e.target.value;
    
    
      
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

function calculate(getValue){
    let result = input.value += getValue;
   
    if (!el.matches('operator')){
        result = firstValue;    
    }
   
    if (firstValue &&  el.matches("operator")){
        getValue = secondValue;
    
       
    }
}