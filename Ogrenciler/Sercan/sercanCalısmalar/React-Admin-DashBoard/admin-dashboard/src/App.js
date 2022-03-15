
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './components/pages/home/Home' ;
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import UserList from './components/pages/userList/UserList';
import User from './components/pages/user/User';
import NewUser from './components/pages/newUser/NewUser';
import ProductList from "./components/pages/productList/ProductList"
import Product from './components/pages/product/Product';
import NewProduct from './components/pages/newProduct/NewProduct';
function App() {
  return (
    <Router>

      <Topbar/>
        <div className='container'>
          <Sidebar/>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/users' element={<UserList/>}></Route>
              <Route path='/user/:userId' element={<User/>}></Route>
              <Route path='/newUser' element={<NewUser/>}></Route>
              <Route path='/products' element={<ProductList/>}></Route>
              <Route path='/product/:productId' element={<Product/>}></Route>
              <Route path='/newProduct' element={<NewProduct/>}></Route>
          </Routes>
          
        </div>
    </Router>
  );
}

export default App;
