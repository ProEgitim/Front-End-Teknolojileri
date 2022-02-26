import {Routes, Route, Link} from 'react-router-dom'
import About from './components/about'
import Home from './components/home'
function App() {
  return (
    <div>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path= '/about' element={<About/>}/>
     </Routes>
    </div>
  );
}

export default App;
