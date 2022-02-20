import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


const MyBlog=(props)=>{
const data = props.data;

    
  return (
    <div>
        {
            data.map((data)=>(
                <div key={data.id} className="border border-primary rounded">
                    <h2>{data.name}</h2>
                    <p>{data.surname}</p>
                    <p>{data.age}</p>
                    <p>{data.job}</p>
                    <button onClick={()=>props.delete(data.id)}>DELETE USER</button>
                    <hr/>
                </div>
            ))
        }
       
    </div>
  )
}
export default MyBlog
