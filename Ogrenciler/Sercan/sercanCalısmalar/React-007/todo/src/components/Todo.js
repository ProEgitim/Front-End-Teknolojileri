import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo, underLine } from '../redux/action/addTodo.action'

const Todo = (props) => {
  
  const underLine = ()=>{
    if (props.completed) {
      props.completed = true;
    } else{
      props.completed = false;
    }
    
    
  }
  return (
      <div style={{color:"#fff",display:"flex", justifyContent:"space-between"}} >
    <div className={props.completed ? "line" : ""} onClick={()=> underLine(props.idx)}>{props.todo}</div>
    <div onClick={()=> props.deleteTodo(props.idx)} >X</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
    deleteTodo: key=> dispatch(deleteTodo(key)),
    underLine : key => dispatch(underLine(key))
})

const mapStateToProps = state =>({
  completed : state.completed,
})

export default connect(mapStateToProps,mapDispatchToProps)(Todo)