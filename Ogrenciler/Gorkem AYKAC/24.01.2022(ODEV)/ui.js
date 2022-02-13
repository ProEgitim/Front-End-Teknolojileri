class UI
{
    constructor()
    {

    }
    setTranslatedText(text)
    {
        const translatedText = document.getElementById("translatedText");
        translatedText.innerHTML = text;
    }
    wrongInput()
    {
        const translatePart = document.getElementById("translatePart");
        const myText = document.getElementById("myText");
        const languageCode =  document.getElementById("languageCode");
        const translatedText = document.getElementById("translatedText");

        myText.value = "";
        languageCode.value = "";
        translatedText.innerHTML = "";
        
        const alert = document.createElement("div");
        alert.className = `mt-3 alert alert-danger`;
        alert.textContent = "Wrong Input!";
        translatePart.appendChild(alert);
        
        setTimeout(function(){
            alert.remove();
        }, 2000);
    }
    wrongLanguageKey()
    {
      
    }
}