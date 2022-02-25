import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

export default  function Modal ({blogs,setBlogs}){
  
    const addBlog = ()=>{
       $('#modalForm').slideToggle(1000);
       $('#Modal').toggleClass('modalBackGround')
    }

    
    
    const modalAdd = (e) =>{ 
      e.preventDefault();
      let topic = $('#Topic').val();
       let issue = $('#Issue').val();
      let readTime = $('#ReadTime').val();
      let author = $('#Author').val();
      console.log(typeof topic,issue,readTime,author)
      let data = {
        topic : topic,
        issue :issue,
        readTime : readTime,
        author : author
      }
      console.log(blogs)
      fetch("http://localhost:3000/posts" , {
        method:"POST",
        body: JSON.stringify(data),
        headers: {"Content-Type": "Application/json"}
      }).then(res =>res.json())
      .then(responseData => setBlogs(responseData));
  
  }

  useEffect(()=>{
    
  },[])
   
  return (
    <div id='modalUp'>
    <form id='modalForm' onSubmit={modalAdd}>
          <div className="items col">
            <div className="row">
              <div className=" col-3">
                <div className=" form-floating">
                 
                  <input className="form-control " type="text" id="Topic" placeholder="Topic"required/>
                  <label >Topic</label>
                 
                </div>
              </div>
              <div className=" col-3">
                <div className=" form-floating">
                 
                  <input className="form-control " type="text" id="Issue" placeholder="Issue"required/>
                  <label >Issue</label>
                 
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <div className="form-floating">
                  
                  <input className="form-control " type="text" id="ReadTime" placeholder="Read Time"required/>
                  <label >Read Time</label>
                 
                </div>
              </div>
              <div className="col-3">
                <div className=" form-floating">
                  
                  <input className="form-control" type="text" id="Author" placeholder="Author" required/>
                  <label >Author</label>
                </div>
              </div>
            </div>
            <div className="row">
            
            <div className="row">
              <div className="col-2">
                <button className="btn btn-primary" type="submit" >Send</button>
                <button className="btn btn-danger" type="reset">Reset</button>
              </div>
            </div>
          </div>
          </div>
    </form>
   
    <button id='buttonAddBlog' onClick={addBlog}>Add Blog <i className="fa-solid fa-circle-xmark"></i></button>

   
    </div>
  )
 
}

