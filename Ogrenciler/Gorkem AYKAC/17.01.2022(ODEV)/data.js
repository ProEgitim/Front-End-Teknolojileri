class Request
{

    static async get(url)
    {
        const res = await fetch(url,{
            method: 'GET',
            headers: {"Content-type":"application:json;"},
            headers: {"X-CMC_PRO_API_KEY": "52c18610-e24f-47f2-8725-79fb0d191bd7"}
        });
        const data = await res.json();
        return data;
    }
}