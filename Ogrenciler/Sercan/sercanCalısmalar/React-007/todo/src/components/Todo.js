import React, { useState } from 'react'
import { connect } from 'react-redux'
import { deleteTodo, underLine } from '../redux/action/addTodo.action'

const Todo = (props) => {
  const [completed , setCompleted] = useState(false)
 
  const underLine = ()=>{
    if (completed) {
      setCompleted(false)
      
    } else{
      setCompleted(true)
      return(<div >{alert("Todo is Completed")}</div>)
    }
    
    
  }
  return (
      <div style={{color:"#fff",display:"flex", justifyContent:"space-between"}} >
    <div className={completed ? "line" : ""} onClick={()=> underLine(props.idx)}>{props.todo}</div>
    <div onClick={()=> props.deleteTodo(props.idx)} >X</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
    deleteTodo: key=> dispatch(deleteTodo(key)),
    underLine : key => dispatch(underLine(key))
})



export default connect(null,mapDispatchToProps)(Todo)