import { useEffect, useState } from "react";
import BlogList from "./BlogList";
const ProductList = () => {
  const title = "Domainler";
  let okunmaSayisi = 500;
  const blog = { title: "Başlık", content: "Deneme Yazısı" };
  const link = "https://www.google.com.tr";
  const styleObject = {
    color: "white",
    backgroundColor: "orange",
    border: "1px solid white",
    borderRadius: "8px",
    padding: "7px",
    fontFamily: "Roboto"
  }
  const handleClick = (isim, e) => {
    console.log('Merhaba' + isim)
    console.log(e.target)
  }
  let [sayac, setSayac] = useState(0);
  const handleCounter = () => {
    sayac++;
    setSayac(sayac);
    console.log(sayac);
  }
  const handleConsole=(id)=>{
    const newBlogs = blog.filter(blog=>blog.id!==id);
    setBlog(newBlogs);
  }
  useEffect(()=>{
    //State üzerinde herhangi bir değişiklik olduğunda otomatik olarak çalışır. 
    console.log("UseEffect Çalıştı");
    console.log(blog);
  })
  const [Blog, setBlog] = useState([
    {
      title: "Blog Başlık 1",
      content: "Blog Content Deneme 1",
      yazar: "Osman Ali",
      id: 1
    },
    {
      title: "Blog Başlık 2",
      content: "Blog Content Deneme 2",
      yazar: "Sercan",
      id: 2
    },
    {
      title: "Blog Başlık 3",
      content: "Blog Content Deneme 3",
      yazar: "Zeynep",
      id: 3
    },
    {
      title: "Blog Başlık 4",
      content: "Blog Content Deneme 4",
      yazar: "Hira Nur",
      id: 4
    }
  ])
  return (
    <div>
      <h4>{title}</h4>
      <p>{okunmaSayisi}</p>
      <h5>{blog.title}</h5>
      <p>{blog.content}</p>
      <a href={link} target="blank" style={styleObject}>Google</a>
      <button onClick={handleClick} style={styleObject}>Selam Ver</button>
      <button onClick={handleCounter} style={styleObject}>Sayaç</button>
      <p>{sayac}</p>
      <BlogList blogs={Blog} title="Bütün Yazılar" />
      <BlogList blogs={blog.filter((blog)=>blog.yazar==="Zeynep")} handleConsole={handleConsole} title="Zeynebin Yazıları" />
    </div>
  );
}
export default ProductList;
