
class Request
{
    getData(url)
    {
        return new Promise((resolved,reject) =>
        {
            fetch(url,
            {
                method:"GET"
            })
            .then(response => response.json())
            .then(data => resolved(data))
            .catch(err => reject(err))
        })
        
    }
    postData(url,data)
    {
        return new Promise((resolved,reject) =>
        {
            fetch(url,
            {
                method:"POST",
                body: JSON.stringify(data),
                headers: {"Content-Type": "application/json;"}
            })
            .then(response => response.json())
            .then(data => resolved(data))
            .catch(err => reject(err))
        })
        
    }
    putData(url,data)
    {
        return new Promise((resolved,reject) =>
        {
            fetch(url,
            {
                method:"PUT",
                body: JSON.stringify(data),
                headers: {"Content-Type": "application/json;"}
            })
            .then(response => response.json())
            .then(data => resolved(data))
            .catch(err => reject(err))
        })
        
    }
    deleteData(url,data)
    {
        return new Promise((resolved,reject) =>
        {
            fetch(url,
            {
                method:"DELETE"
            })
            .then(response => response.json())
            .then(data => resolved(data))
            .catch(err => reject(err))
        })
        
    }

}
const rq = new Request();

/*rq.getData("http://api.exchangeratesapi.io/v1/latest?access_key=a48afb973259b17c029cee604aa88987")
.then(data => console.log(data));*/

/*rq.postData("https://jsonplaceholder.typicode.com/albums", {userId:999,title:"Merhaba"})
.then(data => console.log(data))
.catch(err => console.log(err));*/

/*rq.putData("https://jsonplaceholder.typicode.com/albums", {userId:2,title:"Merhaba"})
.then(data => console.log(data))
.catch(err => console.log(err));*/