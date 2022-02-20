import React, { Component } from 'react'

export default class Category extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
      </div>
    )
  }
}
