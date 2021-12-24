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
        e.target.className = "seat selected";
    } else if (e.target.classList.contains("seat") && (!e.target.classList.contains("reserved")) && (e.target.classList.contains("selected"))) {
        e.target.className = "seat";
    }
    let selectedSeatIndexArr = toplamHesap();
    saveToLocalStorage(selectedSeatIndexArr);

}

select.addEventListener('change', function (e) {
    temizle();
    getFromLocalStorage();
    toplamHesap();
});

function temizle() {
    document.querySelectorAll(".container .selected").forEach(function(element) {element.classList.remove('selected')});
}

function toplamHesap() {
    let selectedSeats = document.querySelectorAll('.container .seat.selected');
    const selectedSeatsArr = [...selectedSeats];
    const seatsArr = [...seats];
    let selectedSeatIndexArr = selectedSeatsArr.map(function (i) {
        return seatsArr.indexOf(i)
    });
    let selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;
   
    return selectedSeatIndexArr;
}

function getFromLocalStorage() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'+ select.selectedIndex));

    if (selectedSeats !=null && selectedSeats.length > 0) {
        seats.forEach(function(seat, index) {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }
}

function saveToLocalStorage(index) {
    localStorage.setItem('selectedSeats' + select.selectedIndex, JSON.stringify(index));
}