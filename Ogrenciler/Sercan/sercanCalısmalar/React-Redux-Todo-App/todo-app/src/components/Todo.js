import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo} from '../redux/action/addTodo.action'

const Todo = (props) => {
  return (
    <div style={{display :"flex", flexDirection:"row", justifyContent:"space-between"}}>
       <div>{props.todo}</div> 
       <div onClick={() => props.deleteTodo(props.idx)}>X</div> 
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
    deleteTodo: key=> dispatch(deleteTodo(key)),
    
})

export default connect(null, mapDispatchToProps)(Todo)