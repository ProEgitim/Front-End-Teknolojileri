const trendingButton=document.querySelector(".trending");
let videoSection = document.querySelector(".main-side");
let videoSectionTwo = document.querySelector(".main-side-two")
const discoverButton = document.querySelector(".discover");
const video = document.getElementsByTagName("video");
let source = document.querySelector("source");
let URL = source.getAttribute("src").toString();
let vid = document.querySelectorAll(".video");
let videoChange = document.querySelector(".video-change")



document.addEventListener("DOMContentLoaded",  windowLoad =>{
    videoSectionTwo.style.display="none"; 
   
})

trendingButton.addEventListener("click", changeView =>{
videoSection.style.display= "none";
videoSectionTwo.style.display="flex";
});

discoverButton.addEventListener("click", showView =>{
    videoSectionTwo.style.display="none";
    videoSection.style.display = "flex";
    
});

document.querySelector(".video-container").addEventListener("mouseover", function(e){
    if(e.target.matches('video')){
        e.target.play();     
    }

});
document.querySelector(".video-container").addEventListener("click", function(e){
    let i= e.target;
    videoChange.setAttribute("src",i.currentSrc);
    videoSection.style.display= "none";
    videoSectionTwo.style.display="flex";
    
});
document.querySelector(".main-side-two").addEventListener("mouseover", function(e){
    if(e.target.matches('video')){
        e.target.play();     
    }
});