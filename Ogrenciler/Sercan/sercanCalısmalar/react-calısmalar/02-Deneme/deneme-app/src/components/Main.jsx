import React from 'react'

const Main = (props)=> {
    let blogs = props.blogs;
    
  return (
      <div className='outerDiv'>
    <h2>Blogs About Javascript Libraries</h2>
    <div className='styledDiv'>
    
    {blogs.map((blog)=>(
        <div className='itemDiv' key={blog.id}>
        <h3>{blog.topic}</h3>
        <div>Issue:{blog.issue}</div>
        <div>ReadTime:{blog.readTime}</div>
        <div>Author:{blog.author}</div>
        <button className='styleDelete' onClick={()=> props.handleDelete(blog.id)}>Delete</button>
        </div>
    ))}</div>


    </div>
  )
}

export default  Main;
