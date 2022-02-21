import React from "react";
import Bloglist from "./Bloglist";
import Headers from "./Headers";

import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App container">
    <Headers>Blog Header</Headers>
    <div className="row">
    <Bloglist>Bloglist</Bloglist>
    </div>
    
    </div>
  );
}

export default App;
