// function selamVer(isim:string){
//     return "Merhaba " + isim
// }

// let mesaj = selamVer('Hiranur')

// console.log(mesaj)

// let sayi:number = 5
// sayi = 10
// sayi = 10.3

// let sehir : string
// sehir = 'Istanbul'

// let cevap : boolean
// cevap = false
// cevap = true

// let sayilar : number[] = [1,2,3,4]
// // sayilar = [1,2,3,4]
// let sayilar2 : Array<number> = [1,2,3,4]

// let dizi : [number,string] = [2,"varol"]

// enum Renk {Kirmizi=1, Siyah=2, Beyaz=3}
// let renk : Renk = Renk.Kirmizi

// let deger : any = 'deneme' // herhangi bir tipte veri verebiliriz-string -number gibi

// let deger2 : void = undefined
// function selamVer2 ():void{
//     console.log('merhaba')   
// }
// selamVer2()

//fonksiyonlar

// function topla(x:number,y:number):number{
//     return x+y
// }

// console.log(topla(3,4))
// console.log(topla('deneme',4)) //typescript uyarir ama uygulama calisir

// function topla(x:number,y:number=2):number{
//     return x+y
// }

// console.log(topla(5))

// function topla(x:number,y?:number=2):number{ // y istege bagli calistirdik
//     if(y){
//         return x+y
//     } 
// }

// console.log(topla(5,10))

// function davetEt(ilkDavetli:string,...digerleri:string[]):string{
//     return ilkDavetli + " " + digerleri.join(" ")
// }

// //console.log(davetEt('sercan'))
// console.log(davetEt('Sercan', 'Osman', 'Hiranur','Bugra')) 

//CLASSLAR

class Ev{
    private _odaSayisi:number
    public _pencereSayisi:number //default olarak public kabul edilir
    protected _kat:number
    constructor(odaSayisi:number,pencereSayisi:number,kat:number){
        this._odaSayisi = odaSayisi
        this._pencereSayisi = pencereSayisi
        this._kat = kat
    }
    get odaSayisi():number{
        return this._odaSayisi
    }
    set odaSayisi(sayi:number){
        this.odaSayisi = sayi
    }
    yemekYe(){
        console.log(this._kat + "katli evde yemek yendi")
    }
}

let ev = new Ev(3,4,5)
ev.yemekYe()
console.log(ev.odaSayisi)

// //inheritance
class Daire extends Ev{ // ev clasindan miras aldigi ozellikler
    uyu(){
        console.log(this._kat + "katli evde yemek yendi" + this._pencereSayisi)
    }
}

//-PUBLIC- klasa heryerden eriselibilir
//-PROTECTED- bu clasdan miras alan classlar disardan erisilemez
// -PRIVATE- sadece class icerinde kullanilabilir

// // -abstract

// abstract class KrediBase {
//     constructor(birsey:string) {
        
//     }
//     kaydet():void{
//         console.log("Kayit edildi")
//     }
// }
// class TuketiciKredisi extends KrediBase{
//     constructor (parameters){
//         super(parameters)
//     }
// }

// // INTERFACE

// interface Product{
//     id:number
//     name:string
// }
// class Deneme implements Product {
    
// }

// let sehirler: string[]=["Ankara", "Istanbul", "Giresun"]
// for(let i in sehirler){ //index hatirliyor
//     console.log(i)
// }
// for(let i of sehirler){ // degeri aliyor-foreach gibi
//     console.log(i)
// }

function deneme <T> (x:T):T{
    return x
}
let sayi = deneme<number>(4)
let sehir = deneme<string>("Istanbul")

console.log(sayi)
console.log(sehir)