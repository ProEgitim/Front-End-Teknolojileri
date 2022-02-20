import React from 'react'

const WriteAllData=(props)=> {

  const data = props.data;
  const deletedFunction=(id,e)=>
  {
   // props.deleteData(id);
    e.target.parentNode.style.backgroundColor = getRandomColor();
    
  }
  const getRandomColor=()=> {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <div>

        {
        data.map((b)=>
        (
            <div key={b.id}>
                <h1>{b.name}</h1>
                <h2>{b.surname}</h2>
                <p>{b.age}</p>
                <button onClick={(e)=>deletedFunction(b.id,e)}>CHANGE COLOR</button>
                <hr/>
               
            </div>
        ))
        }       

        
    </div>
  )
}
export default WriteAllData;