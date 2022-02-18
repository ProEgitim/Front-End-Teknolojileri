
import React from 'react'
import Header from './Header'
import Form from './Form'
import  {useState} from 'react'
export default function App() {
  const [inputText, setInputText] = useState('')
  return (
    <div>
    <Header inputText= {inputText}/>
    <Form  setInputText= {setInputText}/>
    </div>
  )
}

