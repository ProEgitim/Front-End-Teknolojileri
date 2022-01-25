// Callback Fonksiyonlar
const langs = ["Python", "C++", "Javascript"];
function addLang(lang,callback){
  setTimeout(function(){
    langs.push(lang);
    console.log("Yeni dil eklendi");
    callback();
  },2000);
}
function getAllLangs(){
  setTimeout(function(){
    langs.forEach(function(lang){
      console.log(lang);
    });
  },1000);
}
addLang("Ruby",getAllLangs);