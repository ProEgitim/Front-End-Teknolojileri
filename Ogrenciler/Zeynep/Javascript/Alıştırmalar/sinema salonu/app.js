// PARAMETERS
let seats = document.querySelectorAll(".seat.selectable");
const container = document.getElementById("container");
const count = document.querySelector("#count")
const amount = document.querySelector("#amount")
const button = document.getElementById("button");

// LISTENERS

container.addEventListener("click", selectedSeats);
button.addEventListener("click", sold);


// FUNCTIONS

function selectedSeats(e) {
    if (e.target.classList.contains("seat") && (!e.target.classList.contains("reserved") && (!e.target.classList.contains("selected")))) {
        e.target.className = "seat selectable selected"
    } else if (e.target.classList.contains("seat") && (!e.target.classList.contains("reserved") && (e.target.classList.contains("selected")))) {
        e.target.className = "seat selectable";
    }
    totalPrice();
    setLocalStorage();
}

function totalPrice() {
    const selectedSeatsValue = document.querySelectorAll(".seat.selectable.selected")
    count.textContent = (selectedSeatsValue.length);
    amount.textContent = 20 * (selectedSeatsValue.length);
}

function sold() {
    const selectedSeatsValue = document.querySelectorAll(".seat.selectable.selected")
    selectedSeatsValue.forEach(seatElement => seatElement.className = "seat selectable reserved")
    setLocalStorage();
    totalPrice();


}


// function saveLocalStorage() {
//
//     localStorage.setItem("seat reserved", JSON.stringify(reservedArray));
//     const reservedArray = JSON.parse(localStorage.getitem("seat reserved"));
// }

function setLocalStorage() {
    seats = [...seats];
    let reservedSeatInfo = [];
    const reserveds = document.querySelectorAll(".selectable.reserved");
    const selectedSeatsValue = document.querySelectorAll(".seat.selectable.selected")

    reserveds.forEach(reserved => {
        // var index = [].indexOf.call(seats, reserved);
        var index = seats.indexOf(reserved);
        if (index > -1) {
            if (!reservedSeatInfo.includes(index)) {
                reservedSeatInfo.push(index);
            }
        }
    });
    localStorage.setItem("reservedSeats", JSON.stringify(reservedSeatInfo));

    let selectedSeatInfo = [];

    selectedSeatsValue.forEach(selected => {
        var index = seats.indexOf(selected);
        if (index > -1) {
            if (!selectedSeatInfo.includes(index)) {
                selectedSeatInfo.push(index);
            }
        }
    });
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeatInfo));

}


function loadScreen() {
    const reservedSeatInfo = JSON.parse(localStorage.getItem("reservedSeats"));
    if (reservedSeatInfo) {
        reservedSeatInfo.forEach(seat => {
            if ((!seats[seat].classList.contains("reserved")) && (!seats[seat].classList.contains("selected"))) {
                seats[seat].className = 'seat selectable reserved';
            }
        });
    }

    const selectedSeatInfo = JSON.parse(localStorage.getItem("selectedSeats"));
    if (selectedSeatInfo) {
        selectedSeatInfo.forEach(seat => {
            if ((!seats[seat].classList.contains("reserved")) && (!seats[seat].classList.contains("selected"))) {
                seats[seat].className = 'seat selectable selected';
            }
        });
    }


    seats.forEach((eachSeat, seatNumber) => {
        eachSeat.textContent = seatNumber + 1;
    })


}


loadScreen();
