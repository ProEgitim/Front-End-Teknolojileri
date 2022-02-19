import React from 'react'

const BlogList =(props) => {
    const blogs = props.blogs;
  return (
    <div>
        <h1>{props.title}</h1>
        {blogs.map((blog)=> (
            <div key={blog.id}>
              <h2> {blog.title} </h2>
              <p> {blog.content} </p>
              <p> Yazar: {blog.yazar} </p>
              <button onClick={()=> props.onConsole(blog.id)}>Sil</button>
              <hr />
            </div>
          ))}
    </div>
  )
}

export default BlogList;
