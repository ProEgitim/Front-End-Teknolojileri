let data = document.getElementById("github-form");
// let searchButton = document.getElementById("search");

data.addEventListener("submit",addUsername);


function addUsername (){
    console.log(data.value.trim());
}
