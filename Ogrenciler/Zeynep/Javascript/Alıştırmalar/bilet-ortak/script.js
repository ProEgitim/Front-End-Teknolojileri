const seats = document.querySelectorAll(".seat");
const container = document.getElementById("container");
const count = document.querySelector("#count");
const amount = document.querySelector("#amount");

let seatInfo;
let reserveds;

eventListeners();

function eventListeners() {
    container.addEventListener("click", selected);
    document.addEventListener("DOMContentLoaded", loadScreen);
}

function selected(e) {
    if (e.target.classList.contains("seat") && (!e.target.classList.contains("reserved") && (!e.target.classList.contains("selected")))) {
        e.target.className = "seat selected";
    } else if (e.target.classList.contains("seat") && (!e.target.classList.contains("reserved")) && (e.target.classList.contains("selected"))) {
        e.target.className = "seat";
    }
    setSeatsTotalPrice();
    setLocalStorage();
}

function setSeatsTotalPrice() {
    const selectedSeats = document.querySelectorAll(".seat.selected");
    count.textContent = selectedSeats.length - 1;
    amount.textContent = 20 * (selectedSeats.length - 1);
}

function setLocalStorage() {
    seatInfo = [];
    reserveds = document.querySelectorAll(".reserved");
    selecteds = document.querySelectorAll(".selected");

    reserveds.forEach(reserved => {
        var index = [].indexOf.call(seats, reserved);
        if (index > -1) {
            if (!seatInfo.includes(index)) {
                seatInfo.push(index);
            }
        }
    });
    selecteds.forEach(selected => {
        var index = [].indexOf.call(seats, selected);
        if (index > -1) {
            if (!seatInfo.includes(index)) {
                seatInfo.push(index);
            }
        }
    });

    localStorage.setItem("seats", JSON.stringify(seatInfo));
}

function loadScreen() {
    seatInfo = JSON.parse(localStorage.getItem("seats"));
    seatInfo.forEach(seat => {
        if ((!seats[seat].classList.contains("reserved") && (!seats[seat].classList.contains("selected")))) {
            seats[seat].className = 'seat reserved';
        }
    });
}
