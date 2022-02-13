class API
{
    constructor()
    {
        this.baseURL = "http://localhost:5000/translate";
    }
    async getTranslatedData(languageKey,data)
    {

        const myLanguageText = languageKey.split("-");
        const translatedText = await fetch(this.baseURL,
        {
            method: "POST",
            body: JSON.stringify({
                q: data,
                source: myLanguageText[0],
                target: myLanguageText[1],
                api_key: "deneme",
                format: "text"
            }),
            headers: {"Content-Type": "application/json"}

        });
        const translatedTextJSON = await translatedText.json();
        return translatedTextJSON;
    }
}