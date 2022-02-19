import React, { Component } from 'react'

export default class CategoryList extends Component {
  constructor(props){
    super(props);
    state:{}
  }
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
      </div>
    )
  }
}
