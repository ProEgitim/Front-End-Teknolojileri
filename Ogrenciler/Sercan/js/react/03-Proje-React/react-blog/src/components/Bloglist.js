import React from 'react'
import List from './List'
import {useState , useEffect} from 'react'

export default function Bloglist (){
  const [blogs, setBlogs] = useState(null)
  const [id, setId] = useState(null)
  const onHandle = (clıckId) => {
    const newBlogs = blogs.filter(b=> b.id !== clıckId)
    setId(clıckId);
    setBlogs(newBlogs);
  }
  useEffect(()=>{
    fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      return setBlogs(data)
    })
    .catch(err=>err)
  },[])
  useEffect(()=>{
    fetch(`http://localhost:3000/posts/${id}`, {
      method:'DELETE'
    })
  })
  
  return (
    <div>
    { blogs &&  <List onHandle={onHandle} blogs = {blogs}></List>}
    { id &&  <List onHandle={onHandle} blogs = {blogs}></List>} 
    </div>
  )
}

