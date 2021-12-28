const photos = document.querySelectorAll(".cat");

photos.addEventListener("mouseover" , littleBig);
photos.addEventListener("mouseout", normalColor);

function littleBig() {
    photos.forEach(function(photo){
        photo.style.transition = 0.2;
    });
}

function normalColor() {
    photos.forEach(function(photo){
        photo.style.transition = "none";
    });
}