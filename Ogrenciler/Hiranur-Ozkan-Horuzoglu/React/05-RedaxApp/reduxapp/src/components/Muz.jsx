import React from "react";
import { connect } from "react-redux";

const mapStateProps = (state) => {
  return {
    muz: state.muz,
  };
};

function Muz(props) {
    console.log(props)
  return (
    <div>
      <h1>Muz Sayisi: {props.muz}</h1>
      <br />
      <button onClick={()=>props.dispatch({type:'EKLE'})}>EKLE</button>
      <button onClick={()=>props.dispatch({type:'CIKART'})}>CIKART</button>
    </div>
  );
}
export default connect(mapStateProps, null)(Muz);
