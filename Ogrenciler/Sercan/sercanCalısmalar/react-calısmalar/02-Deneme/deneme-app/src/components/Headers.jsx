import React from 'react'

export default function Headers(props) {
    const styledh1 = {
        backgroundColor: '#f3f3f3',
        justifyContent:'center',
        display:'flex'
    }

   
  return (
    <div>
    <h1 style={styledh1}>Frontend Blog </h1>
    <input onKeyUp={props.onFilter} style={{marginLeft:'5px'}} type="text" placeholder='Write and press enter' />

   </div>
  )
}
