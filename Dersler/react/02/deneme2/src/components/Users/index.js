import PropTypes from "prop-types";

function index({name,isLogged,students}) {
  return (
    <div>
      <h1>
        {
          isLogged?`Benim adım ${name}`:"Giriş yapmadınız"
        }
      </h1>
      {students.map((student,index)=>(
        <div key={index}>
          {student}
        </div>
      ))}
    </div>
  )
}
index.propTypes={
  name:PropTypes.string,
  isLogged:PropTypes.bool,
  students:PropTypes.array
}
export default index
