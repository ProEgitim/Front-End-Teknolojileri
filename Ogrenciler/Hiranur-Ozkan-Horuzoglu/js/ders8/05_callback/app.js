//calback fonksiyonlar
const langs = ["Python","C++","Jacascript"];
function addLangs(Lang,callback) {
    setTimeout(function () {
        langs.push(Lang);
        console.log("Yeni dil eklendi. ");
        callback();
    },2000); // geciktirme sureleri

}
function getAllLangs() {
    setTimeout(function (){
        langs.forEach(function(Lang) {
            console.log(Lang);
        });
    },1000);//geciktirme sureleri
}

addLangs("Ruby",getAllLangs);

