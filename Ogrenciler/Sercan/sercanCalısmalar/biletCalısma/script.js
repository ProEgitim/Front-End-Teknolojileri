

var container = document.querySelector(".container");
var seats = document.querySelectorAll(".seat");
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
        count.textContent= selectedSeats.length;
        amount.textContent= movie.value * (selectedSeats.length);
     }

function addSelectedSeats(){
    let seats =container.querySelectorAll(".seat");
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


localStorage.setItem("selectedTicketIndex" + movie.value , JSON.stringify(seatInfo));

}



function loadScreen() {
    seatInfo = JSON.parse(localStorage.getItem("selectedTicketIndex" +movie.value));
    seatInfo.forEach(seat => {
        if ((!seats[seat].classList.contains("reserved") && (!seats[seat].classList.contains("selected")))) {
            seats[seat].className = 'seat reserved';
        }
    });
}

function selectMovie(e){
   var removeReserved = document.querySelectorAll(".reserved");
   removeReserved.forEach(function(reserved){
       reserved.classList.remove("reserved");
   });

    let reservedInfo = JSON.parse(localStorage.getItem("selectedTicketIndex" +movie.value));
    reservedInfo.forEach(function(seat){
        if(!seats[seat].classList.contains("reserved")){
            seats[seat].classList.add("reserved");
        }

    })
}
  
   