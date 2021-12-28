const seats = document.querySelectorAll(".seat");
const container = document.getElementById("container");

var seatInfo = [];
var selectedIndex = [];
var multipleIndex = [];

loadScreen();
eventListeners();
function eventListeners()
{ 
    container.addEventListener("click",selected);

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
    const selectedSeats = container.querySelectorAll(".seat.selected");//parent name !=
    count.textContent = selectedSeats.length;
    amount.textContent = 20 * (selectedSeats.length);
}
function setLocalStorage()
{   
    const selectedSeats = container.querySelectorAll(".seat.selected");
    const reservedSeats = container.querySelectorAll(".seat.reserved");

    const selectedSeatsArr = [...selectedSeats];
    const reservedSeatsArr = [...reservedSeats];

    const seatsArr = [...seats];

    selectedIndex = selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    })

    reservedIndex = reservedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    })

    selectedIndex.push(...reservedIndex);
    localStorage.setItem("selected",JSON.stringify(selectedIndex));
}

function loadScreen()
{
    seatInfo = JSON.parse(localStorage.getItem("selected"));
    if(seatInfo != null && seatInfo.length > 0)
    {
        seats.forEach(function(item, index)
        {
            if(seatInfo.indexOf(index) > -1)
            {
                item.classList.add("reserved");

            }
        })
    }
    setSeatsTotalPrice();
    setLocalStorage();
    
}
