import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
export default  function Modal (props){
  
    const addBlog = ()=>{
       $('#modalForm').slideToggle(1000);
       $('#Modal').toggleClass('modalBackGround')
    }

  return (
    <div id='modalUp'>
    <form id='modalForm' >
          <div className="items col">
            <div className="row">
              <div className=" col-3">
                <div className=" form-floating">
                 
                  <input className="form-control " type="text" id="Topic" placeholder="Topic"required/>
                  <label for="Topic">Topic</label>
                 
                </div>
              </div>
              <div className=" col-3">
                <div className=" form-floating">
                 
                  <input className="form-control " type="text" id="Issue" placeholder="Issue"required/>
                  <label for="Issue">Issue</label>
                 
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <div className="form-floating">
                  
                  <input className="form-control " type="text" id="Read Time" placeholder="Read Time"required/>
                  <label for="Read Time">Read Time</label>
                 
                </div>
              </div>
              <div className="col-3">
                <div className=" form-floating">
                  
                  <input className="form-control" type="text" id="Author" placeholder="Author" required/>
                  <label for="Author">Author</label>
                </div>
              </div>
            </div>
            <div className="row">
            
            <div className="row">
              <div className="col-2">
                <button className="btn btn-primary" type="submit">Send</button>
                <button className="btn btn-danger" type="reset">Reset</button>
              </div>
            </div>
          </div>
          </div>
    </form>
    <button id='buttonAddBlog' onClick={addBlog}>Add Blog <i class="fa-solid fa-circle-xmark"></i></button>
    </div>
  )
}

