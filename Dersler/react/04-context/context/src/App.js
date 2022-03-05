import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import Button from './components/Button';
import Nav from './components/Nav';

function App() {
  return (
    <ThemeProvider>
      <Nav />
      <Button/>
    </ThemeProvider>
  );
}

export default App;
