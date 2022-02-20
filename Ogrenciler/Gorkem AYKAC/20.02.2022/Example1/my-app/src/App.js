import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap'
import MyComponent from './Component/MyComponent';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          
        </Row>
        <Row>
          <Col xs="3">

          </Col>
          <Col xs="9">
            <MyComponent/>
          </Col>
        </Row>
      </Container>
     
    </div>
  );
}

export default App;
