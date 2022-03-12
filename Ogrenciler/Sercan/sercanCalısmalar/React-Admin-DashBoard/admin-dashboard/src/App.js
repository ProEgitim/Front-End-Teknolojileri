
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './components/pages/home/Home' ;


function App() {
  return (
    <div>

      <Topbar/>
        <div className='container'>
          <Sidebar/>
          <Home/>
        </div>
    </div>
  );
}

export default App;
