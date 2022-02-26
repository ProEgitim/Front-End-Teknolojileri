import React from 'react'
import MyBlog from './MyBlog';
import {useState,useEffect} from 'react'


const MyComponent=()=>
{
  const [blog,setBlog] = useState(null)  
  const [deletedElementId, setDeletedElementId] = useState(null)
  useEffect(()=>{
    fetch('http://localhost:3000/posts')
    .then(res=>res.json())
    .then(data=>setBlog(data))
  },[])

  useEffect(()=>{
    console.log(deletedElementId)
    fetch('http://localhost:3000/posts/'+deletedElementId,{
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      })
     
  },[blog])



  const deleteUser=(id)=>
  {
    const newBlog = blog.filter(blog=>blog.id!==id)
    setDeletedElementId(id);
    setBlog(newBlog);
  }


  return (
    <div>
      {blog && <MyBlog data={blog} delete={deleteUser}/>}     
    </div>
  )
}
export default MyComponent;