// function selamver2(isim:string) {
//     return "Merhaba " + isim;
// }

// let mesaj2 = selamver2('Osman Ali');

// console.log(mesaj2)

// let sayi:number = 5
// sayi = 10
// sayi = 10.4

// let sehir : string
// sehir = 'Denizli'

// //Birinci tanımlama yöntemi
// let sayilar : number[] = [1,2,3,4,5]
// //İkinic şekil
// sayilar = [1,2,3,4,5]
// //Üçüncü şekil
// let sayilar2 : Array<number>=[1,2,3,4]

// let cevap : boolean
// cevap = true
// cevap = false

// let dizi : [number, string] = [2, 'Osman']

// enum Renk {
//     Kirmizi = 1,
//     Siyah = 2,
//     Beyaz = 3
// }

// let renkK : Renk = Renk.Kirmizi
// let renkS : Renk = Renk.Siyah
// let renkB : Renk = Renk.Beyaz

// let deger : any = 5 // Herhangi bir değeri verebiliriz. String number vb...

// function eselamver2():void{
//     console.log('merhaba')
// }
// eselamver2()


// function topla(x:number,y:number):number{
//     return x+y
// }
// console.log(topla(3,4))


// function topla(x:number,y?:number):number{
//     if(y){
//         return x+y
//     }
//     return x
// }
// console.log(topla(5,10))

// function davetEt(ilkDavetli:string,...digerleri:string[]):string{
//   return ilkDavetli + " " + digerleri.join(" ")
// }

// console.log(davetEt("Sercan", "Osman", "Hiranur", "Buğra"))

// Classlar

// class Ev{
//   private _odaSayisi:number
//   public _pencereSayisi:number // default olarak pblic kabul edilir
//   protected _kat:number
//   constructor(
//       odaSayisi:number,
//       pencereSayisi:number,
//       kat:number)
//     {
//     this._odaSayisi = odaSayisi
//     this._pencereSayisi = pencereSayisi
//     this._kat = kat
//     }
//     get odasayisi():number{
//         return this._odaSayisi
//     }

//     set odasayisi(sayi:number){
//         this._odaSayisi=sayi
//     }
//   yemekYe(){
//     console.log(this._kat + " katlı evde yemek yendi")
//   }
// }

// let ev = new Ev(3,4,5)
// ev.yemekYe()
// ev.odasayisi = 5
// console.log(ev.odasayisi)
// // inheritance
// class Daire extends Ev{
//   uyu(){
//     console.log(this._kat  + " katlı evde yemek yendi" + this._pencereSayisi)
//   }
// }

// //Abstrack sınıflar
// abstract class KrediBase {
//     constructor(birsey:string){

//     }
//     kaydet():void{
//         console.log("Kayıt Edildi.")
//     }
// }
// class TuketiciKredisi extends KrediBase{
//     constructor(parameters:any){
//         super(parameters)
//     }
// }

// //İnterface 
// interface Product {
//     id:number
//     name:string
// }

// class Deneme implements Product {

// }
// let sehirler : string[] = ["Ankara","İstanbul","İzmir","Adana","Konya","Denizli"]
// for (let i in sehirler){
// console.log(i) // İndekslerini alır kaç adet varsa.
// }
// for (let i of sehirler){
// console.log(i) // İsimlerini alır hangi şehirler varsa.
// }

//Generic => Veri tipini paramaetrik olarak dışarından girebildik.
// function deneme(x:number):number {
//     return x
// }
// let sayi = deneme(4)

// function deneme2<T>(x:T):T {
//     return x
// }
// let sayi2 = deneme2<number>(4)
// let sehir = deneme2<string>("Denizli")
// console.log(sayi)
// console.log(sehir)

