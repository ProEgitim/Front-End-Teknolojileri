const tumKoltuklar = document.querySelectorAll(".seat");
const seats = document.querySelectorAll(".seat:not(.reserved)");
const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const movie = document.getElementById("movie");

eventListeners();
function eventListeners() {
    container.addEventListener("click", selectSeat);
    //container.addEventListener("DOMContentLoaded", getFromLocalStrorage());
}

getFromLocalStrorage();

function selectSeat(e) {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("reserved")){
        e.target.classList.toggle("selected");
        calculateTotal();
    }
}

function getFromLocalStrorage() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedIndex"));
    if (selectedSeats != null && selectedSeats.length > 0 ){
        seats.forEach(function(seat,index) {
            if (selectedSeats.indexOf(index)>-1){
                seat.classList.add("reserved");
            }
        })
    }
}

function calculateTotal() {
    const selectedSeats = container.querySelectorAll(".seat.selected");
    const selectedSeatsArr = [];
    const seatsArr = [];
    selectedSeats.forEach(function(seat) {
        selectedSeatsArr.push(seat);
    });
    seats.forEach(function(seat) {
        seatsArr.push(seat);
    });
    let selectedSeatIndexs = selectedSeatsArr.map(function(seat) {
        return seatsArr.indexOf(seat);
    });
    let selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    amount.innerText = selectedSeatsCount * movie.value ;
    addLocalStorage(selectedSeatIndexs);
}

function addLocalStorage(selectedSeatIndexs){
    localStorage.setItem("selectedIndex", JSON.stringify(selectedSeatIndexs));
}
/*Verilerimizi seçtirip local storage yazdırdık. Toplamları hesap ettirdik. Renkleri 
değiştirdik ve sayfayı yenilediğimizde verileri kaybetmedik. Verileri localStorage 
verileri üzerine değil yeni bir kayıt olarak atamalıyız.*/
