import {useState, useEffect} from 'react'
import Bloglist from './Bloglist'
const Productlist = () => {
 
    let title = "Product List Component"
    let readCount = 500
    const blog1 = {title:"Başlık", content:"deneme yazısı"}
    const link = "https://www.google.com/"
    const styleObj = {
      color:"white",
      backgroundColor:"#ff793f",
      borderRadius:'8px',
      padding:'10px'
    }
    const handleClick = (e)=>{
      console.log('merhaba' + e)
    }
    let [sayac , setSayac] = useState(0)
  
    const handleCounter = () => {
      sayac ++;
      setSayac(sayac)
      console.log(sayac)
    }
    const [blog, setBlog] = useState()
    const handleConsole = (id)=>{
      const newBlogs = blog.filter(b=> b.id !== id);
      setBlog(newBlogs);
    }
    useEffect(()=>{
      console.log('useEffect çalıştı')
      console.log(blog)
    })
    return (
      <div>
          <h1>{title}</h1>
          <p>{readCount}</p>
          <h3>{blog1.title}</h3>
          <p>{blog1.content}</p>
          <a href={link} target="blank" style={styleObj}>Google</a>
          <button style={styleObj} onClick={()=>handleClick('React')}>Tıkla</button>
          <button style={styleObj} onClick={handleCounter}>Sayac</button>
          <p>{sayac}</p>
          <Bloglist blogs = {blog} handleConsole= {handleConsole}/>
      </div>
    )
}
export default Productlist;
