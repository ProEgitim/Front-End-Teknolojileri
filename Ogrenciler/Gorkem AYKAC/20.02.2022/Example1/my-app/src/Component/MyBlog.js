import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

const MyBlog=(props)=>{
const data = props.data;
const [modal ,setModal] = useState(false);
const toggle=()=>setModal(!modal);
const saveData=()=>{
  console.log("sdasdas")
}
  return (
    <div className='row d-flex flex-row gy-5'>
    {
        data.map((data)=>(
     
            <div key={data.id} className="col-6 ">
              <div className='card'>
                <h5 className='card-header '>{data.name}</h5>
                <div className='card-body '>{data.surname}</div>
                <h5 className='card-title '>{data.age}</h5>
                <p className='card-text '>{data.job}</p>
                <button className='btn btn-primary ' onClick={()=>props.delete(data.id)}>DELETE USER</button>
                </div>
            </div>
        ))
    }

          <Button
    color="danger"
    onClick={toggle}
  >
    Click Me
  </Button>
  <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>
      Modal title
    </ModalHeader>
    <ModalBody>
      
    </ModalBody>
    <ModalFooter>
      <Button
        color="primary"
        onClick={saveData}
      >
      SAVE
      </Button>
      {' '}
      <Button onClick={toggle}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
       
    </div>
  )
}
export default MyBlog

