import React, { Component } from 'react'

export default class CategoryList extends Component {
  constructor(props)
  {
    super(props)
  }
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
      </div>
    )
  }
}
