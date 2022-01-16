//Callback Fonksiyonlar

// const langs = ["Python","C++","JavaScript"];
// function  addLang(lang) {
//   setTimeout(function () {
//       langs.push(lang);
//       console.log("Yeni dil eklendi.");
//   },2000);
// }
// function getAllLangs() {
//     setTimeout(function(lang){
//         langs.forEach(function(lang){
//             console.log(lang);
//         });
//       },1000);    
// }
// addLang("Ruby");
// getAllLangs();

const langs = ["Python", "C++", "JavaScript"];
function addLang(lang,callback) {
    setTimeout(function () {
        langs.push(lang);
        console.log("Yeni dil eklendi.");
        callback();
    }, 2000);
}
function getAllLangs() {
    setTimeout(function (lang) {
        langs.forEach(function (lang) {
            console.log(lang);
        });
    }, 1000);
}
addLang("Ruby", getAllLangs);
