import React from 'react'

const Main = (props)=> {
    let blogs = props.blogs;
    const styledDiv = {
        backgroundColor: '#f3f3f3',
        display : 'flex',
        flexDirection:'row',
        width:'70%',
        margin : '5px 5px',
        alignItems:'center',
        justifyContent: 'space-between',
        

    }
    const outerDiv = {
        backgroundColor: '#f3f3f3', 
        display : 'flex',
        flexDirection:'column',
        width:'70%',
        margin : '5px 5px',
        alignItems:'center'  
    }

    const itemDiv ={
       border:' 1px solid ',
       width: '200px',
       height:'200px',
       boxSizing:'border-box',
       margin: '5px 5px',
       backgroundColor:'#f9f5f6',
       boxShadow : '6px 5px 0 0 #aaaaaa'
    }

   const styleDelete ={
        margin: '20px 20px',
        padding: '7px',
        backgroundColor:'#aaaaaa',
        color:'#fff'
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

export default  Main;
