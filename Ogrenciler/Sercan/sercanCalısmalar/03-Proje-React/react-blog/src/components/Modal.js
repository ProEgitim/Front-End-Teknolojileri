import React from 'react'

function Modal(props) {
   // const data = props.blogs;  
    let sendDatat = {
        title: "Blog" ,
         content: "BlogContent" ,
         yazar: "veli"    
     }
     async function post (url,data){
       let response = await fetch( url, {
        method:'POST',
        body: JSON.stringify(data),
        headers :{"Content-Type":"Application/json"}
      });
      let resData = await response.json();
      return resData;  
    }

    const sendData = (e)=>{
      e.stopImmediatePropagation();
      post(`http://localhost:3000/posts`,sendDatat);
    }

    function post (url,data){
      let response = await fetch( url, {
       method:'POST',
       body: JSON.stringify(data),
       headers :{"Content-Type":"Application/json"}
     });
     let resData = await response.json();
     return resData;  
   }
  return (
    <button onClick={() => sendData} >tıkla</button>
  )
}

export default Modal;