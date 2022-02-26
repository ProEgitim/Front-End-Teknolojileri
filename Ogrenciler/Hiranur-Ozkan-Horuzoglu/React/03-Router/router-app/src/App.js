import {Routes,Route,Link} from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
             <Link to="/">Home</Link> 
          </li>
          <li>
            <Link to="/about">About</Link> {/*sayfayi yenilemeden linke gidiyor */}
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
