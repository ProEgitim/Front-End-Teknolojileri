import React from 'react'

export default function Aside() {
    const styledDiv = {
        backgroundColor: '#f3f3f3',
        display : 'flex',
        flexDirection:'column',
        width: '30%',
        margin : '5px 5px',
        alignItems:'center'
    }
  return (
    <div style={styledDiv}>Most Reads</div>
  )
}
