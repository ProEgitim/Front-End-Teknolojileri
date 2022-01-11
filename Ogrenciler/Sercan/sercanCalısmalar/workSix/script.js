const trendingButton=document.querySelector(".trending");
let videoSection = document.querySelector(".main-side");
const discoverButton = document.querySelector(".discover");
trendingButton.addEventListener("click", changeView =>{
videoSection.style.display= "none";
});

discoverButton.addEventListener("click", showView =>{
    videoSection.style.display = "flex";
})