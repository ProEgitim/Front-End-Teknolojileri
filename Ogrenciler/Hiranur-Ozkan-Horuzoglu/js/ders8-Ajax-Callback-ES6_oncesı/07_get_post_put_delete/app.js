class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }
    get(url, callback) { //veri tabanindaki bilgiyi gosterme
        this.xhr.open("GET", url);
        this.xhr.onload = () => {
            if (this.xhr.status === 200) { //basarili dondu
                callback(null, this.xhr.responseText);
            } else {
                callback("Get: Bir hata olustu. ", null);

            }
        }
        this.xhr.send();
    }
    post(url, data, callback) { // kendi verdigimiz degeri veri tabanina gosteriyor
        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-Type", "application/json");
        this.xhr.onload = () => {
            if (this.xhr.status === 201) { //yeni birsey yaratildi
                //Basarili
                callback(null, this.xhr.responseText);
            } else {
                callback("Post: Bir hata olustu. ", null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    put(url, data, callback) { //ekleme- degistirme
        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("Content-Type", "application/json");
        this.xhr.onload = () => {
            if (this.xhr.status === 201) {
                //Basarili
                callback(null, this.xhr.responseText);
            } else {
                callback("Put: Bir hata olustu. ", null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    delete(url, callback) {  // silme
        this.xhr.open("DELETE", url);
        this.xhr.setRequestHeader("Content-Type", "application/json");
        this.xhr.onload = () => {
            if (this.xhr.status === 201) {
                //Basarili
                callback(null, "Veri silindi");
            } else {
                callback("Delete: Bir hata olustu. ", null);
            }
        }
        this.xhr.send();
    }
}


const request = new Request();
// request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//     if(err === null){
//         //basarili
//         console.log(response);
//     }
//     else{
//         //hata
//         console.log(err);
//     }
// });


request.post("https://jsonplaceholder.typicode.com/albums", {
    userId: 144,
    title: "Zeki Muren"
}, function (err, album) {
    if (err === null) {
        //basarili
        console.log(album);
    } else {
        //hata
        console.log(err);
    }
});

// request.put("https://jsonplaceholder.typicode.com/albums", {
//     userId: 149,
//     title: "Yildiz Tilbe"
// }, function (err, album) {
//     if (err === null) {
//         //basarili
//         console.log(album);
//     } else {
//         //hata
//         console.log(err);
//     }
// });

// request.delete("https://jsonplaceholder.typicode.com/albums",function(err, album) {
//     if (err === null) {
//         //basarili
//         console.log(album);
//     } else {
//         //hata
//         console.log(err);
//     }
// });