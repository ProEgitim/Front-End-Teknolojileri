import { useState, useEffect } from 'react';//DOM'a state degisikligi oldugunu belirten import.
import BlogList from './BlogList'
const ProductList=()=>  {

    const title = "ProductList Component";
    const google = "https://www.google.com/webhp?hl=tr&sa=X&sqi=2&pjf=1&ved=0ahUKEwiOi5mulov2AhUxgXIEHXcDDhUQPAgI";
    const handleClick = ()=>console.log("sasdasd");
    let[sayac,setSayac] = useState(0);//State degisikligi yaraticak yapi.
    const arttir = () =>{
      sayac++;
      setSayac(sayac)
    }
    const handleButton = (id)=>{
      const newBlog = blog.filter(blog=>blog.id!==id)
      setBlog(newBlog)
    }
    const[blog,setBlog] = useState(
      [
       {
         title:'t1',
         content:'c1',
         yazar:'y1',
         id:'i1'      
       },
       {
        title:'t2',
        content:'c',
        yazar:'y2',
        id:'i2'      
      },
      {
        title:'t3',
        content:'c3',
        yazar:'y3',
        id:'i3'      
      },
      {
        title:'t4',
        content:'c4',
        yazar:'y4',
        id:'i4'      
      },
      ]
    )
    useEffect(()=>{
      console.log("Calisti")
      console.log(blog)
    }
    /*,[]Sadece baslangicta calisir*/ 
    /*,[blog]İstenilen değişken değişince calisir */
    ,[blog])
    return (
      <div>
        <h1>{title}</h1>
        <a href={google} style={{

          color:'white',
          backgroundColor:'red'
        }}>GOOGLE</a><br></br>
        <button onClick={handleClick}>TIKLA</button><br></br>
        <button onClick={arttir}>SAYAC</button><br></br>
        <p>{sayac}</p>
        <BlogList blogs={blog} title="Tum Yazılar" handleButton={handleButton}/>
      </div>
    )
  
}
export default ProductList;
