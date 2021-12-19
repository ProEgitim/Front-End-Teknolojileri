const seats = document.querySelectorAll(".seat");
const container = document.getElementById("container");

var seatInfo = [];

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
    console.log(document.querySelectorAll(".seat"));
    localStorage.setItem("seats",JSON.stringify(document.querySelectorAll(".seat")));
}
function loadScreen()
{
    seatInfo = JSON.parse(localStorage.getItem("seats"));  
}

function myFunction(item) 
{
    if((item.classList.contains("selected")))
    {       
        selectedCount += 1;
    }
}

    