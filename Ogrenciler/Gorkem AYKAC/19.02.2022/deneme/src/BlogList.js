import React from 'react'

const BlogList =(props)=>{
    const blogs = props.blogs;
    const title = props.title;
  return (
    <div>
        <h1>{title}</h1>
          {
            blogs.map((b)=>
            (
              <div key={b.id}>
                <h2>{b.title}</h2>
                <p>{b.yazar}</p>
                <button onClick={()=>props.handleButton(b.id)}>SIL</button>
                <hr />
              </div>
            )
              
            )
          }
        </div>
  )
}
export default BlogList
