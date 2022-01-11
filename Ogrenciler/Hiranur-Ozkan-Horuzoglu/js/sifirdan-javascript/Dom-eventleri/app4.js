//Input eventleri

const filter = document.getElementById("filter");

// document.addEventListener("DOMContentLoaded",load);


// function load(e) {
//     console.log("Sayfa Yuklendi.");
// }


//FOCUS

// filter.addEventListener("focus",run);

// filter.addEventListener("blur",run);

//PASTE
// filter.addEventListener("paste",run);

// //COPY
// filter.addEventListener("copy",run);


//CUT
// filter.addEventListener("cut",run);

//SELECT
filter.addEventListener("select",run);

function run(e) {
    console.log(e.type);
}


