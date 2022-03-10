import React from 'react'
import { connect } from 'react-redux';
import { addTodo, addText } from '../redux/action/addTodo.action';
import TodoList from './TodoList';

const InputField = (props) => {
   
    
    const handleChange = (e) =>{
        props.addText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodo(props.value);
        e.target.reset()
       
    }
  return (
      <div>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Todo' onChange={handleChange} /> 
        <button type="submit">Add todo</button>     
    </form>
        <TodoList/>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
    addTodo : todo => dispatch(addTodo(todo)),
    addText : value => dispatch(addText(value))
}) 

const mapStateToProps = (state) =>({
   value : state.value,
})

export default connect(mapStateToProps, mapDispatchToProps)(InputField)