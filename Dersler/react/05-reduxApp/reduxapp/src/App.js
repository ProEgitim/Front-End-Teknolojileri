import './App.css';
import Muz from './components/Muz';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store = {store}>
          <Muz/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
