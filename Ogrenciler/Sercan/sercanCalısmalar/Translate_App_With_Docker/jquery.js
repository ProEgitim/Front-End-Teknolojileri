
// Calling class
let storage = new Storage();
let date = new Date();

document.addEventListener('DOMContentLoaded', ()=>
{
    $('.langListModal').hide();
    let dataStore = JSON.parse(localStorage.getItem('lastSearch'));
    dataStore.forEach(data => {
       let list=document.querySelector('.listPrevious');
       list.innerHTML +=`<li class="elem">${data}(<span>${date.toLocaleDateString('en-US')}</span>)</li>`;
    });
    
});
function toggleModal()
{ 
    $('.langListModal').animate({

        height: 'toggle',
        opacity:'toggle',
        tranform: 'toggle',

    },2000)
}

function change()
{
  let leftVal= $('#enterLang').text();
  localStorage.setItem('entry', JSON.stringify(leftVal));
  let rightVal = $('#translatedLang').text();
  localStorage.setItem('trans', JSON.stringify(rightVal));
  $('#enterLang').text(JSON.parse(localStorage.getItem('trans')));
  $('#translatedLang').text(JSON.parse(localStorage.getItem('entry')));
}

function lastSearch()
{
    let firstLang = document.getElementById('firstLang');
    if(firstLang.value === "")
    {
    alert('This section can not be empty');
    }
    else
    {
    storage.get(firstLang.value.trim());
    let dataStore = JSON.parse(localStorage.getItem('lastSearch'));    
    let list=document.querySelector('.listPrevious');
    let elem= dataStore[dataStore.length-1]
    list.innerHTML +=`<li class="elem">${elem}</li>`
    firstLang.value ="";
    }  
}

function hide()
{
$('.listPrevious').toggle(1000);
}

function clean()
{  
    let items=document.querySelector('.listPrevious');
    items.innerHTML="";   
    localStorage.removeItem('lastSearch');
    
}

function deleteOneİtem(){

}



 


