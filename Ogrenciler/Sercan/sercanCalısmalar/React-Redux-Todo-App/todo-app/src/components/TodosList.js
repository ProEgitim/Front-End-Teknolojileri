import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo';

const TodosList = (props) => {
    console.log(props.todos);
  return (
    <div style={{display :"flex", flexDirection:"column"}}>
        {
            props.todos.map((todo,index)=> <Todo key={index} todo={todo} idx={index} />)
        }
    </div>
  )
}

const mapStateToProps = (state) => ({
   todos: state.todos
})

export default connect(mapStateToProps)(TodosList)