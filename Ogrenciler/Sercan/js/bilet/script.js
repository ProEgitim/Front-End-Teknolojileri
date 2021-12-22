const allSeats = document.querySelectorAll(".seat");
const seats = document.querySelectorAll(".seat:not(.reserved)");
const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const movie = document.getElementById("movie");


eventListeners();
function eventListeners(){
container.addEventListener("click", selectSeat);

}


getFromLocalStorage();
function selectSeat(e){

   if (e.target.classList.contains("seat") && !e.target.classList.contains("reserved")){
       e.target.classList.toggle("selected");
       calculateTotal();
   
   }
}

function getFromLocalStorage(){
    const selectedSeats = JSON.parse(localStorage.getItem("selectedIndex"));
   console.log(selectedSeats);
    if(selectedSeats != null && selectedSeats.length>0){
        seats.forEach(function(seat, index){
            if (selectedSeats.indexOf(index)>-1){
            seat.classList.add("reserved");
            }
        })
    }
}


function calculateTotal(){
   const selectedSeats = container.querySelectorAll(".seat.selected");
   const selectedSeatsArr=[];
   const SeatsArr=[];
  
   selectedSeats.forEach(function(seat){
       selectedSeatsArr.push(seat);
       

   });
   seats.forEach(function(seat){
       SeatsArr.push(seat);
   });
   let selectedSeatIndexs = selectedSeatsArr.map(function(seat){
       return SeatsArr.indexOf(seat);
   });

   let selectedSeatCount = selectedSeats.length;
   count.innerText = selectedSeatCount;
   amount.innerText = selectedSeatCount*movie.value;
   addLocalStorage(selectedSeatIndexs);

}



function addLocalStorage(selectedSeatIndexs){ 
    localStorage.setItem("selectedIndex" , JSON.stringify(selectedSeatIndexs));
    

}
