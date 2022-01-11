//Event Listeners ve Event Objesi Kullanma


const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);

function submitForm(e) {
    console.log("Submit Eventi");

   e.preventDefault();//sayfa yenilenmesini onlemek icin
}




// filterInput.addEventListener("focus",function (e) {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.placeholder);
//     console.log(e.target.className);

    


//     console.log("naber");
// });

// filterInput.onfocus = (function () {
//     console.log('naber');
// });