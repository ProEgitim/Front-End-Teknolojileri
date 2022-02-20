import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'


//DOM'a islem yapan js dosyası bu sekilde tanimlanir.
//Yukarida tanimlanan importlar en sn DOM'a gidecek importlardir. Dolayisiyle siralamasi önemlidir.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

