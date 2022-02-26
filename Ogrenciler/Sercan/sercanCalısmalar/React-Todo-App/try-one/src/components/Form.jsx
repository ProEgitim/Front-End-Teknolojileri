
import React from 'react'

export default function Form({setInputText}) {
  const getValue = (e)=>{
    setInputText(e.target.value)
  }
  return (
    <div>
     <form>
        <div className="search">
            <input type="text" className="todo-input" placeholder="Add..." onKeyUp={getValue}/>
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-circle"></i>
            </button>
        </div>

        <div className="select">
            <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
    </div>
  )
}
