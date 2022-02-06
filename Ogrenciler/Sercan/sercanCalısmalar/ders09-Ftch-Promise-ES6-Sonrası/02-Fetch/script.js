// function getTextFile() {
//     fetch("exmp.txt")
//         .then(response => response.text())
//         .then(data => console.log(data))
//         .catch(err => console.log(err));

// }
// getTextFile();
// ///////////////////////////////////
// function getJsonFile() {
//     fetch("exmp.json")
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err));

// }
// getJsonFile();

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
        return new Promise((resolve, reject) => {
        fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
               
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
let json = {
    name:"simge",
    salary:"400",
    age: "30"
    }
request.post("exmp.json",json );


