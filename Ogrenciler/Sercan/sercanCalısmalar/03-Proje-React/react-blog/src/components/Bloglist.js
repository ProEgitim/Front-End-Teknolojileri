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
    if(id!==null){
    fetch(`http://localhost:3000/posts/${id}`, {
      method:'DELETE'
    })
  }
  },[id])
  
//   let sendDatat = {
//     title: "Blog" ,
//      content: "BlogContent" ,
//      yazar: "veli"    
//  }
 async function post (url,data){
   let response = await fetch( url, {
    method:'POST',
    body: JSON.stringify(data),
    headers :{"Content-Type":"Application/json"}
  });
  let resData = await response.json();
  return resData;  
}

const sendData = (e)=>{
  
  post(`http://localhost:3000/posts`,{
    title: "Blog" ,
     content: "BlogContent" ,
     yazar: "veli"    
 });
}
 
  return (
    <div>
    { blogs &&  <List onHandle={onHandle} blogs = {blogs}></List>}
    { id &&  <List onHandle={onHandle} blogs = {blogs}></List>} 
    <button onClick={()=> sendData.stopPropogation}>Add Blog</button>
   
    </div>
  )
}

