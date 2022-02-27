import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyComponent from './Component/MyComponent';
import Nav from './Component/Nav';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
           <Nav/>
        </Row>
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
