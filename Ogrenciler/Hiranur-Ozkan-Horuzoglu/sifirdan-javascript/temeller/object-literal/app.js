let value;

const programmer = {
    name : "Hiranur Özkan Horuzoğlu",
    age : 22,
    email : "hiranurozkanhoruzoglu@gmail.com",
    langs : ["C#","Javascript"],

    adress : {
        city : "İstanbul",  //iç içe objeler yerleştirebiliyoruz
        street : "Eyüpsultan"
    },

    work : function(){
        console.log("Programcı Çalışıyor... ");
    }

}


value = programmer;
//email
value = programmer.email; //genel olarak kullanılan
value = programmer["email"];

//diller
value = programmer.langs;

//şehir
value = programmer.adress.city;
 
//iş
programmer.work();


const programmers = [
    {name : "Hiranur Özkan ",age : 22},
    {name : "Cihad Horuzoğlu", age : 30}
    
];

value = programmers[0].name;



console.log(value);