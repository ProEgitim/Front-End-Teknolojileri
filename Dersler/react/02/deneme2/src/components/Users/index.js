import PropTypes from "prop-types";

function index({name,isLogged,age,students,adress}) {
  if (!isLogged){
    return <div>Giriş Yapmadınız</div>
  }
  return (
    <div>
      <h1>
        Benim adım {name} ({age})
      </h1>
      <h2>{adress.title} / {adress.zip}</h2>
      {students.map((student,index)=>(
        <div key={index}>
          {student}
        </div>
      ))}
    </div>
  )
}
index.propTypes={
  name:PropTypes.string.isRequired,
  isLogged:PropTypes.bool.isRequired,
  age:PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
  students:PropTypes.array.isRequired,
  adress:PropTypes.shape({
    title:PropTypes.string,
    zip:PropTypes.number
  })
}
index.defaultProps={
isLogged:false,
}
export default index
