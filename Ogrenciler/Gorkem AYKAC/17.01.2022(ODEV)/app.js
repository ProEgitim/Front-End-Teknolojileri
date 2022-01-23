
const coinList = document.getElementById("coinList");
var coefficient = 1;
const interval = setInterval(function() 
{    
    Request.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/map").then(response => callback(response))
    coefficient++;
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
                <td>${data["data"][index*coefficient].name}</td>
                <td>${data["data"][index*coefficient].symbol}</td>
            </tr>          
            `  
        }
            
    }
    else
    {
        console.log(errorKey);
    }
    
}

