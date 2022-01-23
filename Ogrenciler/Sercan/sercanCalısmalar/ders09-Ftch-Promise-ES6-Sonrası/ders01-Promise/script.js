function addTwo(number){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            if(typeof number === "number"){
                resolve(number+2)
            }
            else{
                reject(new Error("Lütfen Bir sayı girin"));
            }
        },3000)
    })
}
addTwo(10)
.then(response=>{
console.log(response);
return response+2
}).then(res2=>console.log(res2))
.catch(err=>console.log(err));