// function selamVer(isim:string){
//   return "Merhaba " + isim
// }
// let mesaj = selamVer('varol')
// console.log(mesaj)
// let sayi:number = 5
// sayi = 10
// sayi = 10.4
// let sehir : string
// sehir = 'İstanbul'
// let cevap : boolean
// cevap = true
// cevap = false
// let sayilar : number[] = [1,2,3,4]
// let sayilar2 : Array<number> = [1,2,3,4]
// let dizi : [number,string] = [2,'Varol']
// enum Renk {Kirmizi=1,Siyah=2,Beyaz=3}
// let renk : Renk = Renk.Kirmizi
// let deger : any = 5 //her hangi bir tipte veri verebilirim
// let deger2 : void = undefined
// function selamVer2():void{
//   console.log('merhaba')
// }
// selamVer2()
// Fonksiyonlar 
// function topla(x:number,y:number):number{
//   return x+y
// }
// console.log(topla(3,4))
// console.log(topla('deneme',4)) //typscript uyarır ama uygulama çalışır.
// function topla(x:number,y:number=2):number{
//   return x+y
// }
// console.log(topla(5))
// function topla(x:number,y?:number):number{
//   if(y){
//     return x+y
//   }
//   return x
// }
// console.log(topla(5,10))
// function davetEt(ilkDavetli:string,...digerleri:string[]):string{
//   return ilkDavetli + " " + digerleri.join(" ")
// }
// console.log(davetEt("Sercan", "Osman", "Hiranur", "Buğra"))
// Classlar
var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
        this._odaSayisi = odaSayisi;
        this._pencereSayisi = pencereSayisi;
        this._kat = kat;
    }
    Ev.prototype.yemekYe = function () {
        console.log(this._kat + " katlı evde yemek yendi");
    };
    return Ev;
}());
var ev = new Ev(3, 4, 5);
ev.yemekYe();
