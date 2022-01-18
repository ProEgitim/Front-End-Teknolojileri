//// call back ///

const langs = ["phyton","c++","java"];

function addLang(lang,callback){
   setTimeout(() => {
    langs.push(lang);
    console.log("Yeni dil eklendi"); 
    callback();
   }, 2000);
 
}


function getAllLangs(){
    setTimeout(() => {
     langs.forEach(lang => {
        console.log(langs); 
     });
     console.log("Yeni dil eklendi"); 
    }, 1000);
  
 }


 addLang("Ruby",getAllLangs());
 