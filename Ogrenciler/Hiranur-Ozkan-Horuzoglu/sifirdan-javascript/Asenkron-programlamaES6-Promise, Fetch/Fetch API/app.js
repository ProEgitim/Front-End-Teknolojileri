function getTextFile() {
    fetch("example.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
function getJsonFile() { // Localdaki json dosyasindan veri alma
    fetch("example.json")
    .then( response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
    
}
function getEXternalAPI() {
    fetch("http://api.exchangeratesapi.io/v1/latest?access_key=a48afb973259b17c029cee604aa88987")
    .then(response => response.json())
    .then(data => console.log(data.rates.TRY))
    .catch(err => console.log(err));
}

//getTextFile();
//getJsonFile();
getEXternalAPI();