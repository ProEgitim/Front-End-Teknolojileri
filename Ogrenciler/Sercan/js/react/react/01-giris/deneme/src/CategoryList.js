import React, { Component } from 'react'

export default class CategoryList extends Component {
  constructor(props){
    super(props);
    state:{}
  }
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
      </div>
    )
  }
}
