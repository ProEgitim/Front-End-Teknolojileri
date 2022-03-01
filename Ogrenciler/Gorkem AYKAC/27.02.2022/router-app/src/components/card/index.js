import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Card({id, name, surname }) {
  return (
    <div className={ styles.card}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{surname}</p>
        <button className="btn btn-primary">
        <Link className="btn btn-primary" to={'/users/'+id}>Detail</Link> 
        </button>
      </div>
    </div>

  );
}
export default Card;
