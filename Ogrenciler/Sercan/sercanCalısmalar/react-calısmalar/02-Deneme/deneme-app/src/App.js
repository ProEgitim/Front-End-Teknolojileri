import Headers from "./components/Headers";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Modal from './components/Modal';
import { useState, useEffect } from "react";
 
function App() {
  const [blogs, setBlogs] = useState ([]);
  const [deletedId, setId] = useState(null);

  useEffect(()=>{
  fetch('http://localhost:3000/posts')
  .then(response => response.json())
  .then(resdata => 
    (
     setBlogs(resdata)
   
    )
    );
},[])
  const onDelete = (itemId) =>{
   const deletedItem=  blogs.filter( blog=> blog.id !== itemId)
    setBlogs(deletedItem);
    setId(itemId);
  }

  useEffect(()=>{
    if(deletedId !== null){
    fetch(`http://localhost:3000/posts/${deletedId}`, {
      method: 'DELETE'
    })
  }
  },[deletedId])

  
  return (
    <div className="App">

          <Headers id="headers"/>
          <div className="cont">
          <Main blogs={blogs} handleDelete = {onDelete} id="main">
          </Main>
          <div id="Modal" className="modalBackGround">
          <Modal blogs={blogs}></Modal> 
          </div>
          <Aside id="aside"/>
          </div>

    </div>
  );
}
export default App;






