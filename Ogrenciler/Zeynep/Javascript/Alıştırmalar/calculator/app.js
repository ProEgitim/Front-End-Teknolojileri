const numbers = document.querySelectorAll(".grid-item");
const container = document.getElementById("grid-container");
const buttons = document.querySelector(".item7");

buttons.addEventListener("click", calculate);
container.addEventListener("click", clickReceiver);
document.addEventListener('keypress', keyPress);


function clickReceiver(e) {
    if (e.target.classList.contains("grid-item")) {
        // console.log(e.target.innerText);
        writeToScreen(e.target.innerText);
    }
}

function keyPress(e) {
    if (e.charCode >= 48 && e.charCode <= 57) {
        // console.log(e.key);
        writeToScreen(e.key);
        // } else if ((e.charCode == 42) || (e.charCode == 43) || (e.charCode == 45) || (e.charCode == 47)) {
    } else if (e.charCode == 43) {
        processor = 'plus'

    } else if (e.charCode == 42) {
        processor = 'times'

    } else if (e.charCode == 45) {
        processor = 'minus'

    } else if (e.charCode == 47) {
        processor = 'divide'

    } else if (e.charCode == 61) {
        calculate();
    }
}


let oldNumber;
let newNumber;
let processor;

function writeToScreen(e) {
    if (processor) {
        if (newNumber) {
            newNumber += e;
        } else {
            newNumber = e;
        }
    } else {
        if (oldNumber) {
            oldNumber += e;
        } else {
            oldNumber = e;
        }
    }
    const result = document.querySelector("#item-result");
    result.textContent += e;
}

function calculate() {
    console.log(oldNumber);
    console.log(newNumber);
}

