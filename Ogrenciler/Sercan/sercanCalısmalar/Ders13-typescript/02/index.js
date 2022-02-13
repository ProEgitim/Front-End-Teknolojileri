// function selam(isim:string){
//     return 'merhaba' +isim;
// }
// let mesaj:string = selam('sercan masar');
// console.log(mesaj);
// let sayi:number = 5
// sayi = 10
// sayi = 10.4
// let sehir:string 
// sehir = 'istanbul'
// let cevap :boolean
// cevap = true
// cevap = false
// let sayilar : number[]
// sayilar=[1,2,3,4]
// let sayilar2 : Array<number> = [1,2,3,4]
// let dizi : [number,string] = [2, 'varol']
// enum Renk {Kirmizi= 1, Siyah=2,Beyaz = 3}
// let renk : Renk = Renk.Kirmizi
// let deger : any = 5
// function selamVer2(): void {
//     return console.log('console')
// }
// selamVer2()
/// Fonsiyonlar
// function topla (x:number,y:number):number{
//     return x+y
// }
// console.log(topla(3,4))
// console.log(topla('deneme',4))//// typescript uyarır ama uygulama çalışır. 'deneme' yerine number olmalıydı
// function topla (x:number,y?:number):number{
//     if(y){
//         return x+y
//     }
//        return x
//      }
//      console.log(topla(5,2))
// function davetEt(ilkDavetli:string,...others:string[]):string{
//     return ilkDavetli + " " + others.join(" ")
// }
// console.log(davetEt("sercan","osman","Buğra", "hiranur"))
// class Ev{
//     private _odaSayısı:number
//    public  _pencereSayısı:number
//     _kat:number
//     constructor(odaSayısı:number,pencereSayısı:number,kat:number){
//         this._odaSayısı = odaSayısı
//         this._pencereSayısı = pencereSayısı
//         this._kat= kat
//     }
//     get odaSayısı():number{
//         return this._odaSayısı
//     }
//     set odaSayısı(sayı:number){
//         this._odaSayısı = sayı
//     }
//     yemekYe(){
//         console.log(this._kat + " katlı evde yemek yendi")
//     }
// }
// let home = new Ev(3,4,5)
// home.yemekYe();
// home.odaSayısı= 5;
// console.log(home.odaSayısı)
// class Daire extends Ev{
//    uyu(){
//        console.log(this._kat + ' uyundu'  )
//    }
// }
// let daire = new Daire(3,4,5);
// daire.yemekYe();
// abstract class KrediBase{
//     constructor(some:string){
//     }
//     kaydet():void {
//         console.log('kayıt edildi')
//     }
// }
// class TuketiciKredisi extends KrediBase{
//     constructor(parameters){
//      super(parameters)
//     }
// }
// interface Product {
//     id:number
//     name:string
// }
// class Deneme implements Product{
// }
///// Generic ////
function deneme(x) {
    return x;
}
var sayı = deneme(4);
var sehir = deneme('istanbul');
console.log(sayı + " " + sehir);
