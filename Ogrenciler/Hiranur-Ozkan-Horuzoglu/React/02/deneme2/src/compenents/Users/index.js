import PropTypes from "prop-types";
//import "./index.css"

function index({ name, isLogged, students, age, adress }) {
  if (!isLogged) {
    return <div>Giris yapmadiniz</div>;
  }
  return (
    <div>
      <h1>
        Benim adim {name} {age}
      </h1>
      <h2>
        {adress.title} / {adress.zip}
      </h2>
      {students.map((student, index) => (
        <div key={index}>{student}</div>
      ))}
    </div>
  );
}
index.propTypes = {
  name: PropTypes.string.isRequired, //.isRequired zorunlu demek(string,number,bool gibi)
  isLogged: PropTypes.bool.isRequired,
  students: PropTypes.array.isRequired,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  adress: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
};

index.defaultProps = {
  isLogged: false,
};

export default index;
