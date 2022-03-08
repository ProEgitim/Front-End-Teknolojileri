import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/action/addTodo.action'
import TodosList from './TodosList'

const Todobody = (props) => {
  const [todo, setTodo] = useState([]); 
  const handleSubmit = (e) =>{
  e.preventDefault();
  props.addTodo(todo);
  e.target.reset(); 
};
const handleChange = e =>{
  setTodo(e.target.value);
  
};
  return (
   
        <div>
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}  />
        <button type='submit' >Add Todo</button>
        </form>
         <TodosList/>
         </div>
 
  )
}


const mapDispatchToProps = (dispatch) =>({
addTodo : todo => dispatch(addTodo(todo))
})

export default connect(null, mapDispatchToProps)(Todobody)