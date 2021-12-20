// PARAMETERS
let seats = document.querySelectorAll(".seat.selectable");
const container = document.getElementById("container");
console.log(container);
const count = document.querySelector("#count")
const amount = document.querySelector("#amount")
const button = document.getElementById("button");

// console.log(movieType);


// LISTENERS

container.addEventListener("click", selectedSeats);
button.addEventListener("click", sold);
// movieType.addEventListener("change", movieChange);

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
    const selectMovieBox = document.querySelector("#movie");
    localStorage.setItem("reservedSeats" + selectMovieBox.value, JSON.stringify(reservedSeatInfo));

    let selectedSeatInfo = [];

    selectedSeatsValue.forEach(selected => {
        var index = seats.indexOf(selected);
        if (index > -1) {
            if (!selectedSeatInfo.includes(index)) {
                selectedSeatInfo.push(index);
            }
        }
    });
    localStorage.setItem("selectedSeats" + selectMovieBox.value, JSON.stringify(selectedSeatInfo));
}

function loadScreen() {
    const selectMovieBox = document.querySelector("#movie");
    const reservedSeatInfo = JSON.parse(localStorage.getItem("reservedSeats" + selectMovieBox.value));
    if (reservedSeatInfo) {
        reservedSeatInfo.forEach(seat => {
            if ((!seats[seat].classList.contains("reserved")) && (!seats[seat].classList.contains("selected"))) {
                seats[seat].className = 'seat selectable reserved';
            }
        });
    }

    const selectedSeatInfo = JSON.parse(localStorage.getItem("selectedSeats" + selectMovieBox.value));
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

let movieSelection = document.querySelector("#movie");
movieSelection.addEventListener("change",movieChange);

function movieChange (e) {
    console.log(e.target.value);

    const reservedsRemove = document.querySelectorAll(".selectable.reserved");
    reservedsRemove.forEach(reservedSeatRemove =>{
        reservedSeatRemove.classList.remove("reserved");
    })

    const selectedRemove = document.querySelectorAll(".selectable.selected");
    selectedRemove.forEach(selectedSeatRemove =>{
        selectedSeatRemove.classList.remove("selected");
    })

    const reservedSeatInfo = JSON.parse(localStorage.getItem("reservedSeats"+ e.target.value));
    if (reservedSeatInfo) {
        reservedSeatInfo.forEach(seat => {
            if (!seats[seat].classList.contains("reserved")) {
                seats[seat].classList.add("reserved");
            }
        });
    }

    const selectedSeatInfo = JSON.parse(localStorage.getItem("selectedSeats"+ e.target.value));
    if (selectedSeatInfo) {
        selectedSeatInfo.forEach(seat => {
            if (!seats[seat].classList.contains("selected")) {
                seats[seat].classList.add("selected");
            }
        });
    }
    console.log(reservedsRemove);
//
// const movies = document.querySelectorAll("option");
// console.log(movies);
//
//     const movieType = document.getElementById("movie").valueOf();
//     console.log(movieType);

}
//
// movieType.forEach(movieValue => {
//     var value = seats.indexOf(reserved);
//     if (index > -1) {
//         if (!reservedSeatInfo.includes(index)) {
//             reservedSeatInfo.push(index);
//         }
//     }
// });
//
//
