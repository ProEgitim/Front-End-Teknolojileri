
import React from 'react'
import { Link } from 'react-router-dom'



export default function Users({users}) {
    
  return (
    <div>
    <div>
    <ul>
    {users.map((user)=>(
        <li key={user.id}>
          <Link to= {`/users/${user.id}`}>{user.name}</Link>
        </li>
    ))}
       
      
      </ul>
    </div>
    <br />
     <Link to='/' > Go to Home Page</Link>
     <h2> this is user page</h2>
     <p> We are happy to see you</p>
    </div>
  )
}

