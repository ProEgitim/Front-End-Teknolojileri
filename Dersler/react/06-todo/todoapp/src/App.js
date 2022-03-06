import React, { useState } from "react";
import './App.css';


const initalState = [
  {id:1, title:"Kitap oku", done: false},
  {id:2, title:"Js Çalış", done: true}
]
export default function App() {
  const [liste, setListe] = useState(initalState);
  const [yeniBaslik, setYeniBaslik] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Yapılacaklar Listesi</h1>
        <div className="ekleme_formu">
          <input value={yeniBaslik} onChange={e => setYeniBaslik(e.target.value)} type="text" placeholder="Todo Ekle" />
          <button onClick={()=>{
            setListe([...liste, {id: Date.now(),title:yeniBaslik, done:false}])
            setYeniBaslik("")
          }
          }>Ekle</button>
        </div>
        <div className="liste">
            {liste.map(item => (<div key={item.id} onClick={()=>{
              setListe(liste.map(el => el.id === item.id ? {...el, done: !el.done } : el)) // {id:2, title: "Js Çalış", done:false}
            }} className={item.done ? "yapildi" : ""}>{item.title}</div>))}
        </div>
        <button onClick={()=>
          setListe(liste.filter(item=>!item.done))} 
          className="temizle">Tamamlananları Temizle</button>
      </header>
    </div>
  );
}
