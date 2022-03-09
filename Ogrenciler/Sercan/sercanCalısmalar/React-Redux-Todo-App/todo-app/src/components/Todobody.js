import React from 'react'
import { connect } from 'react-redux'
import { addText, addTodo } from '../redux/action/addTodo.action'
import TodosList from './TodosList'

const Todobody = (props) => {

  const handleSubmit = (e) =>{
  e.preventDefault();
  props.addTodo(props.text); 
  e.target.reset(); 
};
const handleChange = e =>{
  props.addText(e.target.value); 
};
  return (
   
        <div>
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} required />
        <button type='submit' >Add Todo</button>
        </form>
         <TodosList/>
         </div>
 
  )
}


const mapDispatchToProps = (dispatch) =>({
addTodo : todo => dispatch(addTodo(todo)),
addText : value => dispatch(addText(value)),
})

const mapStateToProps = state => ({
  text: state.text,
 
})


export default connect(mapStateToProps, mapDispatchToProps)(Todobody)