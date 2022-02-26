import React from 'react'

export default function Aside(props) {
  
  let filters = props.xfilter;

  console.log(filters);
  
    const styledDiv = {
        backgroundColor: '#f3f3f3',
        display : 'flex',
        flexDirection:'column',
        width: '30%',
        margin : '5px 5px',
        alignItems:'center'
    }

    const itemDiv ={
      border:' 1px solid ',
      width: '150px',
      height: '170px',
      margin: '5px 5px',
      backgroundColor:'#f9f5f6',
      boxShadow : '6px 5px 0 0 #aaaaaa',
      borderRadius: '5px'

   }
   
  return  <div style={styledDiv}>
{/*          
      <h2><u> Filtered</u></h2> 
      <div style={itemDiv}>
        <h3>{filteredVal.topic}</h3>
        <div>Issue:{filteredVal.issue}</div>
        <div>ReadTime:{filteredVal.readTime}</div>
        <div>Author:{filteredVal.author}</div>
       
        <button style={{
          margin:'5px 20px 5px',
          padding: '5px',
          background:'#0b62e0',
          color: '#fff'
          
        }} >Submit now..</button>
      </div>
       */}
    
    </div>
  
}
