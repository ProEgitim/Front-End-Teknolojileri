import React from 'react'
import { useState, useEffect } from 'react';//DOM'a state degisikligi oldugunu belirten import.

import WriteAllData from './WriteAllData'
const MyComponent=()=>{
    const[data,setData] = useState([
    {
        id:"1",
        name:"1",
        surname:"1",
        age:"1"
    },
    {
        id:"2",
        name:"2",
        surname:"2",
        age:"2"
    },
    {
        id:"3",
        name:"3",
        surname:"3",
        age:"3"
    },
    {
        id:"4",
        name:"4",
        surname:"4",
        age:"4"
    }

])
const deleteData=(id)=>
{
    const newData=data.filter(data=>data.id!==id)
    setData(newData)
}

  return (
    <div>
        <button>BILGILERI GETIR</button>
        <WriteAllData data={data} deleteData={deleteData}/>
    
    
    </div>

    )
}
export default MyComponent;
