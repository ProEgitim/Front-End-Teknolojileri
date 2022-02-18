import React from 'react'
export default function Header({inputText}) {
   
    const h1Style = {
        color :'#fff',
        display : 'flex',
        justifyContent : 'center', 
        fontSize : '4rem',
        marginBottom: '1.5rem'
    }
  return (
    <div>
        <h1 style ={h1Style}
            
        >
            Todo App {inputText}
         </h1>
    </div>
  )
}
