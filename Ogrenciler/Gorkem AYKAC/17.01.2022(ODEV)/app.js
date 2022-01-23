
const coinList = document.getElementById("coinList");
var coefficient = 0;
const interval = setInterval(function() 
{    
    coefficient++;
    Request.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/map").then(response => callback(response))
   
},5000);
function callback(data)
{
    if(data !== null)
    {
       while(coinList.firstElementChild !== null)
        {
            coinList.firstElementChild.remove();
        }
        for (var index = 0; index < 20; index++) 
        {

            coinList.innerHTML +=  `
            <tr>
                <td>${data["data"][index+(coefficient*20)].name}</td>
                <td>${data["data"][index+(coefficient*20)].symbol}</td>
            </tr>          
            `  
        }
            
    }
    else
    {
        console.log(errorKey);
    }
    
}

