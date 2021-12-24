const seats = document.querySelectorAll(".seat:not(.reserved)");
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');

getFromLocalStorage();
toplamHesap();
const container = document.querySelector(".container");
container.addEventListener("click", koltukSec);

function koltukSec(e) {

    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
    } else if (e.target.classList.contains("seat") && (!e.target.classList.contains("reserved")) && (e.target.classList.contains("selected"))) {
        e.target.className = "seat";
    }
    toplamHesap();
    saveToLocalStorage();
}

select.addEventListener('change', function (e) {
    temizle();
    getFromLocalStorage();
    toplamHesap();
});

function temizle() {
    document.querySelectorAll(".container .selected").forEach(function(element) {
        element.classList.remove('selected');
    });
    document.querySelectorAll(".container .reserved").forEach(function(element) {
        element.classList.remove('reserved');
    });
}

function toplamHesap() {
    let selectedSeats = document.querySelectorAll('.container .seat.selected');
    let selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;
}

function getFromLocalStorage() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'+ select.selectedIndex));

    if (selectedSeats !=null && selectedSeats.length > 0) {
        seats.forEach(function(seat, index) {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('reserved');
            }
        });
    }
}

function saveToLocalStorage() {
    let selectedSeats = document.querySelectorAll('.container .seat.selected');
    let reserverdSeats = document.querySelectorAll('.container .seat.reserved');
    const selectedAndReservedSeatsArr = [...selectedSeats, ...reserverdSeats];
    const seatsArr = [...seats];
    let selectedSeatIndexArr = selectedAndReservedSeatsArr.map(function (i) {
        return seatsArr.indexOf(i)
    });

    localStorage.setItem('selectedSeats' + select.selectedIndex, JSON.stringify(selectedSeatIndexArr));
}