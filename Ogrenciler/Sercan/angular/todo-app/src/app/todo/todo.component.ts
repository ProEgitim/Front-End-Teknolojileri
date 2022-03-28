import { Component } from '@angular/core';
import { Models } from 'src/models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {
  constructor() { }

  displayAll : boolean = false;

  addItem(value:string){
    if(value != "" ){
    this.model.items.push( {  description :`${value}`, action: false })
    }
    else{ 
      alert("Please type a todo");
    }
  }



  model = new Models();
 
  getName(){
    return this.model.name
  }

  getItems(){
    if(this.displayAll){
   return this.model.items;
    }
   return this.model.items.filter(item => item.action == false);
  }

  displayCount(){
    return this.model.items.filter(item => item.action) 
  }

}
