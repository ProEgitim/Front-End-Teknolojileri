import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap'
import MyComponent from './Component/MyComponent';
import Navi from './Component/Navi';
function App() {
  return (
    <div className="App">
      <Container>
        <Navi>ornek</Navi>
        <Row>

          <Col>
            <MyComponent/>
          </Col>

        </Row>
        
      </Container>
     
    </div>
  );
}

export default App;
