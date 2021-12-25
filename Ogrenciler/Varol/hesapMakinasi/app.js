const display = document.querySelector('.calculator-input');
const key = document.querySelector('.calculator-keys');

let displayValue = '0';
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

updateDisplay();

function updateDisplay(){
  display.value = displayValue;
}

key.addEventListener('click', getKeys);

function getKeys(e){
  const el = e.target;
  const value = el.value;
  if(!el.matches('button')) return;

  switch(value){
    case '+':
    case '-':
    case '*':
    case '/':
    case '=':
      handleOperator(value);
      break;
    case '.':
      inputDecimal(value);
      break;
    case 'clear':
      clear();
      break;
    default: inputNumber(value);
  }
  updateDisplay();

  // if (el.classList.contains('button')) {
  //   // console.log('number',el.value);
  //   inputNumber(el.value);
  //   updateDisplay();
  //   return;
  // }
  // if (el.classList.contains('operator')){
  //   console.log('operator',el.value);
  //   return;
  // }
  // if (el.classList.contains('decimal')){
  //   // console.log('decimal',el.value);
  //   inputDecimal(el.value);
  //   updateDisplay();
  //   return;
  // }
  // if (el.classList.contains('clear')){
  //   console.log('clear',el.value);
  //   return;
  // }
}

// if(displayValue === '0'){
//   displayValue = num;
// }
// else{
//   displayValue = displayValue + num;
// }
function inputNumber(num){
  if (waitingForSecondValue) {
    displayValue = num;
    waitingForSecondValue = false;
  } else {
    displayValue = displayValue === '0' ? num : displayValue + num;
  }
}

function inputDecimal(){
  if(!displayValue.includes('.')){
    displayValue += '.';
  }
}

function handleOperator(nextOperator) {   // 10 + 5 =
  const value = parseFloat(displayValue);

  if(operator && waitingForSecondValue){
    operator = nextOperator;
    return;
  }
  if(firstValue === null) {
    firstValue = value;
  } else if(operator) {
    const result = calculate(firstValue, value, operator);
    displayValue = `${parseFloat(result.toFixed(7))}`;
    firstValue = result;
  }
  waitingForSecondValue = true;
  operator = nextOperator;
  console.log(displayValue, firstValue, operator, waitingForSecondValue);
}

function calculate(first,second,operator){
  if(operator === "+"){
    return first + second;
  } else if (operator === "-"){
    return first - second;
  } else if (operator === "*"){
    return first * second;
  } else if (operator === "/"){
    return first / second;
  }
}