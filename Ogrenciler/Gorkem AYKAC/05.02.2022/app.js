const xAPI = new API();

function translateButtonEvent()
{
   
    console.log("asdasdasd")
    xAPI.getTranslatedData().
    then(response=>console.log(response)).
    catch();

}
translateButtonEvent();