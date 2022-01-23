function getTextFile() {
    fetch("exmp.txt")
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(err => console.log(err));

}
getTextFile();
///////////////////////////////////
function getJsonFile() {
    fetch("exmp.json")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

}
getJsonFile();

/////////////////////////////////////

class Request {
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }


    post(url, data) {
        // return new Promise((resolve, reject) => {
        // fetch(url, {
        //         method: "POST",
        //         body: JSON.stringify(data),
        //         headers: {
        //             "Content-type": "application:json;"
        //         }
        //     })
        //     .then(response => response.json())
        //     .then(data => resolve(data))
        //     .catch(err => reject(err));


        return new Promise((resolve.reject)=>{
            fetch(url,{
                method:"POST",
                body: JSON.stringify(data),
                headers: {"Content-type":"application:json;"}

            })

        })
       
    })
    }
    put(url, data) {
        return new Promise((resolve, reject) => {
        fetch(url, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application:json;"
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }
}
const request = new Request();
// request.get("http://api.exchangeratesapi.io/v1/latest?access_key=a48afb973259b17c029cee604aa88987")
// .then(response => console.log(response))
// .catch(err => console.log(err))

request.post("https://jsonplaceholder.typicode.com/albums", {
        userId: 144,
        title: "Zeki Müren"
    })
    .then(response => console.log(response))
    .catch(err => console.log(err));