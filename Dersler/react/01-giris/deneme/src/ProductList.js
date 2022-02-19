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
    const [blog,setBlog] = useState([
      {
        title:"Blog Başlık 1",
        content:"Blog Content Deneme 1",
        yazar:"Sercan",
        id:1
      },
      {
        title:"Blog Başlık 2",
        content:"Blog Content Deneme 2",
        yazar:"Görkem",
        id:2
      },
      {
        title:"Blog Başlık 3",
        content:"Blog Content Deneme 3",
        yazar:"Zeynep",
        id:3
      },
      {
        title:"Blog Başlık 4",
        content:"Blog Content Deneme 4",
        yazar:"Sercan",
        id:4
      }
    ])
    const handleConsole=(id)=>{
      const newBlogs = blog.filter(b=>b.id!==id);
      setBlog(newBlogs);
    }
    useEffect(()=>{
      console.log("useEffect Çalıştı");
      console.log(blog);
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
        <BlogList blogs={blog} onConsole={handleConsole} title="Bütün Yazılar" />
        <BlogList blogs={blog.filter((blog)=>blog.yazar==="Sercan")} onConsole={handleConsole} title="Sercan'ın Yazıları" />
      </div>
    );
}

export default ProductList;