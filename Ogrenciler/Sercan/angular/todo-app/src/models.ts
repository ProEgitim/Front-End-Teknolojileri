import { TodoItem } from "./app/todoitem";


export class Models{
    name :string;
    items :TodoItem[];

    constructor(){
        this.name = "Sercan";
        this.items = [
    {  description :"kahvaltı", action: true },
    {  description :"spor", action: true },
    {  description :"alışveriş", action: false },
        ]
    }
}