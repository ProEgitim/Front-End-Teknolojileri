const xUI = new UI();
const xAPI = new API();
const myText = document.getElementById("myText");
const languageCode =  document.getElementById("languageCode");
const translatedText = document.getElementById("translatedText");
const translateButton =  document.getElementById("translate");

translateButton.addEventListener("click",translateButtonEvent);

function translateButtonEvent(e)
{
    if(myText.value != null 
    && myText.value.trim() != ""
    && languageCode.value != null
    && languageCode.value.trim() != "")
    {
        xAPI.getTranslatedData(languageCode.value, myText.value).
        then(response=>{
            console.log(response);
            if(!response.error)
            { 
                console.log("DATA");                    
                xUI.setTranslatedText(response.translatedText)   
            }
            else
            {
                console.log("ERROR");
            }
              
        }).
        catch(xUI.wrongInput());

    }
    else
    {
        xUI.wrongInput();
    }
}