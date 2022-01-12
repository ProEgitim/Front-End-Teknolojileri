const allVideos = document.querySelectorAll(".video");

allVideos.forEach((v) => {
v.addEventListener("mouseover", () =>{
 const video = v.querySelector("video");
 video.play();

});


v.addEventListener("mouseleave", () =>{
 const video = v.querySelector("video");
  video.pause();
    
 });
});