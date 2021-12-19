let seats = document.querySelectorAll(".seat");
let reserveds = document.querySelectorAll(".reserved");
console.log(seats)
let reserveds_w_index = []

reserveds.forEach(reserved => {
    var index = [].indexOf.call(seats, reserved);
    if (index > -1) {
        reserveds_w_index.push(index);
    }
});
console.log(reserveds_w_index)
localStorage.setItem('reserveds', JSON.stringify(reserveds_w_index));


reserveds = JSON.parse(localStorage.getItem("reserveds"));

reserveds.forEach(reserved => {
    seats[reserved].className = 'seat reserved';
});
