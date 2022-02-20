import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap'
import MyComponent from './Component/MyComponent';

function App() {
  return (
    <div className="App">
      <Container>
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
