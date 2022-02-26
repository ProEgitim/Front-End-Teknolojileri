import React from 'react'

const Main = (props)=> {
    let blogs = props.blogs;
    const styledDiv = {
        backgroundColor: '#f3f3f3',
        display : 'inline-flex',
        flexDirection:'row',
        maxWidth:'1128px',
        margin : '5px 5px',
        alignItems:'flex-start',
        justifyContent: 'flex-start',
        boxSizing:'border-box'

    }
    const outerDiv = {
        backgroundColor: '#f3f3f3', 
        display : 'flex',
        flexDirection:'column',
        width:'1218px',
        margin : '5px 5px',
        alignItems:'flex-start',
     
    }

    const itemDiv ={
       border:' 1px solid ',
       width: '150px',
       height: '200px',
       margin: '5px 5px',
       backgroundColor:'#f9f5f6',
       boxShadow : '6px 5px 0 0 #aaaaaa',
       borderRadius: '5px'

    }

   const styleDelete ={
        margin: '20px 20px',
        padding: '7px',
        backgroundColor:'#aaaaaa',
        color:'#fff',
        borderRadius: '10px',
        position:'fixed'
    }
  return (
      <div style={outerDiv}>
    <h2>Blogs About Javascript Libraries</h2>
    <div style={styledDiv}>
    
    {blogs.map((blog)=>(
        <div style={itemDiv} key={blog.id}>
        <h3>{blog.topic}</h3>
        <div>Issue:{blog.issue}</div>
        <div>ReadTime:{blog.readTime}</div>
        <div>Author:{blog.author}</div>
        <button style={styleDelete} onClick={()=> props.handleDelete(blog.id)}>Delete</button>
        </div>
    ))}</div>
    </div>
  )
}

export default  Main
