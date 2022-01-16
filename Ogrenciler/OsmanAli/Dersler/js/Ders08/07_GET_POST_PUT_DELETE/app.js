//GET
class Request {
    constructor(){
        this.xhr = new XMLHttpRequest();
    }
    get(url,callback){
        this.xhr.open("GET",url);
        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null, this.xhr.responseText);
            }
            else {
                callback("GET : Bir hata oluştu.",null);
            }
        }
        this.xhr.send();
    }
}
const request = new Request();
request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
    //Gelen verileri Json dosyasına aktarabilirsin.
    if(err === null){
        console.log(response);
    }
    else {
        console.log(err);
    }
});

//POST
post(url,data,callback)
{
    this.xhr.open("POST", url);
    this.xhr.setRequestHeader("Content-Type" , "application/json");
    this.xhr.onload = () =>{
        if(this.xhr.status===201){
            callback(null, this.xhr.responseText);
        }
        else {
            callback("Post: Bir hata oluştu.",null);
        }
    }
    this.xhr.send(JSON.stringify(data));
}
 //Verileri Json dosyasından gönderebilirsin.
request.post("https://jsonplaceholder.typicode.com/albums",{userId:144,title:"Zeki Müren"},function(err,album){
    if (err === null) {
        console.log(album);
    }
    else {
        console.log(err);
    }
});

//PUT
put(url, data, callback)
{
    this.xhr.open("PUT", url);
    this.xhr.setRequestHeader("Content-Type", "application/json");
    this.xhr.onload = () => {
        if (this.xhr.status === 200) {
            callback(null, this.xhr.responseText);
        }
        else {
            callback("Put: Bir hata oluştu.", null);
        }
    }
    this.xhr.send(JSON.stringify(data));
}
//Verileri Json dosyasından gönderebilirsin.
request.put("https://jsonplaceholder.typicode.com/albums/10", { userId: 153, title: "Tarkan" }, function (err, album) {
    if (err === null) {
        console.log(album);
    }
    else {
        console.log(err);
    }
});



//DELETE
delete(url, callback)
{
    this.xhr.open("DELETE", url);
    this.xhr.onload = () => {
        if (this.xhr.status === 200) {
            callback(null, this.xhr.responseText);
        }
        else {
            callback("Delete: Bir hata oluştu.", null);
        }
    }
    this.xhr.send();
}
//Verileri Json dosyasından gönderebilirsin.
request.delete("https://jsonplaceholder.typicode.com/albums/12", function (err, album) {
    if (err === null) {
        console.log(album);
    }
    else {
        console.log(err);
    }
});
