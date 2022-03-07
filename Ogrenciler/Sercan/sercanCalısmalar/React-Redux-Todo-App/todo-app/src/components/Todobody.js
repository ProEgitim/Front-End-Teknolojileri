import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/action/addTodo.action'


const Todobody = (props) => {
  const [todo, setTodo] = useState([]); 
  const handleSubmit = (e) =>{
  e.preventDefault();
  props.addTodo(todo)
};
const handleChange = e =>{
  setTodo(e.target.value)
};
  return (
    <div>
        <div>
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}  />
        <button >Add Todo</button>
        </form>
        </div>
        <div>
          Todo list
        </div>
    </div>
  )
}


const mapDispatchToProps = (dispatch) =>({
addTodo : todo => dispatch(addTodo(todo))
})

export default connect(null, mapDispatchToProps)(Todobody)