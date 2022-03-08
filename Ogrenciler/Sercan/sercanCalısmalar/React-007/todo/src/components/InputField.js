import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../redux/action/addTodo.action';


const InputField = (props) => {
    const [todo, setTodo] = useState([]);
    const handleChange = (e) =>{
        setTodo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodo(todo);
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Todo' onChange={handleChange} />      
    </form>
  )
}

const mapDispatchToProps = (dispatch) => ({
    addTodo : todo => dispatch(addTodo(todo)),
}) 

export default connect(null, mapDispatchToProps)(InputField)