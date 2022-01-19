class Request
{
    constructor()
    {
        this.xhr = new XMLHttpRequest();
    }
    GetData()
    {
        this.xhr.open("GET","https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest");
        this.xhr.setRequestHeader("X-CMC_PRO_API_KEY", "52c18610-e24f-47f2-8725-79fb0d191bd7");
        this.xhr.setRequestHeader("Content-Type", "application/json");
        this.xhr.onload = () => {
          if (this.xhr.status === 200){
              console.log(this.xhr.responseText);
          }
          else {
            console.log("HATA");
          }
        }
        this.xhr.send();
    }  
}
const xRequest = new Request();
const interval = setInterval(function() 
{
    console.log("PERIOD");
    xRequest.GetData();
},5000);

