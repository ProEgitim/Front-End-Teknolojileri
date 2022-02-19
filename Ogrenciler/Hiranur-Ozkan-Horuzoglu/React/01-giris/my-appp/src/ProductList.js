import {useEffect, useState} from 'react';
import BlogList from './BlogList';

const ProductList  = () => {
    const title = "ProductList Component"
    let okunmaSayisi = 500
    const durum = true // boolean degerlerı vıew da yazdıramıyoruz
    const blog2 = {title:"Başlık", content:"Deneme yazısı"}
    const link = "https://www.google.com/"
    const styleObject = {
      color: 'white',
      backgroundColor: '#ff793f',
      border: '1px solid #ff793f',
      borderRadius: '8px',
      padding: '10px',
      margin: '15px'
    }
    const handleClick = (isim , e) => { 
      console.log('Merhaba' + isim)
      console.log(e.target)
    }
    //let sayac = 0
    let [sayac, setSayac] = useState(0);
    const handleCounter = () =>{
      sayac++;
      setSayac(sayac)
      console.log(sayac)
    }
    const [blog,setBlog] = useState([
      {
        title: "Blog Baslık 1",
        content: "Blog Content Deneme 1",
        author: "Hiranur",
        id: 1
      },
      {
        title: "Blog Baslık 2",
        content: "Blog Content Deneme 2",
        author: "Görkem",
        id: 2
      },
      {
        title: "Blog Baslık 3",
        content: "Blog Content Deneme 3",
        author: "Zeynep",
        id: 3
      },
      {
        title: "Blog Baslık 4",
        content: "Blog Content Deneme 4",
        author: "Hiranur",
        id: 4
      }
    ])
    const handleConsole = (id) =>{ //silme işlemi
      const newBlogs = blog.filter(blog => blog.id !== id);
      setBlog(newBlogs)
      //console.log(id)
    }
    useEffect(() =>{ //verıde degısıklık oldugunda calısıyor
      console.log("useEffect Çalıştı");
      console.log(blog);
    },[blog])//baslangıcta istiyorsak state için bos array verıyoruz
    return (
      <div> 
        <h1>{title}</h1>
        <p>{okunmaSayisi}</p>
        <p>{durum}</p> {/*   boolean degerlerı vıew da yazdıramıyoruz */}
        <h3>{blog2.title}</h3>
        <p>{blog2.content}</p>
        <a href= {link} target="blank" style={styleObject}>Google</a> <br></br>
        <button style={styleObject} onClick={(e)=>handleClick(' React' , e)}>Tıkla</button> <br></br>
        <p>{sayac}</p>
        <button style={styleObject} onClick={handleCounter}>Sayac</button>
        {/*<div>
           {blog.map((b)=> (
            <div key={b.id}>
              <h2> {b.title} </h2>
              <p> {b.content} </p>
              <p> Yazar: {b.yazar} </p>
            </div>
          ))} 
        </div> */}
        <BlogList blogs={blog} onConsole={handleConsole} title="Bütün Yazılar" />
        <BlogList blogs={blog.filter((blog) => blog.author === "Hiranur" )} onConsole={handleConsole} title="Hiranur'un Yazıları" />
      </div>
    );
  
}
export default ProductList;