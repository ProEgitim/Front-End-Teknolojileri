const seats = document.querySelectorAll(".seat");
const container = document.getElementById("container");

var seatInfo = [];
var selectedIndex = [];

loadScreen();
eventListeners();
function eventListeners()
{ 
    container.addEventListener("click",selected);
    document.addEventListener("DOMContentLoaded",loadScreen);

}

function selected(e)
{
    if(e.target.classList.contains("seat") && (!e.target.classList.contains("reserved") && (!e.target.classList.contains("selected"))))
    {
        e.target.className = "seat selected";
    }
    else if(e.target.classList.contains("seat") && (!e.target.classList.contains("reserved")) && (e.target.classList.contains("selected")))
    {
        e.target.className = "seat";
    }
    setSeatsTotalPrice();
    setLocalStorage();
}

function setSeatsTotalPrice()
{
    const selectedSeats = document.querySelectorAll(".seat.selected");
    count.textContent = selectedSeats.length - 1;
    amount.textContent = 20 * (selectedSeats.length - 1);
}
function setLocalStorage()
{   
    const selectedSeats = document.querySelectorAll(".seat.selected");
    const selectedSeatsArr = [...selectedSeats];
    const seatsArr = [...seats];

    selectedIndex = selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    })
    localStorage.setItem("selected",JSON.stringify(selectedIndex));
}

function loadScreen()
{
    seatInfo = JSON.parse(localStorage.getItem("selected"));
    if(seatInfo != null)
    {
        for(let i = 0; i<seatInfo.length; i++)
        {
            console.log(seatInfo[i]);
            seats[seatInfo[i]].className = "seat selected";
        }
    }
    setSeatsTotalPrice();
    setLocalStorage();
    
}
