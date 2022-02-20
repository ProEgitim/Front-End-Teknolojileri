import React from 'react'
import List from './List'
import { useState , useEffect} from 'react'

export default function Bloglist (){

 const [blogs, setBlogs] = useState(null)

  const onHandle = (clıckId) => {
    const newBlogs = blogs.filter(b=> b.id !== clıckId)
    setBlogs(newBlogs);
  }
  useEffect(()=>{
    fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(data => setBlogs(data))
  })
  
  return (
    <div>
      <List onHandle={onHandle} blogs = {blogs}></List>
    </div>
  )
}

