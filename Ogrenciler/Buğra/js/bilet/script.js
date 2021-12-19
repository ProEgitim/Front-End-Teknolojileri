const seat = document.querySelectorAll(".seat:not(.reserved)");
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');



const container = document.querySelector(".container");
container.addEventListener("click",koltukSec);

function koltukSec (e) {

    if (e.target.classList.contains ('seat') && !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected'); 
    }
    toplamHesap();
    
}
select.addEventListener('change', function(e){
    toplamHesap();
})


function toplamHesap(){
        let selectedSeats = container.querySelectorAll('.seat.selected');
        const selectedSeatsArr = [...selectedSeats];
        const seatsArr = [...seat];
  let selectedSeatIndexArr = selectedSeatsArr.map(function(i){return seatsArr.indexOf(i)});
        let selectedSeatCount = selectedSeats.length;      
        count.innerText = selectedSeatCount;    
        amount.innerText = selectedSeatCount * select.value;
        saveToLocalStorage (selectedSeatIndexArr);
    
}
    function saveToLocalStorage (index) {
        localStorage.setItem('selectedSeats',JSON.stringify(index));
        
    }
  