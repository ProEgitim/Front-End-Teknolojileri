import {Routes, Route, Link} from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import About from './components/about'
import Home from './components/home'
import Users from './components/Users'
import User from './components/User'
function App() {
  const [users, setUsers]= useState([])
  
  useEffect(()=>{
    axios("https://jsonplaceholder.typicode.com/users")
    .then((res)=>setUsers(res.data))
    .catch((e)=>console.log(e))       
  },[])


  return (
    <div>
    <nav>
    <main></main>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
      </ul>
    </nav>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path= '/about' element={<About/>}/>
       <Route path= '/users' element={<Users users={users}/>}/>
       <Route path= '/users/:userId' element={<User users={users}/>}/>  
       <Route path= '*' element={<main>404</main>}/>                
     </Routes>
    </div>
  );
}

export default App;
