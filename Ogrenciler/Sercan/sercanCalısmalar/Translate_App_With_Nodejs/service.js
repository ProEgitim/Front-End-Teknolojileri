



callData();
async function callData(){
    const res = await fetch("http://localhost:5000/api/lang", {
  
    }
           
    );
    const resData = await res.json();
    
    console.log(resData);
    
    }
    getAllLang();
    async function getAllLang (){
        const response = await fetch('http://localhost:5000/langs/all');
        const resData = await response.json();
        return resData;

    }

    const langs = getAllLang();
    langs.then(response => callBack(response));

    function callBack(data){
        data.forEach(element => {
           
            document.querySelector('.langListModal').innerHTML += `
            <li>${element.name}<li>
            `
        });
    }

    $('.langListModal').on('click', function getLang(e){
       if(e.target.matches('li')) {
           console.log(e.target);
       }      
    })

