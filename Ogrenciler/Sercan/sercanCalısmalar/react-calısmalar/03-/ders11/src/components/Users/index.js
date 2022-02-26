import React from "react";
import {PropTypes} from "prop-types";

export default function index({ name, isLogged, students, age, adress }) {
    if(!isLogged){
        return <div>Giriş Yapmadınız</div>
    }

  return (
    <div>
      <h1> Benim adım {name} {age}</h1>
      {students.map((student, index) => (
        <div key={index}>{student}</div>
      ))}

      <h2>{adress.title} / {adress.zip}</h2>
    </div>
  );
}

index.propTypes = {
  name: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  students: PropTypes.array.isRequired,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  adress: PropTypes.shape({
      title: PropTypes.string,
      zip: PropTypes.number
    })
};

index.defaultProps={
    isLogged:false,
};

