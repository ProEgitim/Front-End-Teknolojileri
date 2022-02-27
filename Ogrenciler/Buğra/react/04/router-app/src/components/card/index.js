import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "./styles.module.css";

function Card({name,surname}) {
  return (
    <div className="col-sm-12">
    <div className={"card "+styles.card}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{surname}</p>
        <a href="#" className="btn btn-primary">Details</a>
      </div>
    </div>
  </div>
  );
}
export default Card