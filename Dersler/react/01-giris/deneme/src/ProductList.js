import {useState,useEffect} from 'react'
import BlogList from './BlogList'
const ProductList = () => {
    const title = "ProductList Component"
    let okunmaSayisi = 500
    const durum = true // boolen değerleri view da yazdıramıyoruz.
    const blog2 = {title:"Başlık", content:"Deneme Yazısı"}
    const link = "https://www.google.com/"
    const styleObject = {
      color:'white',
      backgroundColor:'#ff793f',
      border:'1px solid #ff793f',
      borderRadius:'8px',
      padding:'10px'
    }
    const handleClick=(isim,e)=>{
      console.log('Merhaba ' + isim)
      console.log(e.target)
    }
    let [sayac,setSayac] = useState(0);
    const handleCounter=()=>{
      sayac++;
      setSayac(sayac)
      console.log(sayac);
    }
    const [blog,setBlog] = useState(null)
    const handleConsole=(id)=>{
      const newBlogs = blog.filter(b=>b.id!==id);
      setBlog(newBlogs);
    }
    useEffect(()=>{
      fetch('http://localhost:3000/posts')
      .then(res=>res.json())
      .then(data=>setBlog(data))
    },[blog])
    return (
      <div>
        <h1>{title}</h1>
        <p>{okunmaSayisi}</p>
        <p>{durum}</p> {/* boolen değerleri view da yazdıramıyoruz. */}
        <h3>{blog2.title}</h3>
        <p>{blog2.content}</p>
        <a href={link} style={styleObject}>Google</a> <br /> <br />
        <button style={styleObject} onClick={(e)=>handleClick('React',e)}>Tıkla</button> <br /> <br />
        <p>{sayac}</p>
        <button style={styleObject} onClick={handleCounter}>Sayaç</button>
        {blog && <BlogList blogs={blog} onConsole={handleConsole} title="Bütün Yazılar" />}
        {blog && <BlogList blogs={blog.filter((blog)=>blog.yazar==="Sercan")} onConsole={handleConsole} title="Sercan'ın Yazıları" />}
      </div>
    );
}

export default ProductList;