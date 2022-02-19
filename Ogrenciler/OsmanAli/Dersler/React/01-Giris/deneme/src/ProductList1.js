import React, { Component } from 'react'

export default class ProductList extends Component {
  render() {
    const title = "Domainler";
    let okunmaSayisi = 500;
    const blog = {title:"Başlık", content:"Deneme Yazısı"};
    const link = "https://www.google.com.tr";
    const styleObject = {
      color: "white",
      backgroundColor: "orange",
      border:"1px solid white",
      borderRadius: "8px",
      padding: "7px",
      fontFamily: "Roboto"
    }
    const handleClick = (isim, e) => { 
      console.log('Merhaba' + isim)
      console.log(e.target)
    } 
    return (
      <div>
        <h4>{title}</h4>
        <p>{okunmaSayisi}</p>
        <h5>{blog.title}</h5>
        <p>{blog.content}</p>
        <a href={link} target="blank" style={styleObject}>Google</a>
        <button onClick={handleClick} style={styleObject}>Selam Ver</button>
      </div>
    )
  }
}
