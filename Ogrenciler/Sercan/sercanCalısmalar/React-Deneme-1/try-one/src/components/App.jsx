import React, { Component } from 'react'
import Element from './Element'

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'Sercan'
    }
  }
  change(){
    this.setState({name:"Sercan Masar"})
  }
  render() {
    const $a = 5;
    const $b = 7;
    return (
      <div>
      <Element  header= "Selam">Nasılsın içerik burada {this.state.name}</Element>
      <button onClick={this.change.bind(this)}>Change</button>
      </div>
    )
  }
}
