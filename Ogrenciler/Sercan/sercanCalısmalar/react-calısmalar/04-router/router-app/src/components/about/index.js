import React from 'react'
import { Link } from 'react-router-dom'
export default function index() {
  return (
    <div>
    <Link to='/about' > About</Link>
    <h2> this is about page</h2>
    </div>
  )
}
