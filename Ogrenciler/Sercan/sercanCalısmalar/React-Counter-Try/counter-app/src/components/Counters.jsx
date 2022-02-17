import React, { Component } from 'react'
import Counter from './Counter'
export default class Counters extends Component {
   
  render() {
    
    return (
      <div>
        <button 
        onClick={this.props.onReset} 
        className='btn btn-primary btn-sm m-2'>Reset</button>
        {this.props.counters.map(counter => 
        <Counter 
        key={counter.id} 
        onIncrement = {this.props.onIncrement} 
        onDelete={this.props.onDelete}   
        counter = {counter} 
        id = {counter.id}  
        value = {counter.value}

         /> )}
      </div>
    )
  }
}
