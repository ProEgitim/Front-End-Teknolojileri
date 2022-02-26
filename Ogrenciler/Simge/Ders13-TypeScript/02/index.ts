function selam (isim:string){
    return "Merhaba" + isim
}

let mesaj = selam('simge')
console.log(mesaj)


let sayı:number = 5
sayı = 10
sayı = 10.4

let sehir : string
sehir = 'İstanbul'

let cevap : boolean
cevap = true
cevap = false

let sayilar : number[] = [1,2,3]
let sayilar2 : Array<number> = [1,2,3,4]

let dizi : [number,string] = [2,'Simge']

enum Renk {Kirmizi=1,Siyah=2,Beyaz=3}
let renk : Renk = Renk.Kirmizi

let deger : any = 5 //herhangi bir tipte veri verebilirim.

let deger2 : void = undefined

function selamVer():void{
    console.log('merhaba')  //return etmeyecegimiz functionlar için kullanılır
}

function Topla(x:number,y:number):number{
    return x+y
}
console.log(Topla(3,4))
//console.log(topla('deneme',4)) //typescript uyurı verir ama uygulama çalışır. deneme4 yazar console'da

function topla(x:number,y:number=2):number{
    if(y){
        return x+y
    }
    return x
}
console.log(topla(5))

function davetEt(ilkDavetli:string,...digerleri:string[]):string{
    return ilkDavetli + " " + digerleri.join("")
    }

    console.log(davetEt("sercan","osman","bugra")
    )

    //classlar

    class Ev{
        private _odaSayisi:number //sadece bu class da kullanılır
        public _pencereSayisi:number //her yerden ulasılır. default gelir 
        protected _kat:Number //miras alan classlardan ulasılır
        Constructor(odaSayisi:number,pencereSayisi:number,kat:number){
            this._odaSayisi = odaSayisi
            this._pencereSayisi =pencereSayisi
            this._kat = kat
        }
        yemekYe(){
            console.log(this._kat + "katlı evde yemek yendi")
        }
    }

    let ev = new Ev(3,4,5)
    ev.yemekYe()

    //inheritance

    class Daire extends Ev{
        uyu(){
            console.log(this._kat + "katlı evde yemek yendi" + this._pencereSayisi)
        }
    }

    //abstract

    // abstract class KrediBase{
    //     constructor(birsey:string){

    //     }
    //     kaydet():void{
    //         console.log
    //     }
    // }

    // class TuketiciKredisi extends KrediBase
    // {
    //     constructor(parameters){
    //         super(parameters)
    //     }
    // }

    // interface Product{
       
    //     id:number
    //     name:string
    // }

    let sehirler :string[] = ["ankara", "istanbul", "giresun"]

    for (let i in sehirler){
        console.log(sehirler[i])
    }
    for (let i of sehirler){
        console.log(i)
    }

    //Generic veri tipini parametrik olarak dışardan girebildik

    function deneme<T>(x:T):T {}