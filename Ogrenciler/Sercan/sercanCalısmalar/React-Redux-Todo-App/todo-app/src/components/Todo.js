import React from 'react'

const Todo = (props) => {
  return (
    <div style={{display :"flex", flexDirection:"row", justifyContent:"space-between"}}>
       <div>{props.todo}</div> 
       <div>X</div> 
    </div>
  )
}

export default Todo