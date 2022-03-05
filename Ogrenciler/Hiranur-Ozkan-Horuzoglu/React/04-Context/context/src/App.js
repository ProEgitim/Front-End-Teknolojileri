import  { ThemeProvider} from "./context/ThemeContext";
import Container from "./components/Container"
import "./App.css";


function App() {
  return (
    <ThemeProvider>
      <Container></Container>
    </ThemeProvider>
  );
}

export default App;
