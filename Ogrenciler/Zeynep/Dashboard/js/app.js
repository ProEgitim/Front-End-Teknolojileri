// VALUE
const value = document.querySelector("#themeChanger");
const fullScreenArea = document.documentElement;
const fullScreenButton = document.getElementById("fullScreen");

// EVENTS
fullScreenButton.addEventListener("click", fullScreenMode);
fullScreenButton.addEventListener("click", closeFullscreen);

// FUNCTIONS
value.addEventListener("click", function (e) {

    if (document.body.classList.contains("dash-light-theme")) {
        document.body.classList.remove("dash-light-theme");
        value.innerHTML = "<i class=\"bi bi-brightness-high fs-5 mx-3 p-2 rounded-3 \"></i>";
    } else {
        document.body.classList.add("dash-light-theme");
        value.innerHTML = "<i class=\"bi bi-moon fs-5 mx-3 p-2 rounded-3 \"></i>";
    }

}, false);


function fullScreenMode() {
    if (fullScreenArea.requestFullscreen) {
        fullScreenArea.requestFullscreen();
    } else if (fullScreenArea.webkitRequestFullscreen) {
        fullScreenArea.webkitRequestFullscreen();
    } else if (fullScreenArea.msRequestFullscreen) {
        fullScreenArea.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

