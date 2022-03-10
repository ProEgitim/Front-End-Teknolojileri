import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo, underLine } from '../redux/action/addTodo.action'

const Todo = (props) => {
  let waitingsome = "";
  const underLine = ()=>{
  
    if(props.selected){
      waitingsome = "line"
    }
    if( props.nonselected){
      waitingsome = ""
    }
    
  }
  return (
      <div style={{color:"#fff",display:"flex", justifyContent:"space-between"}} >
    <div className={waitingsome} onClick={()=> underLine(props.idx)}>{props.todo}</div>
    <div onClick={()=> props.deleteTodo(props.idx)} >X</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
    deleteTodo: key=> dispatch(deleteTodo(key)),
    underLine : key => dispatch(underLine(key))
})

export default connect(null,mapDispatchToProps)(Todo)