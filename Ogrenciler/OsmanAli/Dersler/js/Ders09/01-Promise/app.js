function addTwo(number) {
    return new Promise((resolve, reject)=>{
        setTimeout(function () {
            if(typeof number === "number"){
                resolve(number+2);
            }
            else {
                reject(new Error("Lütfen bir sayı giriniz."));
            }
            
        },3000);
    })
}
addTwo(10).then(response => {console.log(response);
   
return response + 2; }).then(res2 => console.log(res2))
// burada farklı bir kod bloğu olabilr 

.catch(err=>console.log(err));

// İç içe fonksyonların yerine bir işlemi tekrar ederek zaman ve kalabalıktan kurtulmuş oluruz. Promise ise işlemleri basitleştirebiliriz.


