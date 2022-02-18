//import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Navbar from './components/Navbar'
import Counters from './components/Counters';
export default class App extends Component{
  state ={
        counters :[
        {id:1 , value:4},
        {id:2 , value:0},
        {id:3 , value:0},
        {id:4 , value:0}
        ]
    }

    handleIncrement = counter => {
      
      let counters = [...this.state.counters];
      let index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({counters})
    }

    handleDelete = (counterId)=>{
        let count = this.state.counters.filter(c=> c.id !== counterId);
        this.setState({
            counters: count
        });
    }

    handleReset = () =>{
      
     const reset = this.state.counters.map(c=> {
          c.value =0;
          return c;   
      }) 
      this.setState({
          counters : reset
      });
      
    }
  render(){
  return(
    <React.Fragment>
   <Navbar totalCounters = {this.state.counters.filter(c=> c.value > 0 ).length}/>
   <main className='container'>
     <Counters 
     counters = {this.state.counters}
     onReset= {this.handleReset} 
     onIncrement={this.handleIncrement} 
     onDelete ={this.handleDelete}/>
   </main>
   </React.Fragment>
  );
}
}


