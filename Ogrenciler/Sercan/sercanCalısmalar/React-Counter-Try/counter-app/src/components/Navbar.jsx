import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" >
            Navbar <span className='badge badge-pill bg-secondary'>
            {this.props.totalCounters}</span>
            </a>    
        </nav>
    )
  }
}
