
var seats = document.querySelectorAll(".seat");
var container = document.querySelector(".container");
var count = document.getElementById("count");
var amount = document.getElementById("amount");
var movie = document.getElementById("movie");

eventListeners();

function eventListeners(){
    container.addEventListener("click",selectSeat);
    document.addEventListener("DOMContentLoaded", loadScreen);
    movie.addEventListener("change", selectMovie);
}




function selectSeat(e){
    
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved") ){
    e.target.classList.toggle("selected");   
    addSelectedSeats();
    totalPrice();
}
}

function totalPrice(){

    let selectedSeats = container.querySelectorAll(".seat.selected");
        count.textContent= selectedSeats.length-1;
        amount.textContent= movie.value * (selectedSeats.length-1);
     }

function addSelectedSeats(){
    let seats =document.querySelectorAll(".seat");
    let selectedSeats = document.querySelectorAll(".selected");
    let reservedSeats = document.querySelectorAll(".reserved");
    const seatInfo=[];
    //  const reservedSeatsArr=[];
    // seats = [...seats];
    // console.log(seats);
   

        selectedSeats.forEach(selected => {
        var index = [].indexOf.call(seats, selected);
        if (index > -1) {
            if (!seatInfo.includes(index)) {
                seatInfo.push(index);
            }
        }
    });

    reservedSeats.forEach(reserved => {
        var index = [].indexOf.call(seats, reserved);
        if (index > -1) {
            if (!seatInfo.includes(index)) {
                seatInfo.push(index);
            }
        }
    });


localStorage.setItem("selectedTicketIndex", JSON.stringify(seatInfo));

}



function loadScreen() {
    seatInfo = JSON.parse(localStorage.getItem("selectedTicketIndex"));
    seatInfo.forEach(seat => {
        if ((!seats[seat].classList.contains("reserved") && (!seats[seat].classList.contains("selected")))) {
            seats[seat].className = 'seat reserved';
        }
    });
}

  
   