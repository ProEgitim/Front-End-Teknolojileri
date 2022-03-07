import Todobody from './components/Todobody';
import Todoheader from './components/Todoheader';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todoheader/>
        <Todobody/>
      </header>
       
    </div>
  );
}

export default App;
