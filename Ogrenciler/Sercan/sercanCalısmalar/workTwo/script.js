let card = document.querySelector(".card-sc");

document.querySelector(".parsePhoto").addEventListener("mouseover", big);

function big(e){ 

  console.log(e.target)
  if(e.target.matches('.img')){
   e.target.childNodes[1].childNodes[1].classList.add('big'); 
  }
 
}






