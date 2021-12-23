const seat = document.querySelectorAll(".seat:not(.reserved)");
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');

let reserveds;

const container = document.querySelector(".container");
container.addEventListener("click", koltukSec);

function koltukSec(e) {

    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
        e.target.className = "seat selected";
    } else if (e.target.classList.contains("seat") && (!e.target.classList.contains("reserved")) && (e.target.classList.contains("selected"))) {
        e.target.className = "seat";
    }
    toplamHesap();

}
select.addEventListener('change', function (e) {
    console.log(select.selectedIndex);
    // toplamHesap();
    temizle();
});

function temizle() {
    document.querySelectorAll(".container .selected").forEach(function(element) {element.classList.remove('selected')});
}

//  const secilikoltuklar = [
//      {
//          movieName:"movie1",
//          selectedSeats:[1,2,3]
//      },
//      {
//          movieName:"movie2",
//          selectedSeats:[4,5,6]
//      },
//      {
//          movieName:"movie3",
//          selectedSeats:[7,8,9]
//      }
//  ]

function toplamHesap() {
    let selectedSeats = container.querySelectorAll('.seat.selected');
    const selectedSeatsArr = [...selectedSeats];
    const seatsArr = [...seat];
    let selectedSeatIndexArr = selectedSeatsArr.map(function (i) {
        return seatsArr.indexOf(i)
    });
    let selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;
    saveToLocalStorage(selectedSeatIndexArr);

}

function saveToLocalStorage(index) {
    localStorage.setItem('selectedSeats' + select.selectedIndex, JSON.stringify(index));


}