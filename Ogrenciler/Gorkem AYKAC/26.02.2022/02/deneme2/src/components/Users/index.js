import {PropTypes,defaultProps} from "prop-types";

function index({name,isLogged,students, age, address}) {
  return (
    <div>
      <h1>
        {
          isLogged?`Benim adım ${name} ${age}`:"Giriş yapmadınız"
        }
      </h1>
      <h2>{address.title} / {address.zip}</h2>
      {students.map((student,index)=>(
        <div key={index}>
          {student}
        </div>
      ))}
    </div>
  )
}
index.propTypes={
  name:(PropTypes.string).isRequired,
  isLogged:PropTypes.bool.isRequired,
  students:PropTypes.array.isRequired,
  age:PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  address:PropTypes.shape({

    title:PropTypes.string,
    zip:PropTypes.number

  })
  
}
index.defaultProps={
    isLogged:false
}
export default index
