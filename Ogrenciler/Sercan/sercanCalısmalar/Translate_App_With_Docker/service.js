class Request{
    async post(data,sendLang,responseLang){
    const response = await fetch('http://localhost:5000',{
        method:'POST', 
        body: JSON.stringify({
            q:data,
            source: sendLang,
            target:responseLang

        }),
        headers:{ 'Content-type':'application/json'}
    }
    );
    const responseData = await response.json();
    return responseData;

    }
}
