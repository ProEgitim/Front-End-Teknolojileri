import React from 'react'
import { Link , useParams } from 'react-router-dom'

export default function User(props) {
    const {userId} = useParams();   
    const data = props.users.filter((user)=> user.id.toString() === userId)
   console.log(data);
  return (
    <div>
    {   <div>
     User id: {userId}
     name: {data[0].name}    
        
    
    </div>}
    <br />
     <Link to='/' > Go to Home Page</Link>
     <h2> this is user page</h2>
     <p> We are happy to see you</p>
    </div>
  )
}