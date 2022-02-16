import React, { Component } from 'react'
import Counter from './Counter'
export default class Counters extends Component {
   state ={
        counters :[
        {id:1 , value:4},
        {id:2 , value:0},
        {id:3 , value:0},
        {id:4 , value:0}
        ]
    }

    hadleDelete = (counterId)=>{
        const counters = this.state.counters.filter(c=> c.id !== counterId);
        this.setState({
            counters
        });
    }

    handleReset = () =>{
     const counters = this.state.counters.map(c=> {
          c.value =0;
          return c;
      });
      this.setState({
          counters
      })  
    }
  render() {
    return (
      <div>
        <button 
        onClick={this.hadleReset} 
        className='btn btn-primary btn-sm m-2'>Reset</button>
        {this.state.counters.map(counter => 
        <Counter 
        key={counter.id} 
        onDelete={this.hadleDelete}  
        value={counter.value} 
        id={counter.id} /> )}
      </div>
    )
  }
}
