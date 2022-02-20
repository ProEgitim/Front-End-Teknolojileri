import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


const MyBlog=(props)=>{
const data = props.data;

    
  return (
    <div>
        {
            data.map((data)=>(
         
                <div key={data.id} className="card">
                    <h5 className='card-header '>{data.name}</h5>
                    <div className='card-body '>{data.surname}</div>
                    <h5 className='card-title '>{data.age}</h5>
                    <p className='card-text '>{data.job}</p>
                    <button className='btn btn-primary ' onClick={()=>props.delete(data.id)}>DELETE USER</button>
                    <hr/>
                </div>
            ))
        }
       
    </div>
  )
}
export default MyBlog

