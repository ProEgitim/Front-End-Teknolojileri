// function sayHi (name:string) {
//     return "hi "+ name
// }
// let message= sayHi("zeynep")
//
// console.log(message)
//
// let numbers: number =5
// numbers =10
// numbers =10.4
//
// let city : string
// city = "Istanbul"
// city = "New-York"
//
// console.log(numbers)
// console.log(city)
//
// let answer: boolean
// answer= true
// answer= false
//
// let number1: number[] = [1,2,3,4]
// let number2: Array<number> = [1,2,3,4]
//
// let stringArray : string[] = ["1","2"]
// console.log(stringArray)
//
// enum Color{red=1,black=2,white=3}
// let color:Color=Color.red
//
// let value:any=5
// let value2:void= undefined
//
// function sayHi2() :void {
//     console.log("hi")
// }
// sayHi2()


// function calculate(x:number,y:number):number {
//     return x+y
// }
// console.log(calculate(3,4))
// console.log(calculate("test",4))


// function calculate(x:number,y?:number):number {
//     if (y){
//         return x+y
//     }
//     return x
// }
// console.log(calculate(5,10))
// console.log(calculate(5))


// function invite (first:string, ...others:string[]):string {
//     return first + " " + others.join(" ")
// }
// console.log(invite("Zeynep", "Büşra", "Simge"))
// console.log(invite("Zeynep"))

class Ev {
    numberofRoom: number
    numberofWindow: number
    floor: number

    constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
        this.numberofRoom = odaSayisi
        this.numberofWindow = pencereSayisi
        this.floor = kat
    }

    YemekYe() {
        console.log(this.floor + "katlı evde yemek yendi")
    }
}

let home = new Home (3,4,5)
home.YemekYe()

function  deneme<T> (x:T)