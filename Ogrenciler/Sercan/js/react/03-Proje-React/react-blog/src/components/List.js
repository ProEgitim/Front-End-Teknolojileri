import React from 'react'

const List = (props)=> {
    const blogs = props.blogs;
  return (
    <div>{
        blogs.map((blog)=>(
            <div key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
                <p>Yazar: {blog.yazar}</p>
                <button onClick={()=> props.onHandle(blog.id)}>Delete</button>
            </div>
        ))
    }</div>
  )
}

export default  List;