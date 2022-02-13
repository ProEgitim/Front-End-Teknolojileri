class API
{
    constructor()
    {
        this.baseURL = "https://jsonplaceholder.typicode.com/posts";
    }
    async getTranslatedData()
    {
        const translatedText = await fetch(this.baseURL)
        const translatedTextJSON = await translatedText.json();    
        return translatedTextJSON;
    }
    async getTranslatedData()
    {     
        const localJSON = await fetch("property.json",
        {
            method: "POST",
            headers: {"Content-Type": "application/json"}
        })
    }
}