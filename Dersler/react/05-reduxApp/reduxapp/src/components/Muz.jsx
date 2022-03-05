import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return{
    muz: state.muz
  }
}

function Muz(props) {
  console.log(props)
  return (
    <div>
      <h1>Muz Sayısı: {props.muz}</h1>
      <br />
      <button onClick={()=>props.dispatch({type:'EKLE'})}>Ekle</button>
      <button onClick={()=>props.dispatch({type:'CIKAR'})}>Çıkar</button>
    </div>
  )
}

export default connect(mapStateToProps,null)(Muz)